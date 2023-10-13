import Tables from "@/components/Tables";
// import { useEffect, useState } from "react";
// import esoda from "../../../public/mockData/esoda.json";

const Invoices = ({ esoda }) => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("/api/esoda")
  //       .then((res) => res.json()) // this line is important, it converts the response to a JSON object
  //       .then((myData) => {
  //         setData(myData.data);
  //         console.log(myData);
  //       });
  //   }, []);
  console.log("esoda :>> ", esoda);
  return (
    // <div>
    //   <h1>Invoices</h1> <h3>{JSON.stringify(esoda[0])}</h3>
    // </div>
    <Tables />
  );
};
export default Invoices;

// This gets called on every request
export async function getServerSideProps({ params }) {
  //   console.log("params :>> ", params);
  // Pass data to the page via props

  // make a db call and get all related data *** in our case our db is local json file
  const res = await fetch("http://localhost:3000/api/esoda");
  const esoda = await res.json();

  return { props: { esoda: esoda.data || [] } };
}
