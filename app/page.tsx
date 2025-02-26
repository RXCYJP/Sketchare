"use client";
import Button from "@/components/button";
import Loader from "@/components/loader";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const session: any = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();
  if (session.status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    push("/login");
    return <div>unauthenticated</div>;
  } else {
    return (
      <div className="h-full bg-choco rounded-lg ">
        <div className="py-10 md:mt-5">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white">Selamat Datang</h1>
            <h1 className="text-2xl font-bold text-white">
              di Media Pembelajaran
            </h1>
            <h1 className="text-2xl font-bold text-white">SKETCHARE </h1>
            <h2 className="text-xl font-bold text-white capitalize">
              {session.data?.user?.username || session.data?.user?.name}
            </h2>
            <h2>{session.data?.user?.password || session.data?.user?.kelas}</h2>

            <div className="mt-5 text-wrap text-white flex-wrap flex flex-col">
              <Button
                type="button"
                className="mt-5 capitalize bg-brule p-2 rounded-md font-bold text-choco"
              >
                <Link href="/tujuan">Tujuan Pembelajaran</Link>
              </Button>
              <Button
                type="button"
                className="mt-5 capitalize bg-brule p-2 rounded-md font-bold text-choco"
              >
                <Link href="/petunjuk">Petunjuk</Link>
              </Button>
            </div>

            <Button
              variant="primary"
              type="button"
              className={`mt-5 capitalize bg-brule p-2 rounded-md font-bold text-choco ${
                isLoading ? "" : "disabled"
              }`}
            >
              <Link href={"/menu"}>Mulai Belajar</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
