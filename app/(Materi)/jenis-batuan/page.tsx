import Button from "@/components/button";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function JenisBatuanPage() {
  return (
    <div className="mt-5 pt-10">
      {/* <Link href="/pengertian" className="text-3xl">
        <MdArrowBackIosNew />
      </Link> */}
      <div>
        <h1 className="text-center text-2xl font-bold text-choco uppercase mb-6 ">
          Jenis-jenis Batuan
        </h1>
      </div>
      <div className="flex items-center flex-wrap gap-5 text-brule text-xl justify-center">
        <Button type="button" className="px-4 bg-choco rounded-md">
          <Link href={"/batuan-beku"} title="Batuan Beku">
            {" "}
            Batuan Beku
          </Link>
        </Button>

        <Button type="button" className="px-4 bg-choco rounded-md">
          <Link href={"/batuan-sendimen"} title="Batuan Sedimen">
            Batuan Sedimen
          </Link>
        </Button>

        <Button type="button" className="px-4 bg-choco rounded-md">
          <Link href={"/batuan-metamorf"} title="Batuan Metamorf">
            Batuan Metamorf
          </Link>
        </Button>
      </div>
    </div>
  );
}
