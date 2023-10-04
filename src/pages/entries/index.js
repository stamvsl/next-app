import Head from "next/head";

import { Input, Container, Text } from "@chakra-ui/react";
import Entries from "@/components/Entries";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Container bg="orange.100" maxW="100vw" height="100vh">
          <Container maxW={"1400px"}>
            <Entries />
          </Container>
        </Container>
      </main>
    </>
  );
}
