import NextImage from "next/image";
import NextLink from "next/link";
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from "react-icons/md";

import { usePlaylist } from "@/lib/hooks/usePlaylist";
import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/Library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

// const playlists = new Array(100)
//   .fill(1)
//   .map((_, i) => `Playlist ${(i + 1).toString().padStart(3, "0")}`);

const SideBar = () => {
  const { playlists } = usePlaylist();
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height="60" width="120" />
        </Box>
        <Box marginBottom="20px">
          <List spacing="2">
            {navMenu.map(({ name, route, icon }) => (
              <ListItem paddingX="20px" fontSize="16px" key={name}>
                <LinkBox>
                  <NextLink href={route} passHref>
                    <LinkOverlay>
                      <ListIcon as={icon} color="white" marginRight="20px" />
                      {name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginTop="20px">
          <List spacing="2">
            {musicMenu.map(({ name, route, icon }) => (
              <ListItem paddingX="20px" fontSize="16px" key={name}>
                <LinkBox>
                  <NextLink href={route} passHref>
                    <LinkOverlay>
                      <ListIcon as={icon} color="white" marginRight="20px" />
                      {name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing="2">
            {playlists.map(({ id, name }) => (
              <ListItem paddingX="20px" key={id}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
