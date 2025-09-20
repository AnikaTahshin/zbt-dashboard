import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
 
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default Login;
