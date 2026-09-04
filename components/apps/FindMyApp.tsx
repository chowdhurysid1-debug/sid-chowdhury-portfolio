import { MapPin, Anchor, House, Plane } from "lucide-react";

const pins = [
  {
    icon: MapPin,
    tint: "bg-indigo-500",
    name: "Sid",
    place: "Los Angeles, CA",
    detail: "USC. Where the next four years happen.",
  },
  {
    icon: Anchor,
    tint: "bg-sky-500",
    name: "The Malibu",
    place: "A lake in Minnesota",
    detail: "Last seen running. See the Garage app for the full story.",
  },
  {
    icon: House,
    tint: "bg-emerald-600",
    name: "Home",
    place: "Eden Prairie, MN",
    detail: "Fifth grade through graduation.",
  },
  {
    icon: Plane,
    tint: "bg-amber-500",
    name: "Where it started",
    place: "Dubai, UAE",
    detail: "The first ten years.",
  },
];

export function FindMyApp() {
  return (
    <div className="mx-auto max-w-xl px-6 py-6 sm:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-white">Find My</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Four places, in the order they happened.
      </p>

      <div className="mt-5 overflow-hidden rounded-2xl bg-zinc-900">
        {pins.map((pin, i) => {
          const Icon = pin.icon;
          return (
            <div
              key={pin.name}
              className={`flex items-start gap-3.5 px-4 py-3.5 ${
                i > 0 ? "border-t border-zinc-800" : ""
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${pin.tint}`}
              >
                <Icon className="h-4.5 w-4.5 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[15px] font-medium text-white">{pin.name}</p>
                <p className="text-[13px] text-zinc-400">{pin.place}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-zinc-500">
                  {pin.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
