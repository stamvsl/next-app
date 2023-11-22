import { useState } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import { Flex, Input, Button, HStack, Box, FormLabel, Select, Textarea } from "@chakra-ui/react";
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

  let updatedValue = 0;

  const handleClick = (e) => {
    e.preventDefault();
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

      axios
        .post("/api/entries", {
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
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const cloneState = calculateFormValues(formData, name, value);
  //   setFormData(cloneState);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    const isTyping = value.length > formData.date.length;
    if (name === "date" && isTyping) {
      if (value.length === 2) formattedValue += "/";
      if (value.length === 5) formattedValue += "/";
    }
    console.log(formData.date);
    const cloneState = calculateFormValues(formData, name, formattedValue);
    setFormData(cloneState);
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
        <Flex flex="40%">
          <FormLabel>Date</FormLabel>
          <Input
            type="text"
            borderColor="orange.500"
            focusBorderColor="orange.500"
            _hover={{ borderColor: "orange.300" }}
            name="date"
            placeholder="  /  /    "
            value={formData.date}
            onChange={handleChange}
          ></Input>
        </Flex>

        <Flex flex="40%">
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
        </Flex>

        <Flex flex="80%">
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
        </Flex>

        <Flex flex="80%">
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
        </Flex>

        <Flex flex={{ base: "100%", md: "20%" }}>
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
        </Flex>

        <Flex flex={{ base: "100%", md: "20%" }}>
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
        </Flex>

        <Flex flex={{ base: "100%", md: "20%" }}>
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
        </Flex>

        <Flex flex={{ base: "100%", md: "20%" }}>
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
        </Flex>

        <Flex flex="100%">
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
        </Flex>

        <Button colorScheme="orange" onClick={handleClick} type="submit">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
