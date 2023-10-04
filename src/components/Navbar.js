<<<<<<< HEAD
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
=======
import { Box, Flex, Text, Button, Stack, useColorModeValue, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
>>>>>>> c542cbb370e282c953e787de95bc7b0bfcabeb9c

export default function Navbar({ children }) {
  return (
    <Box>
      <Flex
        bg="orange.300"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={"center"}
      >
        {/* <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            
          </Flex > */}

        <Box>
<<<<<<< HEAD
          <Link as={NextLink} href={"/"}>
            <Button
              fontSize={"2em"}
              fontWeight={"bold"}
              variant={"link"}
              color={"white"}
              mr="10"
            >
              Κεντρική
            </Button>
          </Link>
          <a
            as={"a"}
            fontSize={"2em"}
            fontWeight={400}
            variant={"link"}
            href={"/entries"}
            color={"white"}
            mr="10"
          >
            Κινήσεις
          </a>

          <Button
            as={"a"}
            fontSize={"2em"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"white"}
            mr="10"
          >
=======
          <Link as={NextLink} href="/">
            <Button fontSize={"2em"} fontWeight={"bold"} variant={"link"} color={"white"} mr="10">
              Κεντρική
            </Button>
          </Link>
          <Link as={NextLink} href="/manos/id">
            <Button fontSize={"2em"} fontWeight={400} variant={"link"} color={"white"} mr="10">
              Κινήσεις
            </Button>
          </Link>
          <Button as={"a"} fontSize={"2em"} fontWeight={400} variant={"link"} href={"#"} color={"white"} mr="10">
>>>>>>> c542cbb370e282c953e787de95bc7b0bfcabeb9c
            Συναλλασσόμενοι
          </Button>
          <Button as={"a"} fontSize={"2em"} fontWeight={400} variant={"link"} href={"#"} color={"white"} mr="10">
            Εκτυπώσεις
          </Button>
          <Button as={"a"} fontSize={"2em"} fontWeight={400} variant={"link"} href={"#"} color={"white"} mr="10">
            Ρυθμίσεις
          </Button>
        </Box>
        <Spacer />

        <Box>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"orange.500"}
            href={"#"}
            _hover={{
              bg: "orange.700",
            }}
          >
            Έξοδος
          </Button>
        </Box>
      </Flex>
      {children}
    </Box>
  );
}
