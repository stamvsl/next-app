import Prints from "@/components/Prints";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function PrintsPage() {
  const { status } = useSession();

  const router = useRouter();
  if (status === "loading") return null;
  if (status === "unauthenticated") {
    router.push("/auth/signin");
  }
  return (
    <>
      <Prints />
    </>
  );
}
