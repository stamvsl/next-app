import { Radio, RadioGroup, Stack, Input, Button, HStack, Box , 
     } from "@chakra-ui/react";

export default function Entries() {
  return (
    <Box w={"1400px"}p={"20"}>

      <RadioGroup defaultValue="2" >
        <Stack spacing={5} direction="row">
          <Radio value="1" colorScheme='orange'>Έσοδα</Radio>
          <Radio value="2" colorScheme='orange'>Έξοδα</Radio>
        </Stack>
        </RadioGroup>

        <HStack m={"10"}>
        <label>Συναλλασσόμενος</label>
        <Input placeholder="Όνομα, ΑΦΜ" borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px"/>
        <Button background={"orange.300"}>Search</Button>
        </HStack >

        <HStack m={"10"}>
        <label>Ημερομηνία</label>
        <Input  borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px" w={"100"}/>
        <label>Αριθμός</label>
        <Input  borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px" w={"100"}/>
        <label>Περιγραφή</label>
        <Input  borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px"/>
        </HStack >

        <HStack m={"10"}>
        <label>Καθαρή αξία</label>
        <Input  borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px"  />
        <label>Συντελεστής ΦΠΑ</label>
        <Input  borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px" w={"50"}/>
        <label>ΦΠΑ</label>
        <Input  borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px"/>
        <label>Μικτή Αξία</label>
        <Input  borderColor = {"orange.300"} focusBorderColor='orange.300' borderWidth = "2px"/>
        </HStack >
      
        <Button background={"orange.300"}>Υποβολή</Button>
      


    </Box>
    
  );
}
