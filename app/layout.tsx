import type { Metadata } from "next";
import {
  Inter,
  Unbounded,
  Poppins,
  Sora,
  Chakra_Petch,
} from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakrapetch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "ZettaByte",
  description: "ZettaByte Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${chakraPetch.variable} ${inter.variable} ${poppins.variable} ${sora.variable} ${unbounded.variable} antialiased`}
      >
       <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
