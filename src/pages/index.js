import Boxes from "../components/Boxes";
import Head from "next/head";
import { NextPage } from "next";
import { signIn } from "next-auth/react";

import { Container, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Container maxW={"1400px"}>
          {/* <Boxes /> */}
          <Button
            bg="tomato"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </Button>
        </Container>
      </main>
    </>
  );
}
