import useSWR from "swr";
import fetcher from "../fetcher";

export const usePlaylist = (): {
  playlists: [];
  isLoading: boolean;
  isError: boolean;
} => {
  const { data = [], error } = useSWR("/playlist", fetcher);

  return {
    playlists: data as [],
    isLoading: !data && !error,
    isError: error,
  };
};
