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
            <GridItem>τριμηνο</GridItem>
            <GridItem>ημερομηνια</GridItem>
            <GridItem>Τελικη τιμη</GridItem>
            <GridItem>Καθαρη αξια</GridItem>
            <GridItem>κατηγορια φπα</GridItem>
            <GridItem>αξια φπα</GridItem>
            <GridItem>εταιρεια</GridItem>
            <GridItem>πελατης</GridItem>
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
