import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.race.create({
    data: {
      name: "Trail des Hauts 20km",
      date: new Date("2025-10-10"),
      distance: 20,
      price: 20,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
