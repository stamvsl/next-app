import Boxes from "@/components/Boxes";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function prints() {
  const router = useRouter();
  const { status } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated") {
    router.push("/auth/signin");
  }
  return (
    <>
      <Boxes />
    </>
  );
}
