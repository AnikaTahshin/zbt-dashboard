"use client"
import Dashboard from "./dashboard/page";
import LoginForm from "@/components/LoginForm";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  const user = session?.user
    

    
  return (
    <>
    
    {user ? <Dashboard /> : <LoginForm />}
    </>
  );
}
