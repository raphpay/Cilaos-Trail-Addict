"use client";

import useHome from "@/business-logic/hooks/useHome";
import { Race } from "@prisma/client";

export default function Home() {
  const { races } = useHome();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1 className="text-4xl">Courses à venir</h1>
      <div className="flex flex-col gap-2 items-center">
        {races.map((race: Race) => {
          return <p key={race.id}>{race.name}</p>;
        })}
      </div>
    </div>
  );
}
