import Tables from "@/components/Tables";
const Invoices = () => {
  return <Tables />;
};
export default Invoices;

// // This gets called on every request
// export async function getServerSideProps({ params }) {
//   //   console.log("params :>> ", params);
//   // Pass data to the page via props

//   // make a db call and get all related data *** in our case our db is local json file
//   const res = await fetch("http://localhost:3000/api/esoda");
//   const esoda = await res.json();

//   return { props: { esoda: esoda.data || [] } };
// }
