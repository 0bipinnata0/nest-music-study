import { Box } from "@chakra-ui/layout";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        width="250px"
        left="0"
        top="0"
        backgroundColor="red"
      >
        sidebar
      </Box>
      <Box marginLeft="250px" marginBottom="100px" backgroundColor="blue">
        <Box>{children}</Box>
      </Box>
      <Box left="0" bottom="0" position="absolute" backgroundColor="green">
        playerBar
      </Box>
    </Box>
  );
};
export default PlayerLayout;
