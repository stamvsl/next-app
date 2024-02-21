import { Box, Flex, Container, bgGradient } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  const { data: session, status } = useSession();
  return (
    <Flex
      flexDirection="column"
      height="100%"
      minHeight="100vh"
      // bgGradient="linear(to-b, gray.300, gray.400)"
      bg="gray.300"
    >
      {session && (
        <Box position="sticky" top="0" zIndex="2">
          <Navbar />
        </Box>
      )}
      <Flex top="60px" justifyContent="center">
        {children}
      </Flex>
    </Flex>
  );
}
