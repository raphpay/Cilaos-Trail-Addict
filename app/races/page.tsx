"use client";
import { FormEvent, useEffect, useState } from "react";

type Race = {
  id: string;
  name: string;
  date: string;
  distance: number;
  price: number;
};

export default function RacesPage() {
  const [races, setRaces] = useState<Race[]>([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);

  // Fetch races
  const fetchRaces = async () => {
    const res = await fetch("/api/races");
    const data = await res.json();
    setRaces(data);
  };

  useEffect(() => {
    fetchRaces();
  }, []);

  // Handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/races", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, date, distance, price }),
    });
    setName("");
    setDate("");
    setDistance(0);
    setPrice(0);
    fetchRaces(); // refresh
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Races</h1>

      <ul className="mb-6">
        {races.map((race) => (
          <li key={race.id}>
            {race.name} - {race.distance} km - {race.price} €
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Nom de la course"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-1"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border p-1"
        />
        <input
          type="number"
          placeholder="Distance (km)"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          required
          className="border p-1"
        />
        <input
          type="number"
          placeholder="Prix (€)"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          className="border p-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1">
          Ajouter
        </button>
      </form>
    </div>
  );
}
