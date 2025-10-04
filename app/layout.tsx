import type { Metadata } from "next";
import {
 
  Unbounded,
  Poppins,
 
} from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "LearnHub",
  description: "LearnHub Dashboard",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${poppins.variable}  ${unbounded.variable} antialiased`}
      >
       <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
