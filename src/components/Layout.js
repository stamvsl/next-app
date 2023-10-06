import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Box p="4px" bg="orange.100">
      <Navbar />
      {children}
    </Box>
  );
}
