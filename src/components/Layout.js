import { Box, Flex, Container, bgGradient } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Flex flexDirection="column" height="100%" minHeight="100vh" bgGradient="linear(to-b, gray.300, gray.400)">
      <Box position="sticky" top="0" zIndex="2">
        <Navbar />
      </Box>
      <Flex top="60px" justifyContent="center">
        {children}
      </Flex>
    </Flex>
  );
}
