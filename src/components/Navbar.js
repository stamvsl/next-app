import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import Entries from "./Entries";
import {
  Box,
  Flex,
  Icon,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
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
      align="center"
      height="60px"
      bg="orange.300"
    >
      <Box>
        <Link as={NextLink} href="/">
          <Button
            fontSize={{ base: "1.5em", xl: "2em" }}
            fontWeight={"bold"}
            variant={"link"}
            color={"white"}
            mx="15px"
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
            mx="15px"
          >
            Entries
          </Button>
        </Link>

        <Link as={NextLink} href="/transactors">
          <Button
            fontSize={{ base: "1.5em", xl: "2em" }}
            fontWeight={400}
            variant={"link"}
            color={"white"}
            mx="15px"
          >
            Transactors
          </Button>
        </Link>
        <Link as={NextLink} href="/prints">
          <Button
            fontSize={{ base: "1.5em", xl: "2em" }}
            fontWeight={400}
            variant={"link"}
            color={"white"}
            mx="15px"
          >
            Prints
          </Button>
        </Link>
        <Button
          as={"a"}
          fontSize={{ base: "1.5em", xl: "2em" }}
          fontWeight={400}
          variant={"link"}
          href={"/prints"}
          color={"white"}
          mx="15px"
        >
          Settings
        </Button>
      </Box>
      <Spacer />

      <Box>
        <Button
          as={"a"}
          display={{ base: "none", md: "inline-flex" }}
          mr="20px"
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"orange.500"}
          href={"#"}
          _hover={{
            bg: "orange.700",
          }}
        >
          Exit
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
          ml="20px"
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
          <Link as={NextLink} href="/">
            <MenuItem
              icon={<Icon as={AiFillHome} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Home
            </MenuItem>
          </Link>
          <Link as={NextLink} href="/entries">
            <MenuItem
              icon={<Icon as={MdAppRegistration} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Entries
            </MenuItem>
          </Link>
          <Link as={NextLink} href="/transactors">
            <MenuItem
              icon={<Icon as={BsPeople} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Transactors
            </MenuItem>
          </Link>
          <Link as={NextLink} href="/prints">
            <MenuItem
              icon={<Icon as={AiOutlinePrinter} color={"white"} />}
              bg="orange.300"
              color="white"
              _hover={{
                background: "orange.500",
              }}
            >
              Prints
            </MenuItem>
          </Link>
          <MenuItem
            icon={<Icon as={MdAppRegistration} color={"white"} />}
            bg="orange.300"
            color="white"
            _hover={{
              background: "orange.500",
            }}
          >
            Settings
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box>
        <Button
          as={"a"}
          fontSize={"sm"}
          mr="20px"
          fontWeight={600}
          color={"white"}
          bg={"orange.500"}
          href={"#"}
          _hover={{
            bg: "orange.700",
          }}
        >
          Exit
        </Button>
      </Box>
    </Flex>
  </>
);

export default Navbar;
