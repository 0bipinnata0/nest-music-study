import { HandlerCb, validateRoute } from "@/lib/auth";
import prisma from "@/lib/prisma";

const playlist: HandlerCb = async (req, res, user) => {
  const playlists = await prisma.playist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });
  res.json(playlists);
};

export default validateRoute(playlist);
