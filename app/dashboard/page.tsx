import { LogoutButton } from "@/components/LogoutButton";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt, SessionPayload } from "../../business-logic/lib/session";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  const payload: SessionPayload | null = await decrypt(token);

  if (!payload) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col gap-3 items-center justify-center">
      Welcome user {payload.userId}
      <LogoutButton />
    </div>
  );
}
