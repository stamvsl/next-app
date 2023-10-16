import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Button,
  Icon,
  Text,
  Grid,
  GridItem,
  gridTemplateColumns,
  gridTemplateRows,
  templateAreas,
  Center,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";

export default function Boxes() {
  return (
    <Box padding={"50"} display={"Grid"} justifyContent={"center"}>
      <Grid
        gridTemplateColumns={{ base: "1fr 1fr" }}
        gridTemplateRows={{ base: "1fr 1fr" }}
        gap="10"
        templateAreas={`{base: "1 2"
                "3 4",
            sm:"1 2"
            "3 4"
        }`}
        justifyContent={"center"}
      >
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
          <Link as={NextLink} href="/entries">
            <CustomButton Icon={IoSettingsOutline} />
          </Link>
        </Box>
      </Grid>
    </Box>
  );
}
