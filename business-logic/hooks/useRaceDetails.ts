"use client";

import { useQuery } from "@tanstack/react-query";
import RaceDto from "../types/RaceDto";

export default function useRaceDetails(slug: string) {
  async function fetchRace(): Promise<RaceDto> {
    const res = await fetch(`/api/races/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch race");
    return res.json();
  }

  const {
    data: race,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["race", slug],
    queryFn: fetchRace,
  });

  return { race, error, isLoading, isError };
}
