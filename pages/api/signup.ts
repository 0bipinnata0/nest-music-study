import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import constants from "@/constant/index";

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();

  const { email, password } = req.body as { email: string; password: string };

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      "hello",
      {
        expiresIn: "8h",
      }
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(constants.TRAX_ACCESS_TOKEN, token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        // means https only
        secure: process.env.NODE_ENV === "production",
      })
    );

    res.json(user);
  } catch (e) {
    res.status(401);
    res.json({ error: "User already exists" });
  }
};

export default signup;
