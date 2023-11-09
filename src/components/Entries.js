import calculateFormValues from "./calculateFormValues";
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
  colorScheme,
  Textarea,
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
    const cloneState = calculateFormValues(formData, name, value);
    setFormData(cloneState);
  };

  return (
    <Box p={{ base: "12px", sm: "25px" }} w="800px">
      <Flex flexDirection="column" flexGrow="2" flexWrap="wrap">
        <HStack>
          <HStack m="20px">
            <FormLabel>Date</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.300" }}
              name="date"
              value={formData.date}
              onChange={handleChange}
            ></Input>
          </HStack>

          <HStack>
            <FormLabel>Number</FormLabel>
            <Input
              type="text"
              borderColor="orange.500"
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.300" }}
              name="number"
              value={formData.number}
              onChange={handleChange}
            ></Input>
          </HStack>
        </HStack>

        <HStack m="20px">
          <FormLabel>Transactor</FormLabel>
          <Input
            type="text"
            bg="orange.100"
            borderColor="orange.500"
            focusBorderColor="orange.500"
            _hover={{ borderColor: "orange.300" }}
            name="transactor"
            value={formData.transactor}
            onChange={handleChange}
          ></Input>
        </HStack>

        <HStack m="20px">
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            bg="orange.100"
            borderColor="orange.500"
            focusBorderColor="orange.500"
            _hover={{ borderColor: "orange.300" }}
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></Input>
        </HStack>
        <HStack>
          <HStack m="20px">
            <FormLabel>Net Value</FormLabel>
            <Input
              type="number"
              borderColor="orange.500"
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.300" }}
              name="netValue"
              value={formData.netValue}
              onChange={handleChange}
            ></Input>
          </HStack>

          <HStack m="20px">
            <FormLabel>VAT Class</FormLabel>
            <Select
              placeholder=">Κατηγορία ΦΠΑ"
              borderColor="orange.500"
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.300" }}
              name="vatClass"
              onChange={handleChange}
              defaultValue={24}
              bg="orange.100"
            >
              <option value="0">0%</option>
              <option value="6">6%</option>
              <option value="13">13%</option>
              <option value="17">17%</option>
              <option value="24">24%</option>
            </Select>
          </HStack>

          <HStack m="20px">
            <FormLabel>VAT Value</FormLabel>
            <Input
              type="number"
              borderColor="orange.500"
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.300" }}
              name="vatValue"
              value={formData.vatValue}
              onChange={handleChange}
            ></Input>
          </HStack>

          <HStack m="20px">
            <FormLabel>Gross Value</FormLabel>
            <Input
              type="number"
              borderColor="orange.500"
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.300" }}
              name="grossValue"
              value={formData.grossValue}
              onChange={handleChange}
            ></Input>
          </HStack>
        </HStack>

        <HStack m="20px">
          <FormLabel>Comments</FormLabel>
          <Textarea
            bg="orange.100"
            type="text"
            borderColor="orange.500"
            focusBorderColor="orange.500"
            _hover={{ borderColor: "orange.300" }}
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></Textarea>
        </HStack>

        <Button
          colorScheme="orange"
          onClick={handleClick}
          type="submit"
          m="20px"
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
}
