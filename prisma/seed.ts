// import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { artistsData } from "./artistsData";

// const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map(async ({ name, songs }) =>
      prisma.artist.upsert({
        where: { name },
        update: {},
        create: {
          name,
          songs: {
            create: songs.map(({ name: songName, duration, url }) => ({
              name: songName,
              duration,
              url,
            })),
          },
        },
      })
    )
  );
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "user@test.com",
      password: bcrypt.hashSync("password", salt),
    },
  });
  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) =>
      prisma.playist.create({
        data: {
          name: `Playlist #${i + 1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({ id: song.id })),
          },
        },
      })
    )
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
