export type AuthMode = "signin" | "signup";

export const auth = async (
  mode: AuthMode,
  body: { email: string; password: string }
) => {
  const response = await fetch(`${window.location.origin}/api/${mode}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (response.status > 399 && response.status < 200) {
    throw new Error();
  }
  return response.json();
};
