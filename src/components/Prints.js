import { useState, useEffect } from "react";
import NextLink from "next/link";
import { useSession } from "next-auth/react";
import { Box, Table, Th, Tr, Td, Thead, Tbody, Tooltip, Radio, RadioGroup, Spinner, Flex, Button, Link, FormLabel, Input } from "@chakra-ui/react";
import { parseDate, isValidDateFormat, isValidDate } from "./Helpers"; // Import the date helper functions

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
  const [filters, setFilters] = useState({
    fromNetValue: "",
    toNetValue: "",
    fromGrossValue: "",
    toGrossValue: "",
    startDate: "",
    endDate: "",
    fromQuarter: "",
    toQuarter: "",
    client: "",
  });

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

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setIsLoading(true);
      setError(null);

      const endpoint = entryType === "income" ? "/api/esoda" : "/api/exoda";
      fetch(`${endpoint}?userId=${session.user.id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch data");
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setEsoda(data || []);
          setFilteredData(data || []);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [entryType, session]);

  const filterData = () => {
    const filteredData = esoda.filter((data) => {
      const netValue = parseFloat(data.income);
      const grossValue = parseFloat(data.finalPrice);
      const quarter = parseInt(data.q);
      const dataDate = new Date(data.date).toLocaleDateString("en-GB");

      const isNetValueInRange =
        (!filters.fromNetValue || netValue >= parseFloat(filters.fromNetValue)) &&
        (!filters.toNetValue || netValue <= parseFloat(filters.toNetValue));
      const isGrossValueInRange =
        (!filters.fromGrossValue || grossValue >= parseFloat(filters.fromGrossValue)) &&
        (!filters.toGrossValue || grossValue <= parseFloat(filters.toGrossValue));

      let isDateInRange = true;

      if (filters.startDate && filters.endDate) {
        // Both start and end dates are provided
        const startDateObj = new Date(filters.startDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"));
        const endDateObj = new Date(filters.endDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1 23:59:59"));

        isDateInRange =
          isValidDateFormat(filters.startDate) &&
          isValidDate(filters.startDate) &&
          isValidDateFormat(filters.endDate) &&
          isValidDate(filters.endDate) &&
          new Date(data.date) >= startDateObj &&
          new Date(data.date) <= endDateObj;
      } else if (filters.startDate) {
        // Only start date is provided
        const startDateObj = new Date(filters.startDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"));
        isDateInRange = isValidDateFormat(filters.startDate) && isValidDate(filters.startDate) && new Date(data.date) >= startDateObj;
      } else if (filters.endDate) {
        // Only end date is provided
        const endDateObj = new Date(filters.endDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1 23:59:59"));
        isDateInRange = isValidDateFormat(filters.endDate) && isValidDate(filters.endDate) && new Date(data.date) <= endDateObj;
      }

      const isQuarterInRange =
        (!filters.fromQuarter || quarter >= parseFloat(filters.fromQuarter)) && (!filters.toQuarter || quarter <= parseFloat(filters.toQuarter));
      const isClientMatch = !filters.client || data.client.toLowerCase().includes(filters.client.toLowerCase());

      return isNetValueInRange && isGrossValueInRange && isDateInRange && isQuarterInRange && isClientMatch;
    });

    setFilteredData(filteredData);
    setSortConfig({
      key: sortConfig.key,
      direction: sortConfig.direction,
    });
  };

  useEffect(() => {
    //console.log("Sort by: ", sortConfig);
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
          <Flex flexDirection="column" m="30px" w="80%">
            <Flex flex="100%" margin="5px">
              <FormLabel width="50%">From Date: </FormLabel>
              <Input
                type="text"
                placeholder="DD/MM/YYYY"
                bg="gray.100"
                name="startDate"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
              />

              <FormLabel width="50%">To Date: </FormLabel>
              <Input
                type="text"
                placeholder="DD/MM/YYYY"
                bg="gray.100"
                name="endDate"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
              />
            </Flex>

            <Flex flex="100%" margin="5px">
              <FormLabel width="50%">From Net Value: </FormLabel>
              <Input
                type="number"
                bg="gray.100"
                name="fromNetValue"
                value={filters.fromNetValue}
                onChange={(e) => setFilters({ ...filters, fromNetValue: e.target.value })}
              />

              <FormLabel width="50%">To Net Value: </FormLabel>
              <Input
                type="number"
                bg="gray.100"
                name="toNetValue"
                value={filters.toNetValue}
                onChange={(e) => setFilters({ ...filters, toNetValue: e.target.value })}
              />
            </Flex>

            <Flex flex="100%" margin="5px">
              <FormLabel width="50%">From Gross Value: </FormLabel>
              <Input
                type="number"
                bg="gray.100"
                name="fromGrossValue"
                value={filters.fromGrossValue}
                onChange={(e) => setFilters({ ...filters, fromGrossValue: e.target.value })}
              />

              <FormLabel width="50%">To Gross Value: </FormLabel>
              <Input
                type="number"
                bg="gray.100"
                name="toGrossValue"
                value={filters.toGrossValue}
                onChange={(e) => setFilters({ ...filters, toGrossValue: e.target.value })}
              />
            </Flex>

            <Flex flex="100%" margin="5px">
              <FormLabel width="50%">From Qtr: </FormLabel>
              <Input
                type="number"
                bg="gray.100"
                name="fromQuarter"
                value={filters.fromQuarter}
                onChange={(e) => setFilters({ ...filters, fromQuarter: e.target.value })}
              />

              <FormLabel width="50%">To Qtr: </FormLabel>
              <Input
                type="number"
                bg="gray.100"
                name="toQuarter"
                value={filters.toQuarter}
                onChange={(e) => setFilters({ ...filters, toQuarter: e.target.value })}
              />
            </Flex>

            <Flex flex="100%" margin="5px" width="50%">
              <FormLabel>Client: </FormLabel>
              <Input
                type="text"
                bg="gray.100"
                name="client"
                value={filters.client}
                onChange={(e) => setFilters({ ...filters, client: e.target.value })}
              />
            </Flex>

            <Flex>
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
                  setFilters({
                    fromNetValue: "",
                    toNetValue: "",
                    fromGrossValue: "",
                    toGrossValue: "",
                    startDate: "",
                    endDate: "",
                    fromQuarter: "",
                    toQuarter: "",
                    client: "",
                  });
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
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("date")}
            >
              Date {getSortIndicator("date")}
            </Th>
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("income")}
            >
              Net Value {getSortIndicator("income")}
            </Th>
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("vatPerc")}
            >
              VAT Class {getSortIndicator("vatPerc")}
            </Th>
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("vatEuro")}
            >
              VAT Value {getSortIndicator("vatEuro")}
            </Th>
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("finalPrice")}
            >
              Gross Value {getSortIndicator("finalPrice")}
            </Th>
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("forCompany")}
            >
              Company {getSortIndicator("forCompany")}
            </Th>
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("client")}
            >
              Client {getSortIndicator("Client")}
            </Th>
            <Th
              position="sticky"
              top="0"
              textAlign="center"
              color="white"
              bg="teal.600"
              zIndex="stickyHeader"
              border="none"
              onClick={() => requestSort("comments")}
            >
              Comments {getSortIndicator("comments")}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((data, index) => (
            <Tr key={index} bg={index % 2 === 0 ? "blue.100" : "gray.200"} border="none">
              <Td border="none" textAlign="center">
                {data.id}
              </Td>
              <Td border="none" textAlign="center">
                {data.q}
              </Td>
              <Td border="none" textAlign="center">
                {new Date(data.date).toLocaleDateString("en-GB")}
              </Td>
              <Td border="none" textAlign="center">
                {data.income}
              </Td>
              <Td border="none" textAlign="center">
                {data.vatPerc}%
              </Td>
              <Td border="none" textAlign="center">
                {data.vatEuro}
              </Td>
              <Td border="none" textAlign="center">
                {data.finalPrice}
              </Td>
              <Td border="none" textAlign="center">
                {data.forCompany}
              </Td>
              <Td border="none" textAlign="center">
                {data.client}
              </Td>
              <Td border="none" textAlign="center">
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
