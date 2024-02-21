import Tables from "@/components/Prints";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const Invoices = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") return null;
  if (status === "unauthenticated") {
    router.push("/auth/signin");
  }
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
