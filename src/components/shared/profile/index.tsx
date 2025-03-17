import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Profile() {
  return (
    <Button>
      <Link href="/sign-in">Login</Link>
    </Button>
  );
}
