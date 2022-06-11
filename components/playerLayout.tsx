import { Box } from "@chakra-ui/layout";
import SideBar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" width="250px" left="0" top="0">
        <SideBar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px" bg="blue">
        <Box>{children}</Box>
      </Box>
      <Box left="0" bottom="0" position="absolute" bg="green">
        playerBar
      </Box>
    </Box>
  );
};
export default PlayerLayout;
