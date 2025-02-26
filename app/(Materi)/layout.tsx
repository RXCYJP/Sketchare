"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function MateriLayout(params: { children: any }) {
  const router = useRouter();
  return (
    <div>
      <Button
        type="button"
        onClick={() => router.back()}
        className="md:hidden text-4xl
        l z-50 top-5 left-5 fixed text-choco"
      >
        <IoMdArrowRoundBack />
      </Button>
      <div>{params.children}</div>
    </div>
  );
}
