import React, { useState, useEffect } from "react";
import {
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  FormControl,
  Select,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Sums() {
  const [summaryData, setSummaryData] = useState({
    totalIncome: 0,
    totalIncomeVAT: 0,
    totalForCompany: 0,
    totalExpenses: 0,
    totalExpensesVAT: 0,
    quarters: {
      Q1: {
        income: 0,
        incomeVAT: 0,
        expenses: 0,
        expensesVAT: 0,
        forCompany: 0,
      },
      Q2: {
        income: 0,
        incomeVAT: 0,
        expenses: 0,
        expensesVAT: 0,
        forCompany: 0,
      },
      Q3: {
        income: 0,
        incomeVAT: 0,
        expenses: 0,
        expensesVAT: 0,
        forCompany: 0,
      },
      Q4: {
        income: 0,
        incomeVAT: 0,
        expenses: 0,
        expensesVAT: 0,
        forCompany: 0,
      },
    },
  });
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState([new Date().getFullYear()]);

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const esodaRes = await fetch(`/api/esoda?userId=${session.user.id}`);
          const exodaRes = await fetch(`/api/exoda?userId=${session.user.id}`);
          if (!esodaRes.ok || !exodaRes.ok) {
            throw new Error("Failed to fetch data");
          }

          const esodaData = await esodaRes.json();
          const exodaData = await exodaRes.json();

          console.log("Fetched Esoda Data:", esodaData);
          console.log("Fetched Exoda Data:", exodaData);

          // Extract unique years from both datasets
          const esodaYears =
            esodaData.length > 0
              ? [
                  ...new Set(
                    esodaData.map((item) => new Date(item.date).getFullYear())
                  ),
                ]
              : [];
          const exodaYears =
            exodaData.length > 0
              ? [
                  ...new Set(
                    exodaData.map((item) => new Date(item.date).getFullYear())
                  ),
                ]
              : [];
          const allYears = Array.from(
            new Set([...esodaYears, ...exodaYears])
          ).sort((a, b) => b - a); // Sort years in descending order

          if (allYears.length === 0) {
            allYears.push(new Date().getFullYear()); // Add current year if no data found
          }

          setYears(allYears);

          const calculateQuarterlyTotals = (data, types) => {
            const quarters = { Q1: {}, Q2: {}, Q3: {}, Q4: {} };
            data.forEach((item) => {
              const quarterKey = `Q${item.q}`;
              types.forEach((type) => {
                quarters[quarterKey][type] =
                  (quarters[quarterKey][type] || 0) + item[type];
              });
            });
            return quarters;
          };

          const filteredEsoda = esodaData.filter(
            (item) => new Date(item.date).getFullYear() === selectedYear
          );
          const filteredExoda = exodaData.filter(
            (item) => new Date(item.date).getFullYear() === selectedYear
          );

          const incomeQuarters = calculateQuarterlyTotals(filteredEsoda, [
            "income",
            "vatEuro",
            "forCompany",
          ]);
          const expensesQuarters = calculateQuarterlyTotals(filteredExoda, [
            "income",
            "vatEuro",
          ]); // Assuming 'income' field here is correct for expenses

          const totalIncome = filteredEsoda.reduce(
            (acc, item) => acc + item.income,
            0
          );
          const totalIncomeVAT = filteredEsoda.reduce(
            (acc, item) => acc + item.vatEuro,
            0
          );
          const totalForCompany = filteredEsoda.reduce(
            (acc, item) => acc + item.forCompany,
            0
          );
          const totalExpenses = filteredExoda.reduce(
            (acc, item) => acc + item.income,
            0
          ); // Assuming 'income' field here is correct for expenses
          const totalExpensesVAT = filteredExoda.reduce(
            (acc, item) => acc + item.vatEuro,
            0
          );

          console.log("Calculated Totals:", {
            totalIncome,
            totalIncomeVAT,
            totalForCompany,
            totalExpenses,
            totalExpensesVAT,
            incomeQuarters,
            expensesQuarters,
          });

          setSummaryData({
            totalIncome: totalIncome.toFixed(2),
            totalIncomeVAT: totalIncomeVAT.toFixed(2),
            totalForCompany: totalForCompany.toFixed(2),
            totalExpenses: totalExpenses.toFixed(2),
            totalExpensesVAT: totalExpensesVAT.toFixed(2),
            quarters: {
              Q1: {
                income: (incomeQuarters.Q1.income || 0).toFixed(2),
                incomeVAT: (incomeQuarters.Q1.vatEuro || 0).toFixed(2),
                expenses: (expensesQuarters.Q1.income || 0).toFixed(2),
                expensesVAT: (expensesQuarters.Q1.vatEuro || 0).toFixed(2),
                forCompany: (incomeQuarters.Q1.forCompany || 0).toFixed(2),
              },
              Q2: {
                income: (incomeQuarters.Q2.income || 0).toFixed(2),
                incomeVAT: (incomeQuarters.Q2.vatEuro || 0).toFixed(2),
                expenses: (expensesQuarters.Q2.income || 0).toFixed(2),
                expensesVAT: (expensesQuarters.Q2.vatEuro || 0).toFixed(2),
                forCompany: (incomeQuarters.Q2.forCompany || 0).toFixed(2),
              },
              Q3: {
                income: (incomeQuarters.Q3.income || 0).toFixed(2),
                incomeVAT: (incomeQuarters.Q3.vatEuro || 0).toFixed(2),
                expenses: (expensesQuarters.Q3.income || 0).toFixed(2),
                expensesVAT: (expensesQuarters.Q3.vatEuro || 0).toFixed(2),
                forCompany: (incomeQuarters.Q3.forCompany || 0).toFixed(2),
              },
              Q4: {
                income: (incomeQuarters.Q4.income || 0).toFixed(2),
                incomeVAT: (incomeQuarters.Q4.vatEuro || 0).toFixed(2),
                expenses: (expensesQuarters.Q4.income || 0).toFixed(2),
                expensesVAT: (expensesQuarters.Q4.vatEuro || 0).toFixed(2),
                forCompany: (incomeQuarters.Q4.forCompany || 0).toFixed(2),
              },
            },
          });
        } catch (error) {
          console.error("Fetching data error:", error);
        }
      };

      fetchData();
    }
  }, [session, selectedYear]);

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  return (
    <Flex mt="10px">
      <Table>
        <Thead>
          <Tr>
            <Th>
              <FormControl>
                <Select value={selectedYear} onChange={handleYearChange}>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Th>
            <Th colSpan={5} textAlign="center">
              {/* {session.data.user.name} */}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textAlign="center">Q</Td>
            <Td>Έσοδα</Td>
            <Td>ΦΠΑ Εσόδων</Td>
            <Td>Έξοδα</Td>
            <Td>ΦΠΑ Εξόδων</Td>
            <Td>Εταιρείας</Td>
          </Tr>
          {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => (
            <Tr key={index}>
              <Td textAlign="center">{quarter}</Td>
              <Td textAlign="center">{summaryData.quarters[quarter].income}</Td>
              <Td textAlign="center">
                {summaryData.quarters[quarter].incomeVAT}
              </Td>
              <Td textAlign="center">
                {summaryData.quarters[quarter].expenses}
              </Td>
              <Td textAlign="center">
                {summaryData.quarters[quarter].expensesVAT}
              </Td>
              <Td textAlign="center">
                {summaryData.quarters[quarter].forCompany}
              </Td>
            </Tr>
          ))}
          <Tr>
            <Td textAlign="center">ΣΥΝΟΛΟ</Td>
            <Td textAlign="center">{summaryData.totalIncome}</Td>
            <Td textAlign="center">{summaryData.totalIncomeVAT}</Td>
            <Td textAlign="center">{summaryData.totalExpenses}</Td>
            <Td textAlign="center">{summaryData.totalExpensesVAT}</Td>
            <Td textAlign="center">{summaryData.totalForCompany}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
}
