"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../button";
import { IoMdMenu } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const data = ["XA", "XB", "XC", "XD", "XE", "XF", "XG"];

  return (
    <div className="flex">
      <div
        className={`bg-choco h-screen w-1/5 fixed drop-shadow-xl pt-10 p-10 left-0 top-0 transition-all ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full gap-6 text-center text-brule  ">
          <div className="flex justify-end">
            <Button type="button" className="text-3xl" onClick={toggleSidebar}>
              {" "}
              <IoMdMenu />
            </Button>
          </div>

          <h3 className="text-2xl font-bold text-left">Kelas :</h3>
          {data.map((item) => (
            <Link
              href={`/dashboard/${item}`}
              className={`transition ease-in-out duration-300 ${
                router === `/dashboard/${item}`
                  ? "bg-brule rounded-md font-bold text-choco"
                  : ""
              } hover:bg-yellow-950 hover:text-brule rounded-md`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex py-10 left-5 ">
        <Button
          type="button"
          className="text-3xl px-5 rounded-md text-brule bg-choco"
          onClick={toggleSidebar}
        >
          {" "}
          <IoMdMenu />
        </Button>
      </div>
    </div>
  );
}
