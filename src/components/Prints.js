import { Grid, GridItem, Box, SimpleGrid, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Prints() {
  const [esoda, setEsoda] = useState([]);

  useEffect(() => {
    fetch("/api/esoda")
      .then((res) => res.json())
      .then((esoda) => setEsoda(esoda || []));
  }, []);
  console.log("esoda: ", esoda);
  return (
    <Box>
      <Box w="80vw" m={"auto"}>
        <Grid>
          <Grid
            position="sticky"
            top="60px"
            bg={"orange.300"}
            templateColumns="repeat(8, 1fr)"
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
              key={index}
              templateColumns="repeat(8, 1fr)"
              css={{
                backgroundColor:
                  index % 2 === 0 ? "rgb(251,211,141)" : "rgb(246,173,85)",
              }}
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
        </Grid>
      </Box>
    </Box>
  );
}
