import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

import constants from "@/constant/index";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export type HandlerCb = (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) => void;

export const validateRoute = (handler: HandlerCb) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies[constants.TRAX_ACCESS_TOKEN];
    if (!token) {
      res.status(401);
      res.json({ error: "Not Authorizied" });
      return;
    }
    try {
      const result = jwt.verify(token, "hello");
      if (typeof result === "string") {
        throw new Error();
      }
      if (!("id" in result)) {
        throw new Error();
      }
      const id = +result.id;
      if (Number.isNaN(id)) {
        throw new Error();
      }
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (!user) {
        throw new Error("Not real user");
      }
      return handler(req, res, user);
    } catch (e) {
      res.status(401);
      res.json({ error: "Not Authrized" });
    }
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, "hello");
  return user;
};
