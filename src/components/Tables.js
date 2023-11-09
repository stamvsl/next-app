import { Grid, GridItem, Box, SimpleGrid, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Prints() {
  const [esoda, setEsoda] = useState([]);

  useEffect(() => {
    fetch("/api/esoda")
      .then((res) => res.json())
      .then((esoda) => setEsoda(esoda));
  }, []);
  console.log("esoda: ", esoda);
  return (
    <Box>
      <Box w={"80vw"} m={"auto"} bg={"orange.200"}>
        <Box position="sticky" top="60px">
          <Grid
            bg={"orange.300"}
            templateColumns="repeat(10, 1fr)"
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
        </Box>

        {esoda.esoda?.map((data, index) => (
          <Grid
            key={index}
            templateColumns="repeat(10, 1fr)"
            border={"1px solid black"}
          >
            <GridItem>{data.q}</GridItem>
            <GridItem>{data.date}</GridItem>
            <GridItem>{data.finalPrice}</GridItem>
            <GridItem>{data.income}</GridItem>
            <GridItem>{data.vatPerc}</GridItem>
            <GridItem>{data.vatEuro}</GridItem>
            <GridItem>{data.forCompany}</GridItem>
            <GridItem>{data.client}</GridItem>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
