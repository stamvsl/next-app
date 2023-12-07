import { useState } from "react";
import axios from "axios";
import {
  Flex,
  Input,
  Button,
  HStack,
  Box,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Select,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import calculateFormValues from "./calculateFormValues";

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
  const [entryType, setEntryType] = useState("income");
  const [formErrors, setFormErrors] = useState({
    date: false,
    transactor: false,
    description: false,
    netValue: false,
    vatValue: false,
    grossValue: false,
  });
  let updatedValue = 0;

  const validateForm = () => {
    const errors = {
      date: formData.date === "",
      transactor: formData.transactor === "",
      description: formData.description === "",
      netValue: formData.netValue === "",
      vatValue: formData.vatValue === "",
      grossValue: formData.grossValue === "",
    };

    setFormErrors(errors);

    return Object.values(errors).every((value) => !value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      {
        if (isValidDateFormat(formData.date) && isValidDate(formData.date)) {
          const formattedDate = parseDate(formData.date);
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
    new date:${formattedDate}
    `);

          const endpoint = getApiEndpoint(entryType);
          axios
            .post(`/api/${entryType}Entries`, {
              date: formattedDate,
              number: formData.number,
              transactor: formData.transactor,
              description: formData.description,
              netValue: formData.netValue,
              vatClass: formData.vatClass,
              vatValue: formData.vatValue,
              grossValue: formData.grossValue,
              comments: formData.comments,
            })
            .then(function (response) {
              console.log("response from entries endpoint: ", response);
              setFormData(initialvalues);
            })
            .catch(function (error) {
              console.log("axios error: ", error);
            });
        } else {
          alert("Enter date in the form DD/MM/YYYY");
        }
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    const isTyping = value.length > formData.date.length;
    if (name === "date" && isTyping) {
      if (value.length === 2) formattedValue += "/";
      if (value.length === 5) formattedValue += "/";
    }
    const cloneState = calculateFormValues(formData, name, formattedValue);
    setFormData(cloneState);
  };

  const getApiEndpoint = (type) => {
    return type === "income" ? "/api/incomeEntries" : "/api/expensesEntries";
  };

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    //return new Date(`${year}-${month - 1}-${day}`);
    return new Date(`${year}-${month}-${day}`);
  };

  const isValidDateFormat = (dateString) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateRegex.test(dateString);
  };

  const isValidDate = (dateString) => {
    const date = parseDate(dateString);

    return !isNaN(date.getTime());
  };

  return (
    <Flex>
      <Flex
        flexDirection="row"
        p={{ base: "12px", sm: "25px" }}
        w={{ base: "250px", sm: "500px", lg: "750px" }}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="30px"
      >
        {" "}
        <Flex flex="100%" justifyContent="center">
          <RadioGroup defaultValue="income" onChange={(value) => setEntryType(value)}>
            <Radio value="income" colorScheme="green" m="5px">
              Income
            </Radio>
            <Radio value="expenses" colorScheme="red" m="5px">
              Expenses
            </Radio>
          </RadioGroup>
        </Flex>
        <Flex flex="40%">
          <FormLabel>Date</FormLabel>
          <Input
            type="text"
            bg="cyan.100"
            borderColor="teal.500"
            focusBorderColor="teal.500"
            _hover={{ borderColor: "teal.300" }}
            name="date"
            placeholder="DD/MM/YYYY"
            value={formData.date}
            onChange={handleChange}
          ></Input>
        </Flex>
        <Flex flex="40%">
          <FormLabel>Number</FormLabel>
          <Input
            type="text"
            bg="cyan.100"
            borderColor="teal.500"
            focusBorderColor="teal.500"
            _hover={{ borderColor: "teal.300" }}
            name="number"
            value={formData.number}
            onChange={handleChange}
          ></Input>
        </Flex>
        <Flex flex="80%">
          <FormControl isInvalid={formErrors.transactor}>
            <FormLabel>Transactor</FormLabel>
            <Input
              type="text"
              bg="cyan.100"
              borderColor="teal.500"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.300" }}
              name="transactor"
              value={formData.transactor}
              onChange={handleChange}
            ></Input>
            <FormErrorMessage>Transactor is required</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flex="80%">
          <FormControl isInvalid={formErrors.description}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              bg="cyan.100"
              borderColor="teal.500"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.300" }}
              name="description"
              maxLength={70}
              value={formData.description}
              onChange={handleChange}
            ></Input>
            <FormErrorMessage>Description is required</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flex={{ base: "100%", md: "20%" }}>
          <FormControl isInvalid={formErrors.netValue}>
            <FormLabel>Net Value</FormLabel>
            <Input
              type="number"
              bg="cyan.100"
              borderColor="teal.500"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.300" }}
              name="netValue"
              value={formData.netValue}
              onChange={handleChange}
            ></Input>
            <FormErrorMessage>Net Value is required</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flex={{ base: "100%", md: "20%" }}>
          <FormControl>
            <FormLabel>VAT Class</FormLabel>
            <Select
              placeholder=">Select Class"
              borderColor="teal.500"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.300" }}
              name="vatClass"
              onChange={handleChange}
              defaultValue={24}
              bg="cyan.100"
            >
              <option value="0">0%</option>
              <option value="6">6%</option>
              <option value="13">13%</option>
              <option value="17">17%</option>
              <option value="24">24%</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex flex={{ base: "100%", md: "20%" }}>
          <FormControl isInvalid={formErrors.vatValue}>
            <FormLabel>VAT Value</FormLabel>
            <Input
              type="number"
              bg="cyan.100"
              borderColor="teal.500"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.300" }}
              name="vatValue"
              value={formData.vatValue}
              onChange={handleChange}
            ></Input>
            <FormErrorMessage>Vat Value is required</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flex={{ base: "100%", md: "20%" }}>
          <FormControl isInvalid={formErrors.grossValue}>
            <FormLabel>Gross Value</FormLabel>
            <Input
              type="number"
              bg="cyan.100"
              borderColor="teal.500"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.300" }}
              name="grossValue"
              value={formData.grossValue}
              onChange={handleChange}
            ></Input>
            <FormErrorMessage>Gross Value is required</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flex="100%">
          <FormLabel>Comments</FormLabel>
          <Textarea
            bg="cyan.100"
            type="text"
            borderColor="teal.500"
            focusBorderColor="teal.500"
            _hover={{ borderColor: "teal.300" }}
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            maxLength={200}
          ></Textarea>
        </Flex>
        <Button colorScheme="cyan" onClick={handleClick} type="submit">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
