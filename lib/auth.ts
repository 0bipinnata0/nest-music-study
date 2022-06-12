import fetcher from "./fetcher";

export type AuthMode = "signin" | "signup";

export const auth = (
  mode: AuthMode,
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};
