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
import { AiOutlinePrinter } from "react-icons/Ai";
import { BsPeople } from "react-icons/Bs";
import { IoSettingsOutline } from "react-icons/Io5";
import { MdAppRegistration } from "react-icons/Md";

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
          <CustomButton Icon={BsPeople} />
        </Box>
        <Box>
          <CustomButton Icon={AiOutlinePrinter} />
        </Box>
        <Box>
          <CustomButton Icon={IoSettingsOutline} />
        </Box>
      </Grid>
    </Box>
  );
}
