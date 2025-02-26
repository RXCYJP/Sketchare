"use client";

import { Inter } from "next/font/google";
import { SessionProvider, useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";
import Siswa from "./dashboard/[kelas]/page";
import Head from "next/head";
import Sidebar from "@/components/sidebar";

export default function Layout({
  children,
  Siswa,
}: Readonly<{
  children: React.ReactNode;
  Siswa: React.ReactNode;
}>) {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  }
  if (session.status === "unauthenticated") {
    redirect("/login");
  } else if (session.status === "authenticated") {
    return (
      <>
        {/* <Navbar />   */}
        <SessionProvider>
          <Head>
            <title>SKETCHARE</title>
          </Head>
          <div className="">
            <Sidebar />
            <div className=" p-10 my-5">{children}</div>
          </div>
        </SessionProvider>
      </>
    );
  }
}
