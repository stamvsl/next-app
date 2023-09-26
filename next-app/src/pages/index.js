import Navbar from './components/navbar';
import Invoices from './components/table'
import Head from "next/head";
import {
  Input,
  Container,
  Text
 
} from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Container bg="blue.100" maxW="100vw" height="100vh">
      <Navbar />
      <Container maxW='80vw' mt="350" >
        <Invoices />
      </Container>
      </Container>
      </main>
    </>
  );
}
