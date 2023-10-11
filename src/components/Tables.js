import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, colorScheme } from "@chakra-ui/react";

import { useState, useEffect } from "react";
export default function Tables() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/esoda")
      .then((res) => res.json())
      .then((data) => setMockData(data.data));
  }, []);

  return (
    <TableContainer>
      <Table variant={"striped"}>
        <Thead>
          <Tr>
            <Th>τριμηνο</Th>
            <Th>ημερομηνια</Th>
            <Th>Τελικη τιμη</Th>
            <Th>Καθαρη αξια</Th>
            <Th>κατηγορια φπα</Th>
            <Th>αξια φπα</Th>
            <Th>εταιρεια</Th>
            <Th>πελατης</Th>
            <Th>FIELD9</Th>
            <Th>FIELD10</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockData?.map((data, index) => (
            <Tr key={index}>
              <Td>{data.q}</Td>
              <Td>{data.date}</Td>
              <Td>{data.final_price}</Td>
              <Td>{data.income}</Td>
              <Td>{data.vat_perc}</Td>
              <Td>{data.vat_euro}</Td>
              <Td>{data.for_company}</Td>
              <Td>{data.client}</Td>
              <Td>{data.FIELD9}</Td>
              <Td>{data.FIELD10}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
