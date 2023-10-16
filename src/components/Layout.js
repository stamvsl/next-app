import { Box, Flex, Container } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container
      minHeight="100vh"
      minWidth="100%"
      bg="orange.100"
      p="0px"
      mx="0"

      // mt="-60px"
    >
      <Box>
        <Navbar />
      </Box>
      <Box mt="60px">{children}</Box>
    </Container>
  );
}
