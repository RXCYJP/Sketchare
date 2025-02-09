import Button from "@/components/button";
import Link from "next/link";
import Swal from "sweetalert2";

export default function MenuPage() {
  const handleClick = () => {
    Swal.fire({
      title: "Ketahui Fakta Menarik",
      text: "Tahukah kamu bahwa Siklus Tak Berujung – Siklus batuan adalah proses alami yang terus berlangsung selama jutaan tahun, mengubah satu jenis batuan menjadi jenis lainnya melalui berbagai proses geologi.",
      icon: "info",
    });
  };
  return (
    <div className="flex flex-col items-center  pb-10">
      <div>
        <h1 className="font-bold text-2xl text-choco">Menu</h1>
      </div>
      <div>
        <iframe
          className="w-full h-[300px] md:h-[500px] mt-5"
          src="https://www.youtube.com/embed/7JP9R-OpGqQ?si=3KC0NnCWS2Xo30Gu"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
        <div className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center">
          <h3 className="font-bold">Fakta Menarik</h3>
          <p>
            Tahukah kamu bahwa Siklus Tak Berujung – Siklus batuan adalah proses
            alami yang terus berlangsung selama jutaan tahun, mengubah satu
            jenis batuan menjadi jenis lainnya melalui berbagai proses geologi.
          </p>
        </div>
      </div>
    </div>
  );
}
