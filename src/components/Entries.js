import { useState } from "react";
import { useSession } from "next-auth/react";

import axios from "axios";
import { parseDate, isValidDate, isValidDateFormat } from "./Helpers";
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
  forCompany: "",
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
    forCompany: false,
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
      forCompany: formData.forCompany === "",
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

          const endpoint = getApiEndpoint(entryType);
          // axios
          //   .post(
          //     `/api/${entryType}Entries`,
          // {
          //   date: formattedDate,
          //   number: formData.number,
          //   transactor: formData.transactor,
          //   description: formData.description,
          //   netValue: formData.netValue,
          //   vatClass: formData.vatClass,
          //   vatValue: formData.vatValue,
          //   grossValue: formData.grossValue,
          //   comments: formData.comments,
          // },
          //     {
          //       withCredentials: true,
          //     }
          //   )
          fetch(`/api/${entryType}Entries`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: formattedDate,
              number: formData.number,
              transactor: formData.transactor,
              description: formData.description,
              netValue: formData.netValue,
              vatClass: formData.vatClass,
              vatValue: formData.vatValue,
              grossValue: formData.grossValue,
              comments: formData.comments,
              forCompany: formData.forCompany,
            }),
          })
            .then((response) => response.json)
            .then(function (data) {
              setFormData(initialvalues);
            })
            .catch(function (error) {
              console.log("axios error: ", error);
              if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Error data: ", error.response.data);
                console.error("Error status: ", error.response.status);
                console.error("Error headers: ", error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.error("Error request: ", error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message: ", error.message);
              }
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
            bg="white"
            borderColor="gray.600"
            focusBorderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
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
            bg="white"
            borderColor="gray.600"
            focusBorderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
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
              bg="white"
              borderColor="gray.600"
              focusBorderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
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
              bg="white"
              borderColor="gray.600"
              focusBorderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
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
              bg="white"
              borderColor="gray.600"
              focusBorderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
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
              borderColor="gray.600"
              focusBorderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
              name="vatClass"
              onChange={handleChange}
              defaultValue={24}
              bg="white"
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
              bg="white"
              borderColor="gray.600"
              focusBorderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
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
              bg="white"
              borderColor="gray.600"
              focusBorderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
              name="grossValue"
              value={formData.grossValue}
              onChange={handleChange}
            ></Input>
            <FormErrorMessage>Gross Value is required</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flex={{ base: "100%", md: "20%" }}>
          <FormControl isInvalid={formErrors.forCompany}>
            <FormLabel>For Company</FormLabel>
            <Input
              type="number"
              bg="white"
              borderColor="gray.600"
              focusBorderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
              name="forCompany"
              value={formData.forCompany}
              onChange={handleChange}
            ></Input>
            <FormErrorMessage>Value for Company is required</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flex="100%">
          <FormLabel>Comments</FormLabel>
          <Textarea
            bg="white"
            type="text"
            borderColor="gray.600"
            focusBorderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            maxLength={200}
          ></Textarea>
        </Flex>
        <Button colorScheme="blue" onClick={handleClick} type="submit">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
