import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Button, Flex } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated") {
    router.push("/auth/signin");
  }
  if (status === "authenticated") {
    router.push("/main");
  }

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
