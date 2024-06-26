import NextLink from "next/link";
import { signOut } from "next-auth/react";
import { Link } from "@chakra-ui/react";
import Entries from "./Entries";
import { Box, Flex, Icon, Button, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSession } from "next-auth/react";

const handleLogout = () => {
  signOut({ redirect: true, callbackUrl: "/" });
};
export default function Navbar() {
  const session = useSession();

  return (
    <>
      <Flex display={{ base: "none", lg: "flex" }} align="center" height="60px" bg="gray.800">
        <Box>
          <Link as={NextLink} href="/main">
            <Button fontSize={{ base: "1.5em", xl: "2em" }} fontWeight="bold" variant="link" color="white" mx="15px">
              <Icon as={AiFillHome} />
            </Button>
          </Link>

          <Link as={NextLink} href="/entries">
            <Button fontSize={{ base: "1.5em", xl: "2em" }} fontWeight={400} variant={"link"} color={"white"} mx="15px">
              Entries
            </Button>
          </Link>

          <Link as={NextLink} href="/transactors">
            <Button fontSize={{ base: "1.5em", xl: "2em" }} fontWeight={400} variant={"link"} color={"white"} mx="15px">
              Transactors
            </Button>
          </Link>
          <Link as={NextLink} href="/prints">
            <Button fontSize={{ base: "1.5em", xl: "2em" }} fontWeight={400} variant={"link"} color={"white"} mx="15px">
              Prints
            </Button>
          </Link>
          <Link as={NextLink} href="/summaries">
            <Button fontSize={{ base: "1.5em", xl: "2em" }} fontWeight={400} variant={"link"} color={"white"} mx="15px">
              Summaries
            </Button>
          </Link>
        </Box>
        <Spacer />

        <Box color="white" m="10px">
          Logged in as {session.data.user.name}
        </Box>

        <Box>
          <Button
            onClick={handleLogout}
            mr="20px"
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"red.500"}
            href={"#"}
            _hover={{
              bg: "red.700",
            }}
          >
            Logout
          </Button>
        </Box>
      </Flex>

      <Flex display={{ base: "flex", lg: "none" }} bg="gray.800" minH={"60px"} alignItems={"center"}>
        <Menu>
          <MenuButton
            background={"gray.800"}
            border={"none"}
            ml="20px"
            as={IconButton}
            aria-label="Options"
            icon={<Icon as={GiHamburgerMenu} color={"white"} />}
            variant="outline"
            _hover={{
              background: "gray.800",
            }}
            _expanded={{ bg: "gray.800" }}
          />

          <MenuList bg="gray.800" border={"none"}>
            <Link as={NextLink} href="/main">
              <MenuItem
                icon={<Icon as={AiFillHome} color={"white"} />}
                bg="gray.800"
                color="white"
                _hover={{
                  background: "gray.800",
                }}
              >
                Home
              </MenuItem>
            </Link>
            <Link as={NextLink} href="/entries">
              <MenuItem
                icon={<Icon as={MdAppRegistration} color={"white"} />}
                bg="gray.800"
                color="white"
                _hover={{
                  background: "gray.800",
                }}
              >
                Entries
              </MenuItem>
            </Link>
            <Link as={NextLink} href="/transactors">
              <MenuItem
                icon={<Icon as={BsPeople} color={"white"} />}
                bg="gray.800"
                color="white"
                _hover={{
                  background: "gray.800",
                }}
              >
                Transactors
              </MenuItem>
            </Link>
            <Link as={NextLink} href="/prints">
              <MenuItem
                icon={<Icon as={AiOutlinePrinter} color={"white"} />}
                bg="gray.800"
                color="white"
                _hover={{
                  background: "gray.800",
                }}
              >
                Prints
              </MenuItem>
            </Link>
            <Link as={NextLink} href="/summaries">
              <MenuItem
                icon={<Icon as={MdAppRegistration} color={"white"} />}
                bg="gray.800"
                color="white"
                _hover={{
                  background: "gray.800",
                }}
              >
                Summaries
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Spacer />

        <Box color="white" m="10px">
          Logged in as {session.data.user.name}
        </Box>
        <Box>
          <Button
            onClick={handleLogout}
            mr="20px"
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"red.500"}
            href={"#"}
            _hover={{
              bg: "red.700",
            }}
          >
            Logout
          </Button>
        </Box>
      </Flex>
    </>
  );
}
