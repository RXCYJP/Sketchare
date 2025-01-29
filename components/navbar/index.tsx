"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import {
  IoBook,
  IoBookOutline,
  IoHome,
  IoHomeOutline,
  IoPieChartOutline,
} from "react-icons/io5";
import { PiStudent, PiStudentFill } from "react-icons/pi";
import Button from "../button";
import { signIn, signOut, useSession } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status }: any = useSession();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(session);
  return (
    <div>
      <div
        className={` fixed inset-x-0 top-0 z-10 hidden justify-center p-4 transition-all md:flex md:justify-start md:bg-choco ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <ul>
          <li className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/pengertian">Materi</Link>
            <Link href="/question">Quiz</Link>
            <Link href="/profile">Profile</Link>
            {session?.user?.role === "admin" && (
              <Link href="/dashboard">Admin</Link>
            )}
            {status === "authenticated" ? (
              <Button type="button" onClick={signOut}>
                Logout
              </Button>
            ) : (
              <Button type="button" onClick={() => signIn()}>
                Login
              </Button>
            )}
          </li>
        </ul>
      </div>
      {/* mobile navbar */}
      <nav
        className={`fixed inset-x-0 bottom-0 z-10 mx-6 mb-3 flex justify-center rounded-full bg-choco p-2 transition-all md:hidden md:bg-white ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <ul className="text-white text-center">
          <li className="flex flex-wrap text-center justify-between gap-6">
            <Link
              href="/"
              className={`text-xl flex flex-col items-center justify-center text-center`}
            >
              {<IoHome />}
              <p className="text-sm">Utama</p>
              {/* {<AiOutlineHome />}    */}
            </Link>
            <Link
              href="/pengertian"
              className={` text-xl flex flex-col items-center justify-center text-center `}
            >
              {<IoBook />}
              <p className="text-sm">Materi</p>
            </Link>
            <Link
              href="/question"
              className={` text-xl flex flex-col items-center justify-center text-center`}
            >
              {<IoPieChartOutline />}
              <p className="text-sm">Quiz</p>
            </Link>
            <Link
              href="/profile"
              className={` text-xl flex flex-col items-center justify-center text-center`}
            >
              {<PiStudentFill />}
              <p className="text-sm">Profile</p>
            </Link>
            {status === "authenticated" ? (
              <button
                type="button"
                onClick={() => signOut()}
                className="text-xl flex flex-col items-center justify-center text-center"
              >
                <BiLogOut className="" />
                <p className="text-sm">Log out</p>
              </button>
            ) : (
              <Button
                type="button"
                onClick={() => signIn()}
                className="text-xl"
              >
                <p className="text-sm">Log in</p>
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
