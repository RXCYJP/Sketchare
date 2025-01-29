"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar";

import Head from "next/head";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const disableNavbar = ["/login"];
  return (
    <body className={`${inter.className} bg-brule`}>
      <SessionProvider>
        {!disableNavbar.includes(pathName) && <Navbar />}
        <div className={`${pathName === "/login" ? "" : "mt-5 p-10"}`}>
          {children}
        </div>
      </SessionProvider>
    </body>
  );
}
