import { Radio, RadioGroup, Stack, Input, Button, HStack, Box , Table, 
    Thead,
    Tbody,
    
    Tr,
    Th,
    Td,
    
    TableContainer, } from "@chakra-ui/react";

export default function Transactors() {
  return (
    <Box w={"1400px"}p={"20"}>

      <RadioGroup defaultValue="2" >
        <Stack spacing={5} direction="row">
          <Radio value="1" colorScheme='orange'>Πελάτης</Radio>
          <Radio value="2" colorScheme='orange'>Προμηθευτής</Radio>
        </Stack>
        <HStack >
        <Input placeholder="Όνομα, ΑΦΜ" borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px"/>
        <Button background={"orange.300"}>Search</Button>
        </HStack >
      </RadioGroup>

      <TableContainer  padding={"100"} >
            <Table bg='orange.300' variant="striped" colorScheme="orange" >
              <Thead>
                <Tr fontWeight={"bold"} >
                  
                  <Td>ΚΩΔΙΚΟΣ</Td>
                  <Td>ΕΠΩΝΥΜΙΑ</Td>
                  <Td>ΕΠΑΓΓΕΛΜΑ</Td>
                  <Td>ΔΙΕΥΘΥΝΣΗ</Td>
                  <Td>ΤΗΛΕΦΩΝΟ</Td>
                  <Td>ΥΠΟΛΟΙΠΟ</Td>
                  
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Μπάμπης</Td>
                  <Td>Τεντάς</Td>
                  <Td>Καλαβρύτων 30</Td>
                  <Td>696969969</Td>
                  <Td>1000,00</Td>
                 
                </Tr>
               
              </Tbody>
            </Table>
          </TableContainer>


    </Box>
    
  );
}
