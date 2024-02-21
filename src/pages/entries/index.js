import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Entries from "@/components/Entries";

export default function EntriesPage() {
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
