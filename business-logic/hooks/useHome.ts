import { Race } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useHome() {
  const [races, setRaces] = useState<Race[]>([]);

  // TODO: Use useQuery ?
  async function fetchRaces() {
    try {
      const res = await fetch("/api/races");
      const data = (await res.json()) as Race[];
      setRaces(data);
    } catch (error) {
      console.error("Error fetching races");
    }
  }

  useEffect(() => {
    async function init() {
      fetchRaces();
    }
    init();
  }, []);

  return { races };
}
