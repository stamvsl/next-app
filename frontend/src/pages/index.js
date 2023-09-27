import Navbar from './components/navbar';
import Boxes from './components/boxes';
import Invoices from './components/invoices'
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
        <Container bg="orange.100" maxW="100vw" height="100vh">
          <Navbar />
          <Container maxW="100vw">
            <Boxes />
          </Container>

          {/* <Container maxW="100vw">
            <Invoices />
          </Container> */}
        </Container>
      </main>
    </>
  );
}
