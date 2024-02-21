import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Boxes from "@/components/Boxes";

export default function MainPage() {
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
