import { auth } from "@/auth";
import UserDashboard from "@/components/UserDashboard";
import { redirect } from "next/navigation";


export default async function HomePage() {
  const session = await auth();
  
  if (!session) {
    redirect('/auth/signin');
  }

  return <UserDashboard session={session} />;
}