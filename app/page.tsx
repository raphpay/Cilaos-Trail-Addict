"use client";

import useHome from "@/business-logic/hooks/useHome";
import { Race } from "@prisma/client";
import Link from "next/link";

export default function Home() {
  const { races, isPending, isError } = useHome();

  if (isPending) return <div className="centered">Chargement...</div>;
  if (isError)
    return (
      <div className="centered">Erreur lors du chargement des courses</div>
    );

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1 className="text-4xl">Courses à venir</h1>
      <div className="flex flex-col gap-2 items-center">
        {races &&
          races.map((race: Race) => {
            return (
              <Link
                href={`/races/${race.id}`}
                key={race.id}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {race.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
