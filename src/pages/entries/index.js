import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Input, Container, Text } from "@chakra-ui/react";
import Entries from "@/components/Entries";

export default function entries() {
  const router = useRouter();
  const { status } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated") {
    router.push("/auth/signin");
  }
  return (
    <>
      <Entries />
    </>
  );
}
