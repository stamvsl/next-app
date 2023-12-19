import NextLink from "next/link";
import { Flex, Link, Button, Input, FormLabel } from "@chakra-ui/react";

export default function PrintFilters() {
  return (
    <>
      <Flex>
        <FormLabel>From Date: </FormLabel>
        <Input
          type="text"
          bg="cyan.100"
          borderColor="teal.500"
          focusBorderColor="teal.500"
          _hover={{ borderColor: "teal.300" }}
        ></Input>

        <FormLabel>To Date: </FormLabel>
        <Input
          type="text"
          bg="cyan.100"
          borderColor="teal.500"
          focusBorderColor="teal.500"
          _hover={{ borderColor: "teal.300" }}
        ></Input>
      </Flex>

      <Flex flex="100%">
        <FormLabel>From Net Value: </FormLabel>
        <Input
          type="text"
          bg="cyan.100"
          borderColor="teal.500"
          focusBorderColor="teal.500"
          _hover={{ borderColor: "teal.300" }}
        ></Input>

        <FormLabel>To Net Value: </FormLabel>
        <Input
          type="text"
          bg="cyan.100"
          borderColor="teal.500"
          focusBorderColor="teal.500"
          _hover={{ borderColor: "teal.300" }}
        ></Input>
      </Flex>

      <Link as={NextLink} href="/prints"></Link>
    </>
  );
}
