import Boxes from "../components/Boxes";
import Head from "next/head";
import { NextPage } from "next";
import { signIn } from "next-auth/react";

import { Container, Button, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        {/* <Container maxW={"1400px"}> */}
        {/* <Boxes /> */}
        <Flex justifyContent="center" alignItems="center" flexDirection="column" height="80vh">
          <Button
            type="submit"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </Button>
        </Flex>
        {/* </Container> */}
      </main>
    </>
  );
}
