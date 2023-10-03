import {
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Invoices() {
  return (
    <TableContainer padding={"100"}>
      <Table bg="orange.300" variant="striped" colorScheme="orange">
        <Thead>
          <Tr fontWeight={"bold"}>
            <Td>Α/Α</Td>
            <Td>ΗΜΕΡΟΜΗΝΙΑ</Td>
            <Td>ΣΥΝΑΛΛΑΣΣΟΜΕΝΟΣ</Td>
            <Td>ΠΕΡΙΓΡΑΦΗ</Td>
            <Td>ΚΑΘΑΡΗ ΑΞΙΑ</Td>
            <Td>ΦΠΑ</Td>
            <Td>ΜΙΚΤΗ ΑΞΙΑ</Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>25/9/2023</Td>
            <Td>Περίπτερο</Td>
            <Td>Μάλμπορο μαλακό</Td>
            <Td>3,71</Td>
            <Td>0,89</Td>
            <Td>4,60</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>25/9/2023</Td>
            <Td>Μπάμπης ο τεντάς</Td>
            <Td>Εγκατάσταση τέντας</Td>
            <Td>1500,00</Td>
            <Td>Πλάκα κάνεις</Td>
            <Td>1500,00</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
