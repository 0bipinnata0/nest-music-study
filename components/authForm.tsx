import { Box, Flex } from "@chakra-ui/layout";
import { FC } from "react";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        hello
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        form
      </Flex>
    </Box>
  );
};

export default AuthForm;
