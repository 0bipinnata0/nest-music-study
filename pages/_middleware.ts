import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import constants from "@/constant/index";

const signedinPages = ["/", "/playlist", "/library"];

const middleware = (req: NextRequest) => {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies[constants.TRAX_ACCESS_TOKEN];
    if (!token) {
      const url = req.nextUrl.clone();
      // https://nextjs.org/docs/messages/middleware-relative-urls
      // 12.1 之后无法直接传递string
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
};

export default middleware;
