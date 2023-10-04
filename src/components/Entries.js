import {
  Radio,
  RadioGroup,
  Stack,
  Input,
  Button,
  HStack,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";

export default function Entries() {
  return (
    <Box p={"20"}>
      <RadioGroup defaultValue="2">
        <HStack spacing={5}>
          <Radio value="1" colorScheme="orange">
            Έσοδα
          </Radio>
          <Radio value="2" colorScheme="orange">
            Έξοδα
          </Radio>
        </HStack>
      </RadioGroup>

      <Stack m={"10"} direction={{ md: "row", sm: "column" }}>
        <label>Συναλλασσόμενος</label>
        <Input
          placeholder="Όνομα, ΑΦΜ"
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
        />
        <Button background={"orange.300"}>Search</Button>
      </Stack>

      <Stack m={"10"} direction={{ md: "row", sm: "column" }}>
        <label>Ημερομηνία</label>
        <Input
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
          w={"100"}
        />
        <label>Αριθμός</label>
        <Input
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
          w={"100"}
        />
        <label>Περιγραφή</label>
        <Input
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
        />
      </Stack>

      <Stack m={"10"} direction={{ md: "row", sm: "column" }}>
        <label>Καθαρή αξία</label>
        <Input
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
        />
        <label>Συντελεστής ΦΠΑ</label>
        <Input
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
          w={"50"}
        />
        <label>ΦΠΑ</label>
        <Input
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
        />
        <label>Μικτή Αξία</label>
        <Input
          borderColor={"orange.300"}
          focusBorderColor="orange.300"
          borderWidth="2px"
        />
      </Stack>

      <Button background={"orange.300"}>Υποβολή</Button>
    </Box>
  );
}
