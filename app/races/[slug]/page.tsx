"use client";

import useRaceDetails from "@/business-logic/hooks/useRaceDetails";
import { useParams } from "next/navigation";

export default function RaceDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { race, isLoading, isError } = useRaceDetails(slug);

  if (isLoading) return <div className="centered">Loading...</div>;
  if (isError) return <div className="centered">Error loading race</div>;

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20">
      <h1 className="text-4xl mb-4">{race.name}</h1>
      <p>
        Date: {new Date(race.date).toLocaleDateString()} <br />
        Distance: {race.distance} km <br />
        Price: {race.price} €
      </p>
    </div>
  );
}
