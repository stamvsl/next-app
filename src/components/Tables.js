import { Grid, GridItem, Box, SimpleGrid, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Tables() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/esoda")
      .then((res) => res.json())
      .then((data) => setMockData(data.data));
  }, []);

  return (
    <Box>
      <Box w={"80vw"} m={"auto"} bg={"orange.200"}>
        <Grid
          bg={"orange.300"}
          templateColumns="repeat(10, 1fr)"
          border={"1px solid black"}
          position={"sticky"}
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
          <GridItem>FIELD9</GridItem>
          <GridItem>FIELD10</GridItem>
        </Grid>

        {mockData?.map((data) => (
          <Grid templateColumns="repeat(10, 1fr)" border={"1px solid black"}>
            <GridItem>{data.q}</GridItem>
            <GridItem>{data.date}</GridItem>
            <GridItem>{data.final_price}</GridItem>
            <GridItem>{data.income}</GridItem>
            <GridItem>{data.vat_perc}</GridItem>
            <GridItem>{data.vat_euro}</GridItem>
            <GridItem>{data.for_company}</GridItem>
            <GridItem>{data.client}</GridItem>
            <GridItem>{data.FIELD9}</GridItem>
            <GridItem>{data.FIELD10}</GridItem>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
