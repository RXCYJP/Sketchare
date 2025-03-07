"use client";
import Button from "@/components/button";
import Link from "next/link";
import Swal from "sweetalert2";
import vulcano from "@/public/imageBatu/batu (4).png";
import lava from "@/public/imageBatu/batu (3).png";
import Image from "next/image";

export default function MenuPage() {
  const handleClick = () => {
    Swal.fire({
      title: "Tahukah kamu bahwa Siklus Tak Berujung? ",
      text: "Siklus batuan adalah proses alami yang terus berlangsung selama jutaan tahun, mengubah satu jenis batuan menjadi jenis lainnya melalui berbagai proses geologi.",
      // icon: "info",
    });
  };
  return (
    <div className="flex flex-col items-center  pb-10">
      <div className="">
        <Image
          src={vulcano}
          alt="vulcano"
          width={150}
          height={200}
          className="drop-shadow-lg absolute -z-30 top-0 left-1 "
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl text-choco">Menu</h1>
      </div>

      <div className=" flex flex-wrap gap-7 justify-center">
        <Link href="/pengertian">
          <Button
            type="button"
            className=" text-2xl bg-choco text-brule mt-5 rounded-lg p-2 w-60"
          >
            Siklus Batuan
          </Button>
        </Link>

        <Link href="/jenis-batuan">
          <Button
            type="button"
            className=" text-2xl bg-choco text-brule mt-5 rounded-lg p-2 w-60"
          >
            Jenis-jenis Batuan
          </Button>
        </Link>
      </div>

      <div>
        <Button
          type="button"
          onClick={handleClick}
          className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center"
        >
          <h3 className="font-bold">Fakta Menarik</h3>
        </Button>
      </div>
      <div className="">
        <Image
          src={lava}
          alt="vulcano"
          width={350}
          height={200}
          className="drop-shadow-lg absolute -z-30  right-1 bottom-5 "
        />
      </div>
    </div>
  );
}
