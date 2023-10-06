import Boxes from "../components/Boxes";
import Head from "next/head";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Container maxW={"1400px"}>
          <Boxes />
        </Container>
      </main>
    </>
  );
}
