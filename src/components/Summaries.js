import { useState, useEffect } from "react";

import { Flex, Table, Th, Tr, Td, Thead, Tbody, Select, FormControl } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Summaries() {
  // const [totalIncome, setTotalIncome] = useState();
  // const [totalIncomeVAT, setTotalIncomeVAT] = useState();
  // const [totalForCompany, setTotalForCompany] = useState();
  // const [totalExpenses, setTotalExpenses] = useState();
  // const [totalExpensesVAT, setTotalExpensesVAT] = useState();
  // const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  // //quarters
  // const [totalIncomeQ1, setTotalIncomeQ1] = useState(0);
  // const [totalIncomeQ2, setTotalIncomeQ2] = useState(0);
  // const [totalIncomeQ3, setTotalIncomeQ3] = useState(0);
  // const [totalIncomeQ4, setTotalIncomeQ4] = useState(0);

  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     const fetchData = async () => {
  //       try {
  //         const esodaRes = await fetch(`/api/esoda?userId=${session.user.id}`);
  //         const exodaRes = await fetch(`/api/exoda?userId=${session.user.id}`);
  //         if (!esodaRes.ok || !exodaRes.ok) {
  //           throw new Error("Failed to fetch data");
  //         }
  //         const esodaData = await esodaRes.json();
  //         const exodaData = await exodaRes.json();

  //         const calculateQuarterlyTotals = (data) => {
  //           const totals = [0, 0, 0, 0];
  //           data.forEach((item) => {
  //             const quarter = item.q - 1;

  //             totals[quarter] += item.income;
  //           });

  //           setTotalIncomeQ1(totals[0].toFixed(2));
  //           setTotalIncomeQ2(totals[1].toFixed(2));
  //           setTotalIncomeQ3(totals[2].toFixed(2));
  //           setTotalIncomeQ4(totals[3].toFixed(2));
  //         };

  //         const filteredEsoda = esodaData.filter((item) => {
  //           const year = new Date(item.date).getFullYear();

  //           return year === selectedYear;
  //         });
  //         calculateQuarterlyTotals(filteredEsoda);

  //         const filteredExoda = exodaData.filter((item) => {
  //           const year = new Date(item.date).getFullYear();
  //           return year === selectedYear;
  //         });
  //         //  Esoda data
  //         const totalIncome = filteredEsoda.reduce((acc, item) => acc + item.income, 0);
  //         setTotalIncome(totalIncome.toFixed(2));
  //         const totalIncomeVAT = filteredEsoda.reduce((acc, item) => acc + item.vatEuro, 0);
  //         setTotalIncomeVAT(totalIncomeVAT.toFixed(2));
  //         const totalForCompany = filteredEsoda.reduce((acc, item) => acc + item.forCompany, 0);
  //         setTotalForCompany(totalForCompany.toFixed(2));
  //         //  Exoda data
  //         const totalExpenses = filteredExoda.reduce((acc, item) => acc + item.income, 0);
  //         setTotalExpenses(totalExpenses.toFixed(2));
  //         const totalExpensesVAT = filteredExoda.reduce((acc, item) => acc + item.vatEuro, 0);
  //         setTotalExpensesVAT(totalExpensesVAT.toFixed(2));
  //       } catch (error) {
  //         console.error("Fetching data error:", error);
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [session, selectedYear]);

  // const handleYearChange = (event) => {
  //   const year = parseInt(event.target.value);
  //   setSelectedYear(year);
  // };

  return (
    <>aaa</>
    // <Flex mt="10px">
    //   <Table>
    //     <Thead>
    //       <Tr>
    //         <Th>
    //           <FormControl>
    //             <Select placeholder="Year" defaultValue={new Date().getFullYear()} onChange={handleYearChange}>
    //               <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
    //               <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</option>
    //               <option value={new Date().getFullYear() - 2}>{new Date().getFullYear() - 2}</option>
    //             </Select>
    //           </FormControl>
    //         </Th>

    //         <Th colSpan={5} textAlign="center">
    // {/* {session.data.user.name} */}
    //       </Th>
    //     </Tr>
    //   </Thead>

    //   <Tbody>
    //     <Tr>
    //       <Td textAlign="center">Q</Td>
    //       <Td>Έσοδα</Td>
    //       <Td>ΦΠΑ Εσόδων</Td>
    //       <Td>Έξοδα</Td>
    //       <Td>ΦΠΑ Εξόδων</Td>
    //       <Td>Εταιρείας</Td>
    //     </Tr>
    //     <Tr>
    //       <Td textAlign="center">1st</Td>
    //       <Td textAlign="center">{totalIncomeQ1}</Td>
    //     </Tr>
    //     <Tr>
    //       <Td textAlign="center">2nd</Td>
    //       <Td textAlign="center">{totalIncomeQ2}</Td>
    //     </Tr>
    //     <Tr>
    //       <Td textAlign="center">3rd</Td>
    //       <Td textAlign="center">{totalIncomeQ3}</Td>
    //     </Tr>
    //     <Tr>
    //       <Td textAlign="center">4th</Td>
    //       <Td textAlign="center">{totalIncomeQ4}</Td>
    //     </Tr>

    //     <Tr>
    //       <Td textAlign="center">ΣΥΝΟΛΟ</Td>
    //       <Td textAlign="center">{totalIncome}</Td>
    //       <Td textAlign="center">{totalIncomeVAT}</Td>
    //       <Td textAlign="center">{totalExpenses}</Td>
    //       <Td textAlign="center">{totalExpensesVAT}</Td>
    //       <Td textAlign="center">{totalForCompany}</Td>
    //     </Tr>
    //   </Tbody>
    // </Table>
    // </Flex>
  );
}
