/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import { PrismaClient } from "@prisma/client";

declare global {
  // allow global `var` declarations
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
