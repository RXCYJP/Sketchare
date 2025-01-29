"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export default function MateriLayout({ children }: any) {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
