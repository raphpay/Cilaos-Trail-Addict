"use client";

import useRaceDetails from "@/business-logic/hooks/useRaceDetails";
import { Button } from "@/components/button";
import { useParams } from "next/navigation";

export default function RaceDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { race, isLoading, isError } = useRaceDetails(slug);

  if (isLoading) return <div className="centered">Chargement...</div>;
  if (isError)
    return (
      <div className="centered">Erreur lors du chargement de la course</div>
    );

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20">
      {race && (
        <>
          <h1 className="text-4xl mb-4">{race.name}</h1>
          <p>
            Date: {new Date(race.date).toLocaleDateString()} <br />
            Distance: {race.distance} km <br />
            Price: {race.price} €
          </p>
          <Button>S'inscrire</Button>
        </>
      )}
    </div>
  );
}
