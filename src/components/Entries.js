import { useState } from "react";
import {
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Input,
  Button,
  HStack,
  VStack,
  Box,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const initialvalues = {
  date: "",
  number: "",
  transactor: "",
  description: "",
  netValue: "",
  vatClass: 24,
  vatValue: "",
  grossValue: "",
  comments: "",
};

export default function Entries() {
  const [formData, setFormData] = useState(initialvalues);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(`
    Date: ${formData.date}
    Number: ${formData.number}
    transactor: ${formData.transactor}
    description: ${formData.description}
    netValue: ${formData.netValue}
    vatClass: ${formData.vatClass}%
    vatValue: ${formData.vatValue}
    grossValue: ${formData.grossValue}
    comments: ${formData.comments}
    `);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "grossValue") {
      const grossValue = parseFloat(value);
      const vatClass = parseFloat(formData.vatClass);
      const netValue = grossValue / (1 + vatClass / 100);
      const vatValue = grossValue - netValue;

      setFormData((prevData) => ({
        ...prevData,
        netValue: netValue.toFixed(2),
        vatValue: vatValue.toFixed(2),
      }));
    }

    if (name === "netValue" || name === "vatClass") {
      const netValue = parseFloat(
        name === "netValue" ? value : formData.netValue
      );
      const vatClass = parseFloat(
        name === "vatClass" ? value : formData.vatClass
      );
      const vatValue = (vatClass / 100) * netValue;
      const grossValue = netValue + vatValue;

      setFormData((prevData) => ({
        ...prevData,
        vatValue: vatValue.toFixed(2),
        grossValue: grossValue.toFixed(2),
      }));
    }
  };

  return (
    <Box p={{ base: "12px", sm: "25px" }}>
      <Flex flexDirection="column">
        <FormControl>
          <HStack>
            <FormLabel>Ημερομηνία</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              name="date"
              value={formData.date}
              onChange={handleChange}
            ></Input>
          </HStack>
        </FormControl>
        <FormControl>
          <HStack>
            <FormLabel>Αριθμός</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              name="number"
              value={formData.number}
              onChange={handleChange}
            ></Input>
          </HStack>
        </FormControl>
        <FormControl>
          <HStack>
            <FormLabel>Συναλλασσόμενος</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              name="transactor"
              value={formData.transactor}
              onChange={handleChange}
            ></Input>
          </HStack>
        </FormControl>

        <FormControl>
          <HStack>
            <FormLabel>Περιγραφή</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></Input>
          </HStack>
        </FormControl>

        <FormControl>
          <HStack>
            <FormLabel>Καθαρή αξία</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              name="netValue"
              value={formData.netValue}
              onChange={handleChange}
            ></Input>
          </HStack>
        </FormControl>

        <FormControl>
          <HStack>
            <FormLabel>Κατηγορία ΦΠΑ</FormLabel>
            <Select
              placeholder=">Κατηγορία ΦΠΑ"
              borderColor="orange.500"
              name="vatClass"
              onChange={handleChange}
              defaultValue={"24"}
            >
              <option value="0">0%</option>
              <option value="6">6%</option>
              <option value="13">13%</option>
              <option value="17">17%</option>
              <option value="24">24%</option>
            </Select>
          </HStack>
        </FormControl>

        <FormControl>
          <HStack>
            <FormLabel>Αξία ΦΠΑ αξία</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              name="vatValue"
              value={formData.vatValue}
              onChange={(e) => {
                handleChange(e);
                calculateVatValue(e);
              }}
            ></Input>
          </HStack>
        </FormControl>

        <FormControl>
          <HStack>
            <FormLabel>Μικτή αξία</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              name="grossValue"
              value={formData.grossValue}
              onChange={handleChange}
            ></Input>
          </HStack>
        </FormControl>

        <FormControl>
          <HStack>
            <FormLabel>Σχόλια</FormLabel>
            <textarea
              type="text"
              borderColor="orange.500"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </HStack>
        </FormControl>

        <Button onClick={handleClick} type="submit">
          Καταχώριση
        </Button>
      </Flex>
    </Box>
  );
}

// direction={{ md: "row", base: "column" }}>

{
  /* <RadioGroup defaultValue="2">
        <HStack spacing={5}>
          <Radio value="1" colorScheme="orange">
            Έσοδα
          </Radio>
          <Radio value="2" colorScheme="orange">
            Έξοδα
          </Radio>
        </HStack>
      </RadioGroup> */
}
