"use client";
import Button from "@/components/button";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import Swal from "sweetalert2";
import vulcano from "@/public/imageBatu/batu (10).png";
import Image from "next/image";

export default function JenisBatuanPage() {
  const modal = () => {
    Swal.fire({
      title: "Tahukah kamu Daur Ulang Batuan?",
      text: "Batuan yang telah berusia miliaran tahun bisa dihancurkan oleh pelapukan dan berubah menjadi sedimen, yang kemudian membentuk batuan baru melalui proses geologi",
    });
  };

  return (
    <div className="mt-5 pt-10 flex flex-wrap flex-col">
      {/* <Link href="/pengertian" className="text-3xl">
        <MdArrowBackIosNew />
      </Link> */}
      <div>
        <h1 className="text-center text-2xl font-bold text-choco uppercase mb-6 ">
          Jenis-jenis Batuan
        </h1>
      </div>
      <div className="flex items-center flex-wrap gap-5 text-brule text-xl justify-center">
        <Button
          type="button"
          className="px-4 text-xl p-2 bg-choco text-brule rounded-md capitalize w-[200px]"
        >
          <Link href={"/batuan-beku"} title="Batuan Beku">
            {" "}
            Batuan Beku <br />
            <span className="italic">(Igneous Rock)</span>
          </Link>
        </Button>

        <Button
          type="button"
          className="px-4 text-sm p-2 bg-choco text-brule rounded-md capitalize w-[200px]"
        >
          <Link href={"/batuan-sendimen"} title="Batuan Sedimen">
            Batuan Sedimen <br />
            <span className="italic">(Metamorphic Rock)</span>
          </Link>
        </Button>

        <Button
          type="button"
          className="px-4 text-xl p-2 bg-choco text-brule rounded-md capitalize w-[200px]"
        >
          <Link href={"/batuan-metamorf"} title="Batuan Metamorf">
            Batuan Metamorf
          </Link>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Button
            type="button"
            onClick={modal}
            className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 "
          >
            <h3 className="font-bold">Fakta Menarik</h3>
          </Button>
        </div>
        <div className="">
          <Image src={vulcano} alt="vulcano" width={400} height={100} />
        </div>
      </div>
    </div>
  );
}
