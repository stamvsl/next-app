import { useState, useEffect } from "react";
import { Box, Table, Th, Tr, Td, Thead, Tbody, Tooltip } from "@chakra-ui/react";

export default function Prints() {
  const [esoda, setEsoda] = useState([]);

  useEffect(() => {
    fetch("/api/esoda")
      .then((res) => res.json())
      .then((esoda) => setEsoda(esoda || []));
  }, []);
  // console.log("esoda: ", esoda);

  return (
    <Box w={{ base: "100vw", lg: "80vw" }} overflow="scroll" height="calc(100vh - 60px)">
      <Table>
        <Thead>
          <Tr>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Quarter
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Date
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Gross Value
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Net Value
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              VAT Class
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              VAT Value
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Company
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Client
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Comments
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {esoda?.map((data, index) => (
            <Tr key={index} bg={index % 2 === 0 ? "rgb(251,211,141)" : "rgb(246,173,85)"} border="none">
              <Td border="none">{data.q}</Td>
              <Td border="none">{new Date(data.date).toDateString()}</Td>
              <Td border="none">{data.finalPrice}</Td>
              <Td border="none">{data.income}</Td>
              <Td border="none">{data.vatPerc}</Td>
              <Td border="none">{data.vatEuro}</Td>
              <Td border="none">{data.forCompany}</Td>
              <Td border="none">{data.client}</Td>
              <Td border="none">
                {data.comments ? (
                  <Tooltip label={data.comments} hasArrow placement="top">
                    Comment
                  </Tooltip>
                ) : (
                  ""
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
