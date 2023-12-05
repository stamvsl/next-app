import { useState, useEffect } from "react";
import { Box, Table, Th, Tr, Td, Thead, Tbody, Tooltip, Radio, RadioGroup, Spinner, Flex } from "@chakra-ui/react";

export default function Prints() {
  const [esoda, setEsoda] = useState([]);
  const [entryType, setEntryType] = useState("income");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "ascending" });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "▲" : "▼";
    }
    return null;
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const endpoint = entryType === "income" ? "/api/esoda" : "/api/exoda";
    fetch(endpoint)
      .then((res) => res.json())
      .then(
        (data) => {
          setEsoda(data || []);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, [entryType]);

  useEffect(() => {
    console.log("Sort by: ", sortConfig);
    let sortedArr = [];
    if (sortConfig.key) {
      sortedArr = esoda.toSorted((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
      setEsoda(sortedArr);
    }
  }, [sortConfig]);

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

  console.log("date is: ", typeof esoda[0].date);

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
          <Tr cursor="pointer">
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("id")}
            >
              A/A {getSortIndicator("id")}
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("q")}
            >
              Q {getSortIndicator("q")}
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("date")}
            >
              Date {getSortIndicator("date")}
            </Th>

            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("income")}
            >
              Net Value {getSortIndicator("income")}
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("vatPerc")}
            >
              VAT Class {getSortIndicator("vatPerc")}
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("vatEuro")}
            >
              VAT Value {getSortIndicator("vatEuro")}
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("finalPrice")}
            >
              Gross Value {getSortIndicator("finalPrice")}
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("forCompany")}
            >
              Company {getSortIndicator("forCompany")}
            </Th>
            <Th
              position="sticky"
              top="0"
              color="white"
              bg="orange.500"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("client")}
            >
              Client {getSortIndicator("Client")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="orange.500" zIndex="stickyHeader" border="none">
              Comments
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {esoda?.map((data, index) => (
            <Tr key={index} bg={index % 2 === 0 ? "rgb(251,211,141)" : "rgb(246,173,85)"} border="none">
              <Td border="none">{data.id}</Td>
              <Td border="none">{data.q}</Td>
              <Td border="none">{new Date(data.date).toLocaleDateString("en-GB")}</Td>
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
