import { Box, Flex, Container } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Flex
      flexDirection="column"
      height="100%"
      minHeight="100vh"
      bg="orange.100"
    >
      <Box position={"sticky"} top={"0"}>
        <Navbar />
      </Box>
      <Flex justifyContent="center">{children}</Flex>
    </Flex>
  );
}
