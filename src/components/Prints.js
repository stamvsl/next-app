import { useState, useEffect } from "react";
import NextLink from "next/link";

import { Box, Table, Th, Tr, Td, Thead, Tbody, Tooltip, Radio, RadioGroup, Spinner, Flex, Button, Link, FormLabel, Input } from "@chakra-ui/react";
import PrintFilters from "./PrintFilters";
import { LiaCommentDotsSolid } from "react-icons/lia";

export default function Prints() {
  const [esoda, setEsoda] = useState([]);
  const [entryType, setEntryType] = useState("income");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "ascending" });
  const [filterVisible, setFilterVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  //@TODO: Create one state called filters as an object
  const [fromNetValue, setFromNetValue] = useState("");
  const [toNetValue, setToNetValue] = useState("");

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
          setFilteredData(data || []);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, [entryType]);

  const filterData = () => {
    const filteredData = esoda.filter((data) => {
      const netValue = parseFloat(data.income);
      const isNetValueInRange = (!fromNetValue || netValue >= parseFloat(fromNetValue)) && (!toNetValue || netValue <= parseFloat(toNetValue));

      return isNetValueInRange;
    });
    setFilteredData(filteredData);
    setSortConfig({
      key: sortConfig.key,
      direction: sortConfig.direction,
    });
  };

  useEffect(() => {
    console.log("Sort by: ", sortConfig);
    let sortedArr = [];
    if (sortConfig.key) {
      sortedArr = filteredData.toSorted((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredData(sortedArr);
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

  const handleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <Box w="100vw" overflowY="scroll" height="calc(100vh - 60px)">
      <RadioGroup m="10px" value={entryType} onChange={(value) => setEntryType(value)}>
        <Radio value="income" colorScheme="green" m="5px">
          Income
        </Radio>
        <Radio value="expenses" colorScheme="red" m="5px">
          Expenses
        </Radio>

        <Button
          ml="50px"
          bg="blue.500"
          onClick={handleFilterVisibility}
          _hover={{
            bg: "blue.700",
          }}
        >
          {" "}
          Filters
        </Button>
        {filterVisible && (
          <Flex flexDirection="column" m="30px" w="50%">
            <Flex flex="100%">
              <FormLabel>From Net Value: </FormLabel>
              <Input type="number" bg="gray.100" name="fromNetValue" value={fromNetValue} onChange={(e) => setFromNetValue(e.target.value)}></Input>

              <FormLabel>To Net Value: </FormLabel>
              <Input type="number" bg="gray.100" name="toNetValue" value={toNetValue} onChange={(e) => setToNetValue(e.target.value)}></Input>
            </Flex>
            <Button
              onClick={filterData}
              width="80px"
              ml="50px"
              bg="blue.500"
              _hover={{
                bg: "blue.700",
              }}
            >
              Apply
            </Button>
            <Button
              onClick={() => {
                setFilteredData(esoda);
                setSortConfig({
                  key: sortConfig.key,
                  direction: sortConfig.direction,
                });
              }}
              width="80px"
              ml="50px"
              bg="blue.500"
              _hover={{
                bg: "blue.700",
              }}
            >
              Clear
            </Button>
          </Flex>
        )}
      </RadioGroup>

      <Table>
        <Thead>
          <Tr cursor="pointer">
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("id")}>
              A/A {getSortIndicator("id")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("q")}>
              Q {getSortIndicator("q")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("date")}>
              Date {getSortIndicator("date")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("income")}>
              Net Value {getSortIndicator("income")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("vatPerc")}>
              VAT Class {getSortIndicator("vatPerc")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("vatEuro")}>
              VAT Value {getSortIndicator("vatEuro")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("finalPrice")}>
              Gross Value {getSortIndicator("finalPrice")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("forCompany")}>
              Company {getSortIndicator("forCompany")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("client")}>
              Client {getSortIndicator("Client")}
            </Th>
            <Th position="sticky" top="0" color="white" bg="teal.600" zIndex="stickyHeader" border="none" onClick={() => requestSort("comments")}>
              Comments {getSortIndicator("comments")}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((data, index) => (
            <Tr key={index} bg={index % 2 === 0 ? "blue.100" : "gray.200"} border="none">
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
                {data.comments && (
                  <Tooltip label={data.comments} hasArrow placement="left">
                    <Box>
                      <LiaCommentDotsSolid />
                    </Box>
                  </Tooltip>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
