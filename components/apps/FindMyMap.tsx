"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Person } from "@/data/content";

function FlyTo({ target }: { target: Person | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo([target.lat, target.lon], 6, { duration: 1.1 });
    }
  }, [target, map]);
  return null;
}

export function FindMyMap({
  people,
  selected,
  onSelect,
}: {
  people: Person[];
  selected: Person | null;
  onSelect: (person: Person) => void;
}) {
  return (
    <MapContainer
      center={[30, -40]}
      zoom={2}
      minZoom={2}
      scrollWheelZoom
      worldCopyJump
      className="h-full w-full bg-zinc-950"
    >
      {/* OpenStreetMap tiles need no key. The CSS filter below turns the
          default light basemap into a dark one that matches the device. */}
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        className="map-dark"
      />

      <FlyTo target={selected} />

      {people.map((person) => {
        const isActive = selected?.id === person.id;
        return (
          <CircleMarker
            key={person.id}
            center={[person.lat, person.lon]}
            radius={isActive ? 11 : 8}
            pathOptions={{
              color: "#ffffff",
              weight: 2,
              fillColor: person.color,
              fillOpacity: 1,
            }}
            eventHandlers={{ click: () => onSelect(person) }}
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={1}>
              {person.label}
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
