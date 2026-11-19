(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const body = document.body;
  const reduceMQ = matchMedia("(prefers-reduced-motion: reduce)");
  const reduced = () => reduceMQ.matches;
  // Sandboxed frames can refuse URL updates; the deck keeps working without them.
  const replaceUrl = (url) => {
    try {
      history.replaceState(null, "", url);
    } catch (err) {
      if (!(err instanceof DOMException)) throw err;
    }
  };
  const pad2 = (n) => String(n).padStart(2, "0");
  const money = (n) =>
    n < 0
      ? "($" + Math.abs(n).toLocaleString("en-US") + ")"
      : "$" + n.toLocaleString("en-US");

  const stage = $("#stage");
  const deck = $("#deck");
  const intro = $("#intro");
  const slides = $$(".slide", deck);
  const TOTAL = slides.length;

  function fit() {
    stage.style.setProperty(
      "--s",
      Math.min(innerWidth / 1920, innerHeight / 1080),
    );
  }
  addEventListener("resize", fit);
  fit();

  const toastEl = $("#toast");
  let toastTimer = 0;
  function toast(message) {
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2200);
  }

  // scorebug on every slide (inside the slide so it also prints)
  slides.forEach((slide, i) => {
    const n = i + 1;
    slide.insertAdjacentHTML(
      "afterbegin",
      `<div class="scorebug" aria-hidden="true"><span>COURTSIDE CONNECT</span><span>${pad2(n)} / ${TOTAL}</span></div>`,
    );
    slide.inert = true;
  });

  /* ---------- sound (Web Audio, muted by default) ---------- */
  const sound = (() => {
    let ctx = null;
    let noiseBuf = null;
    let isOn = false;
    function ensure() {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!ctx) {
        ctx = new AC();
        noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
        const data = noiseBuf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      }
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    }
    function noise(dur, type, f0, f1, peak, attack) {
      const t = ctx.currentTime;
      const src = ctx.createBufferSource();
      src.buffer = noiseBuf;
      const filter = ctx.createBiquadFilter();
      filter.type = type;
      filter.frequency.setValueAtTime(f0, t);
      filter.frequency.exponentialRampToValueAtTime(f1, t + dur);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(peak, t + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(filter).connect(gain).connect(ctx.destination);
      src.start(t);
      src.stop(t + dur + 0.05);
    }
    function horn(at) {
      const t = ctx.currentTime + at;
      const gain = ctx.createGain();
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 1800;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.09, t + 0.02);
      gain.gain.setValueAtTime(0.09, t + 0.55);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
      [233, 311].forEach((f) => {
        const osc = ctx.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.value = f;
        osc.connect(lp);
        osc.start(t);
        osc.stop(t + 0.75);
      });
      lp.connect(gain).connect(ctx.destination);
    }
    return {
      get on() {
        return isOn;
      },
      toggle() {
        isOn = !isOn;
        if (isOn && !ensure()) {
          isOn = false;
          toast("Sound is not available in this browser.");
        }
        return isOn;
      },
      tipoff() {
        if (!isOn) return;
        noise(2.6, "bandpass", 700, 1100, 0.25, 0.45);
        horn(0.05);
      },
      cut() {
        if (!isOn) return;
        noise(0.22, "highpass", 1500, 5000, 0.05, 0.04);
      },
    };
  })();

  /* ---------- arena canvas (intro only) ---------- */
  const arena = (() => {
    const cv = $("#arena");
    const ctx = cv.getContext("2d");
    let W = 0,
      H = 0,
      raf = 0,
      court = null;
    const beams = [
      { x: 0.16, base: 0.35, sp: 0.00042, ph: 0 },
      { x: 0.36, base: 0.12, sp: 0.00031, ph: 2 },
      { x: 0.64, base: -0.12, sp: 0.00036, ph: 4 },
      { x: 0.84, base: -0.35, sp: 0.00028, ph: 1 },
    ];
    const haze = [
      { x: 0.2, y: 0.4, r: 0.45, sp: 0.00006 },
      { x: 0.8, y: 0.3, r: 0.5, sp: 0.00005 },
      { x: 0.5, y: 0.75, r: 0.55, sp: 0.00004 },
    ];
    let flashes = [];
    function buildCourt() {
      court = document.createElement("canvas");
      court.width = W;
      court.height = H;
      const c = court.getContext("2d");
      const S = Math.min(W / 1920, H / 1080);
      const top = (H - 1080 * S) / 2;
      const f = 1728 * S,
        D = 12,
        camH = 6,
        hy = top + 390 * S;
      const P = (X, Z) => {
        const s = f / (Z + D);
        return [W / 2 + X * s, hy + camH * s];
      };
      const paths = [];
      const poly = (pts) => paths.push(pts.map(([x, z]) => P(x, z)));
      poly([
        [-14, 0],
        [-14, 15],
        [14, 15],
        [14, 0],
      ]);
      poly([
        [0, 0],
        [0, 15],
      ]);
      const arc = (cx, cz, r, a0, a1) => {
        const pts = [];
        for (let i = 0; i <= 40; i++) {
          const a = a0 + (a1 - a0) * (i / 40);
          pts.push([cx + r * Math.cos(a), cz + r * Math.sin(a)]);
        }
        poly(pts);
      };
      arc(0, 7.5, 1.8, 0, Math.PI * 2);
      [-1, 1].forEach((s) => {
        poly([
          [s * 14, 5.05],
          [s * 8.2, 5.05],
          [s * 8.2, 9.95],
          [s * 14, 9.95],
        ]);
        arc(
          s * 8.2,
          7.5,
          1.8,
          s > 0 ? Math.PI / 2 : -Math.PI / 2,
          s > 0 ? Math.PI * 1.5 : Math.PI / 2,
        );
        const bx = s * 12.425;
        const a = Math.asin(6.6 / 6.75);
        if (s > 0) arc(bx, 7.5, 6.75, Math.PI - a, Math.PI + a);
        else arc(bx, 7.5, 6.75, -a, a);
        poly([
          [s * 14, 0.9],
          [s * 12.425 - s * 6.75 * Math.cos(a), 0.9],
        ]);
        poly([
          [s * 14, 14.1],
          [s * 12.425 - s * 6.75 * Math.cos(a), 14.1],
        ]);
      });
      const floor = [P(-14, 0), P(-14, 15), P(14, 15), P(14, 0)];
      c.fillStyle = "rgba(184, 69, 30, 0.10)";
      c.beginPath();
      floor.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
      c.fill();
      const stroke = (style, width, blur, color) => {
        c.strokeStyle = style;
        c.lineWidth = width * S;
        c.shadowBlur = blur * S;
        c.shadowColor = color;
        paths.forEach((pts) => {
          c.beginPath();
          pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
          c.stroke();
        });
      };
      stroke("rgba(240, 160, 122, 0.35)", 7, 26, "rgba(240, 160, 122, 0.9)");
      stroke("rgba(246, 243, 236, 0.8)", 2.5, 8, "rgba(246, 243, 236, 0.8)");
    }
    function resize() {
      W = cv.width = innerWidth;
      H = cv.height = innerHeight;
      buildCourt();
      if (!raf) draw(performance.now());
    }
    function draw(t) {
      ctx.globalCompositeOperation = "source-over";
      const bg = ctx.createRadialGradient(
        W / 2,
        H * 0.25,
        0,
        W / 2,
        H * 0.25,
        Math.max(W, H) * 0.8,
      );
      bg.addColorStop(0, "#14283d");
      bg.addColorStop(1, "#050b12");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      haze.forEach((h) => {
        const x = (h.x + Math.sin(t * h.sp) * 0.08) * W,
          y = h.y * H,
          r = h.r * W;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, "rgba(246, 243, 236, 0.05)");
        g.addColorStop(1, "rgba(246, 243, 236, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });
      ctx.drawImage(court, 0, 0);
      ctx.globalCompositeOperation = "lighter";
      const L = H * 1.3;
      beams.forEach((b) => {
        const a = b.base + Math.sin(t * b.sp + b.ph) * 0.3,
          w = 0.1,
          ox = b.x * W,
          oy = -20;
        const g = ctx.createLinearGradient(
          ox,
          oy,
          ox + Math.sin(a) * L,
          oy + Math.cos(a) * L,
        );
        g.addColorStop(0, "rgba(246, 243, 236, 0.16)");
        g.addColorStop(1, "rgba(246, 243, 236, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(ox + Math.sin(a - w) * L, oy + Math.cos(a - w) * L);
        ctx.lineTo(ox + Math.sin(a + w) * L, oy + Math.cos(a + w) * L);
        ctx.fill();
        const py = H * 0.86,
          px = ox + Math.tan(a) * (py - oy);
        const pg = ctx.createRadialGradient(px, py, 0, px, py, W * 0.09);
        pg.addColorStop(0, "rgba(240, 160, 122, 0.12)");
        pg.addColorStop(1, "rgba(240, 160, 122, 0)");
        ctx.fillStyle = pg;
        ctx.fillRect(px - W * 0.1, py - W * 0.1, W * 0.2, W * 0.2);
      });
      if (raf && Math.random() < 0.05) {
        const side =
          Math.random() < 0.5 ? Math.random() * 0.2 : 0.8 + Math.random() * 0.2;
        flashes.push({
          x: side * W,
          y: (0.45 + Math.random() * 0.25) * H,
          life: 1,
        });
      }
      flashes = flashes.filter((f) => (f.life -= 0.1) > 0);
      flashes.forEach((f) => {
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 14);
        g.addColorStop(0, `rgba(255, 255, 255, ${f.life})`);
        g.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(f.x - 14, f.y - 14, 28, 28);
      });
      ctx.globalCompositeOperation = "source-over";
    }
    function loop(t) {
      draw(t);
      raf = requestAnimationFrame(loop);
    }
    return {
      start() {
        if (raf) return;
        resize();
        if (reduced()) {
          draw(0);
          return;
        }
        raf = requestAnimationFrame(loop);
      },
      stop() {
        cancelAnimationFrame(raf);
        raf = 0;
      },
      resize,
    };
  })();
  addEventListener("resize", () => {
    if (body.classList.contains("is-intro")) arena.resize();
  });
  document.addEventListener("visibilitychange", () => {
    if (!body.classList.contains("is-intro")) return;
    if (document.hidden) arena.stop();
    else arena.start();
  });

  /* ---------- decorative game clock ---------- */
  const clockEl = $("#jt-clock");
  let clockSecs = 7 * 60 + 42,
    clockTimer = 0;
  function startClock() {
    clearInterval(clockTimer);
    clockTimer = setInterval(() => {
      clockSecs = Math.max(0, clockSecs - 1);
      clockEl.textContent = `${Math.floor(clockSecs / 60)}:${pad2(clockSecs % 60)}`;
    }, 1000);
  }

  /* ---------- slide navigation ---------- */
  let current = 0;
  let transition = null;

  function restartLive(slide) {
    slide.classList.remove("is-live");
    void slide.offsetWidth;
    slide.classList.add("is-live");
  }

  function show(n) {
    n = Math.max(1, Math.min(TOTAL, n));
    if (n === current) return;
    if (transition) transition.finish();
    const prev = slides[current - 1];
    const next = slides[n - 1];
    next.classList.add("is-current");
    next.inert = false;
    restartLive(next);
    current = n;
    onEnter(next);
    updateChrome();
    replaceUrl("#" + n);
    if (!prev) return;
    prev.inert = true;
    prev.classList.remove("is-current");
    prev.classList.add("is-leaving");
    sound.cut();
    let done = false;
    const anims = [];
    const cleanup = () => {
      if (done) return;
      done = true;
      prev.classList.remove("is-leaving", "is-live");
      onLeave(prev);
      transition = null;
    };
    anims.push(next.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: "ease-out" }));
    anims[0].onfinish = cleanup;
    transition = {
      finish() {
        anims.forEach((x) => x.finish());
        cleanup();
      },
    };
  }
  const next = () => show(current + 1);
  const prev = () => show(current - 1);

  /* ---------- chrome ---------- */
  const counter = $("#counter");
  const notesEl = $("#notes");
  function updateChrome() {
    counter.textContent = `${pad2(current)} / ${TOTAL}`;
    $("#progress-fill").style.setProperty("--p", current / TOTAL);
    $("#btn-prev").disabled = current <= 1;
    $("#btn-next").disabled = current >= TOTAL;
    if (!notesEl.hidden) fillNotes();
  }
  $("#btn-prev").addEventListener("click", prev);
  $("#btn-next").addEventListener("click", next);

  let idleTimer = 0;
  function wake() {
    body.classList.remove("is-idle");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => body.classList.add("is-idle"), 2500);
  }
  addEventListener("mousemove", wake, { passive: true });
  wake();

  function fillNotes() {
    const src =
      slides[current - 1] && slides[current - 1].querySelector(".slide-notes");
    $("#notes-slide").textContent = `(slide ${current})`;
    $("#notes-text").textContent = src
      ? src.textContent.trim()
      : "No speaker notes for this slide.";
  }
  function toggleNotes() {
    notesEl.hidden = !notesEl.hidden;
    $("#btn-notes").setAttribute("aria-pressed", String(!notesEl.hidden));
    if (!notesEl.hidden) fillNotes();
  }
  $("#btn-notes").addEventListener("click", toggleNotes);

  function toggleFull() {
    const d = document,
      el = d.documentElement;
    const isFull = d.fullscreenElement || d.webkitFullscreenElement;
    const req = isFull
      ? d.exitFullscreen || d.webkitExitFullscreen
      : el.requestFullscreen || el.webkitRequestFullscreen;
    if (!req) {
      toast("Fullscreen is not available here.");
      return;
    }
    const result = req.call(isFull ? d : el);
    if (result && result.catch)
      result.catch(() => toast("Fullscreen was blocked by the browser."));
  }
  $("#btn-full").addEventListener("click", toggleFull);

  function toggleSound() {
    const on = sound.toggle();
    const btn = $("#btn-sound");
    btn.setAttribute("aria-pressed", String(on));
    btn.querySelector("use").setAttribute("href", on ? "#i-vol" : "#i-vol-x");
    toast(on ? "Arena sound on" : "Arena sound off");
  }
  $("#btn-sound").addEventListener("click", toggleSound);

  /* ---------- overview ---------- */
  const overview = $("#overview");
  const ovGrid = $("#ov-grid");
  function openOverview() {
    ovGrid.textContent = "";
    slides.forEach((slide, i) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "ov-tile" + (i + 1 === current ? " is-now" : "");
      tile.setAttribute(
        "aria-label",
        `Go to slide ${i + 1}: ${slide.dataset.title}`,
      );
      const thumb = document.createElement("span");
      thumb.className = "ov-thumb";
      const clone = slide.cloneNode(true);
      clone.classList.remove("is-live", "is-current", "is-leaving");
      clone.removeAttribute("aria-label");
      clone.setAttribute("aria-hidden", "true");
      $$("[id]", clone).forEach((el) => el.removeAttribute("id"));
      thumb.appendChild(clone);
      const label = document.createElement("span");
      label.className = "ov-label";
      label.innerHTML = `<span>${pad2(i + 1)}</span><span></span>`;
      label.lastChild.textContent = slide.dataset.title;
      tile.append(thumb, label);
      tile.addEventListener("click", () => {
        closeOverview();
        show(i + 1);
      });
      ovGrid.appendChild(tile);
    });
    overview.hidden = false;
    const scale = parseFloat(stage.style.getPropertyValue("--s")) || 1;
    const w = ovGrid.firstChild.getBoundingClientRect().width / scale;
    ovGrid.style.setProperty("--ts", (w - 4) / 1920);
    (ovGrid.children[Math.max(0, current - 1)] || ovGrid.firstChild).focus();
  }
  function closeOverview() {
    overview.hidden = true;
  }
  $("#btn-overview").addEventListener("click", openOverview);
  $("#ov-close").addEventListener("click", closeOverview);
  $("#ov-intro").addEventListener("click", () => {
    closeOverview();
    startIntro();
  });
  function overviewKey(e) {
    const tiles = [...ovGrid.children];
    const i = tiles.indexOf(document.activeElement);
    const moves = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 4, ArrowUp: -4 };
    if (e.key === "Escape" || e.key === "o" || e.key === "O") {
      e.preventDefault();
      closeOverview();
      return;
    }
    if (e.key in moves) {
      e.preventDefault();
      const j = Math.max(
        0,
        Math.min(tiles.length - 1, (i < 0 ? 0 : i) + moves[e.key]),
      );
      tiles[j].focus();
    }
    if (e.key === "Tab") {
      const focusables = $$("button", overview);
      const first = focusables[0],
        last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  /* ---------- intro ---------- */
  let introState = "done";
  let introAnims = [];
  let introTimers = [];
  let lineupUntil = 0;

  function startIntro() {
    if (transition) transition.finish();
    slides.forEach((s) => {
      s.classList.remove("is-current", "is-live", "is-leaving");
      s.inert = true;
    });
    current = 0;
    introAnims.forEach((a) => a.cancel());
    introAnims = [];
    body.classList.add("is-intro");
    introState = "idle";
    replaceUrl(location.pathname + location.search);
    arena.start();
    startClock();
    $("#tipoff").focus({ preventScroll: true });
  }

  function tipOff() {
    if (introState !== "idle") return;
    introState = "playing";
    sound.tipoff();
    const first = slides[0];
    first.classList.add("is-current");
    const ease = "cubic-bezier(.7,0,.25,1)";
    if (reduced()) {
      introAnims.push(
        intro.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 300,
          fill: "forwards",
        }),
      );
      introAnims.push(
        deck.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          fill: "forwards",
        }),
      );
      introTimers.push(setTimeout(finishIntro, 320));
      return;
    }
    introAnims.push(
      $(".jt-flash").animate(
        [
          { opacity: 0 },
          { opacity: 0.85 },
          { opacity: 0 },
          { opacity: 0.6 },
          { opacity: 0 },
        ],
        { duration: 450 },
      ),
      $(".jt-bulbs-top").animate(
        [
          { opacity: 0.35 },
          { opacity: 1 },
          { opacity: 0.3 },
          { opacity: 1 },
          { opacity: 0.35 },
        ],
        { duration: 450 },
      ),
      $(".jt-bulbs-bottom").animate(
        [
          { opacity: 0.35 },
          { opacity: 1 },
          { opacity: 0.3 },
          { opacity: 1 },
          { opacity: 0.35 },
        ],
        { duration: 450 },
      ),
      $(".intro-l3").animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 250,
        fill: "forwards",
      }),
      $("#tipoff").animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
      }),
      intro.animate(
        [
          { transform: "none" },
          { transform: "translate(0px, 110px) scale(2)" },
        ],
        { duration: 1500, delay: 350, easing: ease, fill: "forwards" },
      ),
      deck.animate(
        [
          { transform: "translate(480px, 160px) scale(0.5)", opacity: 0 },
          { opacity: 1, offset: 0.25 },
          { transform: "none", opacity: 1 },
        ],
        { duration: 1500, delay: 350, easing: ease, fill: "both" },
      ),
      intro.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 250,
        delay: 1650,
        fill: "forwards",
      }),
    );
    introTimers.push(
      setTimeout(() => {
        restartLive(first);
        lineupUntil = performance.now() + 1100;
      }, 1450),
    );
    introTimers.push(setTimeout(finishIntro, 1910));
  }

  function finishIntro() {
    if (introState === "done") return;
    introState = "done";
    introTimers.forEach(clearTimeout);
    introTimers = [];
    introAnims.forEach((a) => a.cancel());
    introAnims = [];
    clearInterval(clockTimer);
    body.classList.remove("is-intro");
    arena.stop();
    const first = slides[0];
    first.classList.add("is-current");
    if (!first.classList.contains("is-live")) {
      restartLive(first);
      lineupUntil = performance.now() + 1100;
    }
    first.inert = false;
    current = 1;
    onEnter(first);
    updateChrome();
    replaceUrl("#1");
  }

  function skipIntro() {
    finishIntro();
    slides[0].classList.remove("is-live");
    lineupUntil = 0;
  }
  intro.addEventListener("click", () => {
    if (introState === "idle") tipOff();
    else if (introState === "playing") skipIntro();
  });

  /* ---------- keyboard ---------- */
  function moveRoving(group, from, delta) {
    const items = $$("button", group);
    const i = items.indexOf(from.closest("button"));
    const target = items[Math.max(0, Math.min(items.length - 1, i + delta))];
    if (target) target.focus();
  }

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (introState === "playing") {
      e.preventDefault();
      skipIntro();
      return;
    }
    if (performance.now() < lineupUntil && current === 1 && k !== "Shift") {
      e.preventDefault();
      slides[0].classList.remove("is-live");
      lineupUntil = 0;
      return;
    }
    if (k === "f" || k === "F") {
      e.preventDefault();
      toggleFull();
      return;
    }
    if (k === "m" || k === "M") {
      e.preventDefault();
      toggleSound();
      return;
    }
    if (introState === "idle") {
      if (
        k === " " ||
        k === "ArrowRight" ||
        k === "Enter" ||
        k === "PageDown"
      ) {
        e.preventDefault();
        tipOff();
      }
      return;
    }
    if (!overview.hidden) {
      overviewKey(e);
      return;
    }
    if (k === "n" || k === "N") {
      e.preventDefault();
      toggleNotes();
      return;
    }
    if (k === "o" || k === "O") {
      e.preventDefault();
      openOverview();
      return;
    }
    if (k === "Escape") {
      if (!notesEl.hidden) toggleNotes();
      return;
    }
    const t = e.target instanceof Element ? e.target : null;
    if (t && t.matches("input")) return; // sliders own their keys
    const roving = t && t.closest("[data-roving]");
    if (roving && (k === "ArrowLeft" || k === "ArrowRight")) {
      e.preventDefault();
      moveRoving(roving, t, k === "ArrowRight" ? 1 : -1);
      return;
    }
    if ((k === " " || k === "Enter") && t && t.closest("button")) return; // let the button act
    if (
      k === "ArrowRight" ||
      k === "ArrowDown" ||
      k === "PageDown" ||
      (k === " " && !e.shiftKey)
    ) {
      e.preventDefault();
      next();
    } else if (
      k === "ArrowLeft" ||
      k === "ArrowUp" ||
      k === "PageUp" ||
      (k === " " && e.shiftKey)
    ) {
      e.preventDefault();
      prev();
    } else if (k === "Home") {
      e.preventDefault();
      show(1);
    } else if (k === "End") {
      e.preventDefault();
      show(TOTAL);
    }
  });

  // after a mouse click on slide controls, drop focus so space and arrows go back to navigating
  deck.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn && e.detail > 0) btn.blur();
  });
  deck.addEventListener("pointerup", (e) => {
    if (e.target.matches("input")) setTimeout(() => e.target.blur(), 0);
  });

  /* ---------- per-slide behavior ---------- */
  const countRafs = new Map();
  const finalCount = (el) => parseFloat(el.dataset.count).toFixed(+el.dataset.decimals);
  function onEnter(slide) {
    $$("[data-count]", slide).forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const dec = +el.dataset.decimals;
      const fmt = (v) => v.toFixed(dec);
      cancelAnimationFrame(countRafs.get(el));
      if (reduced()) {
        el.textContent = finalCount(el);
        return;
      }
      const delay = el.closest(".d4") ? 380 : 220,
        dur = 750,
        t0 = performance.now() + delay;
      el.textContent = fmt(0);
      const step = (t) => {
        const p = Math.max(0, Math.min(1, (t - t0) / dur));
        el.textContent =
          p >= 1 ? finalCount(el) : fmt(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) countRafs.set(el, requestAnimationFrame(step));
      };
      countRafs.set(el, requestAnimationFrame(step));
    });
  }
  function finalizeCounts(root = document) {
    $$("[data-count]", root).forEach((el) => {
      cancelAnimationFrame(countRafs.get(el));
      el.textContent = finalCount(el);
    });
  }
  const onLeave = (slide) => finalizeCounts(slide);

  // exclusive toggle groups: strategy stages, signal nodes
  function exclusiveGroup(group, onChange) {
    const items = $$("button", group);
    items.forEach((btn) =>
      btn.addEventListener("click", () => {
        const pressed = btn.getAttribute("aria-pressed") === "true";
        items.forEach((b) => b.setAttribute("aria-pressed", "false"));
        if (!pressed) btn.setAttribute("aria-pressed", "true");
        if (onChange) onChange(pressed ? null : btn);
      }),
    );
    return () => {
      items.forEach((b) => b.setAttribute("aria-pressed", "false"));
      if (onChange) onChange(null);
    };
  }
  const resets = [];
  resets.push(exclusiveGroup($(".plan-stages")));
  resets.push(exclusiveGroup($(".nodes")));

  // flip cards
  const cards = $$(".pcard");
  function setCard(card, flipped) {
    card.setAttribute("aria-pressed", String(flipped));
    card
      .querySelector(".pcard-front")
      .setAttribute("aria-hidden", String(flipped));
    card
      .querySelector(".pcard-back")
      .setAttribute("aria-hidden", String(!flipped));
  }
  cards.forEach((card) => {
    setCard(card, false);
    card.addEventListener("click", () =>
      setCard(card, card.getAttribute("aria-pressed") !== "true"),
    );
  });
  resets.push(() => cards.forEach((c) => setCard(c, false)));

  // competitive table column highlight
  const comp = $(".comp");
  const compHeads = $$(".comp-head");
  function selectCol(i) {
    comp.dataset.sel = i;
    compHeads.forEach((b, j) =>
      b.setAttribute("aria-pressed", String(j === i)),
    );
  }
  compHeads.forEach((b, i) => b.addEventListener("click", () => selectCol(i)));
  resets.push(() => selectCol(0));
  const colStyle = document.createElement("style");
  colStyle.textContent = [0, 1, 2, 3, 4]
    .map(
      (i) =>
        `.comp[data-sel="${i}"] td[data-col="${i}"]{background:rgba(240,160,122,.13);box-shadow:inset 3px 0 0 #F0A07A,inset -3px 0 0 #F0A07A}` +
        `.comp[data-sel="${i}"] tr:last-child td[data-col="${i}"]{box-shadow:inset 3px 0 0 #F0A07A,inset -3px 0 0 #F0A07A,inset 0 -3px 0 #F0A07A}`,
    )
    .join("");
  document.head.appendChild(colStyle);
  $$(".comp-total td").forEach((td) => {
    const score = parseFloat(td.dataset.score);
    const cov = document.createElement("span");
    cov.className = "cov";
    cov.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 5; i++) {
      const seg = document.createElement("i");
      seg.style.setProperty(
        "--f",
        Math.max(0, Math.min(1, score - i)) * 100 + "%",
      );
      cov.appendChild(seg);
    }
    td.appendChild(cov);
  });

  // breakeven calculator
  const FIXED_COSTS = 1657000,
    BEDS = 100,
    HOSTING = 1800;
  const priceEl = $("#calc-price"),
    rightsEl = $("#calc-rights");
  const beEl = $("#calc-be"),
    neverEl = $("#calc-never");
  function calc() {
    const price = +priceEl.value,
      rights = +rightsEl.value;
    const revenue = BEDS * price * 12;
    const contribution = revenue - rights * 12 - HOSTING;
    $("#calc-price-out").textContent = money(price);
    $("#calc-rights-out").textContent = money(rights);
    priceEl.setAttribute("aria-valuetext", `${money(price)} per bed per month`);
    rightsEl.setAttribute(
      "aria-valuetext",
      `${money(rights)} per hospital per month`,
    );
    if (contribution <= 0) {
      beEl.hidden = true;
      neverEl.hidden = false;
    } else {
      const hospitals = Math.ceil(FIXED_COSTS / contribution);
      beEl.hidden = false;
      neverEl.hidden = true;
      beEl.textContent = String(hospitals);
      beEl.dataset.value = hospitals;
      beEl.setAttribute("aria-label", `${hospitals} hospitals`);
    }
  }
  function resetCalc() {
    priceEl.value = 40;
    rightsEl.value = 800;
    calc();
  }
  priceEl.addEventListener("input", calc);
  rightsEl.addEventListener("input", calc);
  $("#calc-reset").addEventListener("click", resetCalc);
  resets.push(resetCalc);
  calc();

  // pro forma chart
  const PF = {
    revenue: {
      label: "Revenue",
      vals: [28, 330, 798, 1530],
      text: ["$28K", "$330K", "$798K", "$1.53M"],
    },
    ebitda: {
      label: "EBITDA",
      vals: [-419, -703, -619, -459],
      text: ["($419K)", "($703K)", "($619K)", "($459K)"],
    },
    cash: {
      label: "Cumulative cash need",
      vals: [-470, -1290, -2100, -2850],
      text: ["($470K)", "($1.29M)", "($2.10M)", "($2.85M)"],
    },
  };
  const YEARS = ["2027", "2028", "2029", "2030"];
  const svg = $("#pf-svg");
  let series = "revenue";
  function renderChart(animate) {
    const d = PF[series];
    const neg = d.vals[0] < 0;
    const maxAbs = Math.max(...d.vals.map(Math.abs));
    const base = neg ? 70 : 520,
      depth = 400,
      bw = 220,
      gap = 140,
      x0 = 210;
    let out = `<title id="pf-svg-title">${d.label} by year: ${YEARS.map((y, i) => `${y} ${d.text[i]}`).join(", ")}</title>`;
    out += `<line x1="120" x2="1560" y1="${base}" y2="${base}" stroke="#F6F3EC" stroke-opacity=".5" stroke-width="2"/>`;
    out += `<text x="110" y="${base + 8}" text-anchor="end" font-size="24" fill-opacity=".7">$0</text>`;
    d.vals.forEach((v, i) => {
      const h = (Math.abs(v) / maxAbs) * depth;
      const x = x0 + i * (bw + gap);
      const y = neg ? base : base - h;
      out += `<rect class="pf-bar${animate ? " grow" : ""}" x="${x}" y="${y}" width="${bw}" height="${h}" fill="${neg ? "#B8451E" : "#1B7A63"}" style="transform-origin:${neg ? "top" : "bottom"};animation-delay:${i * 70}ms"/>`;
      out += `<text x="${x + bw / 2}" y="${neg ? y + h + 44 : y - 16}" text-anchor="middle" font-size="40" font-weight="600">${d.text[i]}</text>`;
      out += `<text x="${x + bw / 2}" y="600" text-anchor="middle" font-size="30" fill="#F0A07A">${YEARS[i]}</text>`;
    });
    svg.innerHTML = out;
  }
  const seriesBtns = $$("[data-series]");
  seriesBtns.forEach((b) =>
    b.addEventListener("click", () => {
      series = b.dataset.series;
      seriesBtns.forEach((x) =>
        x.setAttribute("aria-pressed", String(x === b)),
      );
      renderChart(!reduced());
    }),
  );
  function setView(chart) {
    $("#pf-table").hidden = chart;
    $("#pf-chart").hidden = !chart;
    $("#pf-series").hidden = !chart;
    $("#pf-table-btn").setAttribute("aria-pressed", String(!chart));
    $("#pf-chart-btn").setAttribute("aria-pressed", String(chart));
    if (chart) renderChart(!reduced());
  }
  $("#pf-table-btn").addEventListener("click", () => setView(false));
  $("#pf-chart-btn").addEventListener("click", () => setView(true));
  resets.push(() => {
    series = "revenue";
    seriesBtns.forEach((x) =>
      x.setAttribute("aria-pressed", String(x.dataset.series === "revenue")),
    );
    setView(false);
  });

  // use of funds: bar length proportional to dollars (largest line fills the track)
  const bars = $$(".bar");
  const maxAmount = Math.max(...bars.map((b) => +b.dataset.amount));
  bars.forEach((b) =>
    b
      .querySelector(".bar-fill")
      .style.setProperty(
        "--w",
        ((+b.dataset.amount / maxAmount) * 100).toFixed(2),
      ),
  );

  // print exports every interactive element in its default state
  addEventListener("beforeprint", () => {
    resets.forEach((r) => r());
    finalizeCounts();
    closeOverview();
  });

  /* ---------- boot ---------- */
  const fromHash = () => {
    const n = parseInt(location.hash.slice(1), 10);
    return n >= 1 && n <= TOTAL ? n : 0;
  };
  addEventListener("hashchange", () => {
    const n = fromHash();
    if (!n || n === current) return;
    if (introState !== "done") skipIntro();
    show(n);
  });
  const start = fromHash();
  if (start) {
    body.classList.remove("is-intro");
    show(start);
  } else {
    startIntro();
  }
  updateChrome();
})();
