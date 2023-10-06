import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import Entries from "./Entries";
import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HamburgerIcon,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/Ai";
import { AiOutlinePrinter } from "react-icons/Ai";
import { BsPeople } from "react-icons/Bs";
import { IoSettingsOutline } from "react-icons/Io5";
import { MdAppRegistration } from "react-icons/Md";
import { GiHamburgerMenu } from "react-icons/Gi";
export default function Navbar({ children }) {
  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
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
          <Link as={NextLink} href="/">
            <Button
              fontSize={"2em"}
              fontWeight={"bold"}
              variant={"link"}
              color={"white"}
              mr="10"
            >
              <Icon as={AiFillHome} />
            </Button>
          </Link>

          <Link as={NextLink} href="/entries">
            <Button
              fontSize={"2em"}
              fontWeight={400}
              variant={"link"}
              color={"white"}
              mr="10"
            >
              Κινήσεις
            </Button>
          </Link>

          <Button
            as={"a"}
            fontSize={"2em"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"white"}
            mr="10"
          >
            Συναλλασσόμενοι
          </Button>
          <Button
            as={"a"}
            fontSize={"2em"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"white"}
            mr="10"
          >
            Εκτυπώσεις
          </Button>
          <Button
            as={"a"}
            fontSize={"2em"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"white"}
            mr="10"
          >
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

      <Flex display={{ base: "flex", md: "none" }} bg="orange.300">
        <Menu>
          <MenuButton
            background={"orange.500"}
            border={"none"}
            as={IconButton}
            aria-label="Options"
            icon={<Icon as={GiHamburgerMenu} color={"white"} />}
            variant="outline"
            _hover={{
              background: "orange.100",
            }}
            _expanded={{ bg: "orange.100" }}
          />
          <MenuList bg="orange.300" border={"none"}>
            <MenuItem
              icon={<Icon as={MdAppRegistration} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Κινήσεις
            </MenuItem>
            <MenuItem
              icon={<Icon as={BsPeople} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Συναλλασσόμενοι
            </MenuItem>
            <MenuItem
              icon={<Icon as={AiOutlinePrinter} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Εκτυπώσεις
            </MenuItem>
            <MenuItem
              icon={<Icon as={MdAppRegistration} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Ρυθμίσεις
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box>
          <Button
            as={"a"}
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
