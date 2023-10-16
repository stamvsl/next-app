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
import { AiFillHome } from "react-icons/ai";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => (
  <>
    <Flex
      display={{ base: "none", lg: "flex" }}
      bg="orange.300"
      minH={"60px"}
      w={"100vw"}
      px="20px"
      mx="0"
      mt="-60px"
      align={"center"}
      position={"fixed"}
    >
      <Box>
        <Link as={NextLink} href="/">
          <Button
            fontSize={{ base: "1.5em", xl: "2em" }}
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
            fontSize={{ base: "1.5em", xl: "2em" }}
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
          fontSize={{ base: "1.5em", xl: "2em" }}
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
          fontSize={{ base: "1.5em", xl: "2em" }}
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
          fontSize={{ base: "1.5em", xl: "2em" }}
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

    <Flex
      display={{ base: "flex", lg: "none" }}
      bg="orange.300"
      minH={"60px"}
      alignItems={"center"}
    >
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
  </>
);

export default Navbar;
