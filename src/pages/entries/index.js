import Head from "next/head";

import { Input, Container, Text } from "@chakra-ui/react";
import Entries from "@/components/Entries";

export default function entries() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Container maxW={"1400px"}>
          <Entries />
        </Container>
      </main>
    </>
  );
}
