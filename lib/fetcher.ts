import { Playist } from "@prisma/client";
import { Fetcher } from "swr";

const fetcher: Fetcher<Playist[], `/${string}`> = async (url: `/${string}`) => {
  const response = await fetch(`${window.location.origin}/api${url}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status > 399 && response.status < 200) {
    throw new Error();
  }
  return response.json();
};

export default fetcher;
