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
      <div>
        <div className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center">
          <h3 className="font-bold">Tahukah kamu Daur Ulang Batuan?</h3>
          <p>
            Batuan yang telah berusia miliaran tahun bisa dihancurkan oleh
            pelapukan dan berubah menjadi sedimen, yang kemudian membentuk
            batuan baru melalui proses geologi
          </p>
        </div>
      </div>
    </div>
  );
}
