import { useState, useEffect } from "react";
import {
  Flex,
  Grid,
  GridItem,
  Box,
  Table,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
} from "@chakra-ui/react";

export default function Prints() {
  const [esoda, setEsoda] = useState([]);

  useEffect(() => {
    fetch("/api/esoda")
      .then((res) => res.json())
      .then((esoda) => setEsoda(esoda || []));
  }, []);
  console.log("esoda: ", esoda);
  return (
    <Box w={{ base: "100vw", lg: "80vw" }} overflow="scroll" h={"100vh"}>
      <Table>
        <Thead>
          <Tr>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              Quarter
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              Date
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              Gross Value
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              Net Value
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              VAT Class
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              VAT Value
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              Company
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="green.500"
              zIndex="stickyHeader"
              border="none"
            >
              Client
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {esoda?.map((data, index) => (
            <Tr
              key={index}
              bg={index % 2 === 0 ? "rgb(251,211,141)" : "rgb(246,173,85)"}
              border="none"
            >
              <Td border="none">{data.q}</Td>
              <Td border="none">{data.date}</Td>
              <Td border="none">{data.finalPrice}</Td>
              <Td border="none">{data.income}</Td>
              <Td border="none">{data.vatPerc}</Td>
              <Td border="none">{data.vatEuro}</Td>
              <Td border="none">{data.forCompany}</Td>
              <Td border="none">{data.client}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

{
  /* <Box overflowX="auto">
<Box m="auto" w={{ base: "100vw", lg: "80vw" }} fontSize="1em">
  <Grid>
    <Grid
      //px="20px"
      position="sticky"
      //top="60px"
      bg={"orange.300"}
      templateColumns="repeat(8, minmax(0, 1fr))"
      border={"1px solid black"}
      zIndex={"1"}
      fontWeight={"Bold"}
    >
      <GridItem>Quarter</GridItem>
      <GridItem>Date</GridItem>
      <GridItem>Gross Value</GridItem>
      <GridItem>Net Value</GridItem>
      <GridItem>VAT Class</GridItem>
      <GridItem>VAT Value</GridItem>
      <GridItem>Company</GridItem>
      <GridItem>Client</GridItem>
    </Grid>

    {esoda?.map((data, index) => (
      <Grid
        //px="20px"
        key={index}
        templateColumns="repeat(8, minmax(0, 1fr))"
        css={{
          backgroundColor:
            index % 2 === 0 ? "rgb(251,211,141)" : "rgb(246,173,85)",
        }}
      >
        <GridItem>{data.q}</GridItem>
        <GridItem> {data.date}</GridItem>
        <GridItem>{data.finalPrice}</GridItem>
        <GridItem>{data.income}</GridItem>
        <GridItem>{data.vatPerc}</GridItem>
        <GridItem>{data.vatEuro}</GridItem>
        <GridItem>{data.forCompany}</GridItem>
        <GridItem>{data.client}</GridItem>
      </Grid>
    ))}
  </Grid>
</Box>
</Box> */
}
