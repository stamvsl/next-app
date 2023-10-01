import Navbar from '../components/Navbar';
import Boxes from '../components/Boxes';
import Invoices from '../components/Invoices'
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
      <main >
        <Container bg="orange.100" maxW="100vw" height="100vh">
         
          <Container>
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
