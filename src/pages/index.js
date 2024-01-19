import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Flex } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Flex justifyContent="center" alignItems="center" flexDirection="column" height="80vh">
          <Button onClick={() => router.push("/auth/signin")}>Login</Button>
          <p>or</p>
          <Button onClick={() => router.push("/auth/signupPage")}>Sign up</Button>
        </Flex>
      </main>
    </>
  );
}
