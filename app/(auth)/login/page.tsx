"use client";

import Button from "@/components/button";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Image from "next/image";
import lava from "@/public/imageBatu/batu (3).png";
import vulcano from "@/public/imageBatu/batu (2).png";
import batu1 from "@/public/imageBatu/batu (8).png";
import batu2 from "@/public/imageBatu/batu (12).png";
import batu3 from "@/public/imageBatu/batu (6).png";

import { FaLock, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [isLoading, setIsloading] = useState(false);
  const { push } = useRouter();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: event.target.username.value,
        password: event.target.password.value,
        callbackUrl: "/",
      });
      console.log(res);
      if (!res?.error) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success",
        });
        push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed",
        });
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 h-screen bg-choco">
      <div className="flex justify-between gap-20 absolute">
        <Image src={lava} alt="lava" width={100} height={100} />
        <Image src={vulcano} alt="lava" width={100} height={100} />
      </div>
      <div className="bg-brule p-10 rounded-lg ">
        <div className="flex justify-center text-xl font-bold px-9 py-3 bg-white rounded-xl m-3 shadow-black drop-shadow-md">
          <h1 className="uppercase text-choco">sketchare</h1>
        </div>

        <div>
          <h1 className="text-2xl text-center font-bold font-serif text-choco">
            LITOSFER
          </h1>
        </div>

        <form
          className="flex flex-col gap-9 text-center"
          onSubmit={handleLogin}
        >
          <div className=" py-5 flex flex-col gap-14">
            <div className="flex flex-col h-7 gap-1">
              <label htmlFor="username" className="text-2xl text-choco">
                <FaUserAlt />
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="text-center border-2 focus:outline-none rounded-md p-1"
              />
            </div>
            <div className="justify-center flex flex-col h-7 gap-1 text-center">
              <label htmlFor="password" className="text-2xl text-choco ">
                <FaLock />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className=" text-center border-2 focus:outline-none rounded-md p-1"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="bg-choco"
            className="mt-5 text-brule px-2 rounded-md bg-choco"
            // onClick={() => signIn()}
          >
            Login
          </Button>
        </form>
        {/* <div className=" flex justify-between gap-20 absolute">
          <Image src={batu2} alt="batu1" width={100} height={100} />
          <Image src={batu3} alt="batu1" width={100} height={100} />
        </div> */}
      </div>
    </div>
  );
}
