import { Race } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export default function useHome() {
  // TODO: Use useQuery ?
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

  const {
    error,
    isPending,
    isError,
    data: races,
  } = useQuery({ queryKey: ["races"], queryFn: fetchRaces });

  return { races, isPending, isError, error };
}
