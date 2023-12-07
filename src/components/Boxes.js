import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";

export default function Boxes() {
  return (
    <Flex justifyContent={"center"}>
      <Flex flexGrow="2" flexWrap="wrap" gap="50px" justifyContent={"center"} mt="30px">
        <Box>
          <Link as={NextLink} href="/entries">
            <CustomButton Icon={MdAppRegistration} />
          </Link>
        </Box>
        <Box>
          <Link as={NextLink} href="/transactors">
            <CustomButton Icon={BsPeople} />
          </Link>
        </Box>

        <Box>
          <Link as={NextLink} href="/prints">
            <CustomButton Icon={AiOutlinePrinter} />
          </Link>
        </Box>
        <Box>
          <Link as={NextLink} href="/settings">
            <CustomButton Icon={IoSettingsOutline} />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
