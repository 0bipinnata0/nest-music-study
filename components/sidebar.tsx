import { Box } from "@chakra-ui/layout";
import Image from "next/image";

const SideBar = () => {
  return (
    <Box
      width="100"
      height="calc(100vh-100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image src="/logo.svg" height="60" width="120" />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
