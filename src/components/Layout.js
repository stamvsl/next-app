import { Box, Flex, Container } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container minHeight="100vh" minWidth="100%" p="4px" bg="orange.100">
      <Box>
        <Navbar />
      </Box>
      <Box>{children}</Box>
    </Container>
  );
}
