// Live weather for the three cities that make up Sid's map. Open-Meteo needs
// no API key. Cached for 30 minutes so the page is not hammering it.

export const revalidate = 1800;

const cities = [
  { id: "la", name: "Los Angeles", note: "Now", lat: 34.0522, lon: -118.2437 },
  {
    id: "ep",
    name: "Eden Prairie",
    note: "Home",
    lat: 44.8547,
    lon: -93.4708,
  },
  {
    id: "dxb",
    name: "Dubai",
    note: "Where it started",
    lat: 25.2048,
    lon: 55.2708,
  },
];

type CityWeather = {
  id: string;
  name: string;
  note: string;
  temp: number | null;
  code: number | null;
};

export async function GET() {
  const results: CityWeather[] = await Promise.all(
    cities.map(async (city) => {
      try {
        const url =
          `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}` +
          `&longitude=${city.lon}&current=temperature_2m,weather_code` +
          `&temperature_unit=fahrenheit`;
        const res = await fetch(url, { next: { revalidate: 1800 } });
        if (!res.ok) throw new Error(`Open-Meteo returned ${res.status}`);
        const data = await res.json();
        return {
          id: city.id,
          name: city.name,
          note: city.note,
          temp: Math.round(data?.current?.temperature_2m ?? 0),
          code: data?.current?.weather_code ?? null,
        };
      } catch {
        // A city that fails still renders, just without a reading.
        return {
          id: city.id,
          name: city.name,
          note: city.note,
          temp: null,
          code: null,
        };
      }
    }),
  );

  return Response.json({ cities: results });
}
