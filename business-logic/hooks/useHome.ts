import { Race } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useHome() {
  const router = useRouter();
  async function fetchRaces() {
    try {
      const res = await fetch("/api/races");
      if (!res.ok) {
        throw new Error("Failed to fetch races");
      }
      const data = (await res.json()) as Race[];
      return data;
    } catch (error) {
      console.error("Error fetching races");
    }
  }

  function goToRace(id: string) {
    router.push(`/races/${id}`);
  }

  const {
    error,
    isPending,
    isError,
    data: races,
  } = useQuery({ queryKey: ["races"], queryFn: fetchRaces });

  return { races, isPending, isError, error, goToRace };
}
