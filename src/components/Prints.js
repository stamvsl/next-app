import { useState, useEffect } from "react";
import { Box, Table, Th, Tr, Td, Thead, Tbody, Tooltip, Radio, RadioGroup, Spinner, Flex } from "@chakra-ui/react";

export default function Prints() {
  const [esoda, setEsoda] = useState([]);
  const [entryType, setEntryType] = useState("income");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //   //@TODO: we need to handle the case where the data are empty and we get an error. Also we need to add a loader.

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (entryType === "income") {
      fetch("/api/esoda")
        .then((res) => res.json())
        .then(
          (esoda) => {
            setEsoda(esoda || []);
            setIsLoading(false);
          },
          (error) => {
            setError(error);
            setIsLoading(false);
          }
        );
    } else if (entryType === "expenses") {
      fetch("/api/exoda")
        .then((res) => res.json())
        .then(
          (esoda) => {
            setEsoda(esoda || []);
            setIsLoading(false);
          },
          (error) => {
            setError(error);
            setIsLoading(false);
          }
        );
    }
  }, [entryType]);

  if (isLoading) {
    return (
      <Flex alignItems="center">
        Loading...
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" m="20px" />
      </Flex>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box w="100vw" overflowY="scroll" height="calc(100vh - 60px)">
      <RadioGroup value={entryType} onChange={(value) => setEntryType(value)}>
        <Radio value="income" colorScheme="green" m="5px">
          Income
        </Radio>
        <Radio value="expenses" colorScheme="red" m="5px">
          Expenses
        </Radio>
      </RadioGroup>
      <Table>
        <Thead>
          <Tr>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Quarter
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Date
            </Th>

            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Net Value
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              VAT Class
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              VAT Value
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Gross Value
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Company
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Client
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Comments
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {esoda?.map((data, index) => (
            <Tr key={index} bg={index % 2 === 0 ? "rgb(251,211,141)" : "rgb(246,173,85)"} border="none">
              <Td border="none">{data.q}</Td>
              <Td border="none">{new Date(data.date).toDateString()}</Td>
              <Td border="none">{data.income}</Td>
              <Td border="none">{data.vatPerc}%</Td>
              <Td border="none">{data.vatEuro}</Td>
              <Td border="none">{data.finalPrice}</Td>
              <Td border="none">{data.forCompany}</Td>
              <Td border="none">{data.client}</Td>
              <Td border="none">
                {data.comments ? (
                  <Tooltip label={data.comments} hasArrow placement="top">
                    Comment
                  </Tooltip>
                ) : (
                  ""
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
