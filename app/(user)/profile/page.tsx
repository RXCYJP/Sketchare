"use client";
import profileData from "@/data/profile";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile(params: any) {
  const { data: session, status }: any = useSession();

  const data = profileData;

  return (
    <div className="py-10">
      <div>
        <h1 className="text-2xl font-bold text-center text-choco">Profile</h1>
      </div>

      <div>
        {/* <h1>{session?.user?.username || session?.user?.name}</h1> */}
        {/* <h1>{session?.user?.kelas}</h1> */}
      </div>

      <div className="flex items-center flex-wrap gap-11 justify-center pt-10">
        {data.map((item: any) => (
          <div key={item.id} className="flex flex-col items-center">
            <Image
              src={item.img}
              alt={item.name}
              width={100}
              height={100}
              className=" object-cover "
            />
            <h1 className="text-xl">{item.name}</h1>
            <h1>{item.position}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
