import Button from "@/components/button";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div>
        <h1 className="font-bold text-2xl text-choco">Menu</h1>
      </div>
      <div className=" flex flex-wrap gap-7 justify-center">
        <Link href="/pengertian">
          <Button
            type="button"
            className="p-2 text-2xl bg-choco text-brule mt-5 rounded-lg p-2"
          >
            Siklus Batuan
          </Button>
        </Link>
        <Link href="/jenis-batuan">
          <Button
            type="button"
            className="p-2 text-2xl bg-choco text-brule mt-5 rounded-lg p-2"
          >
            Jenis-jenis Batuan
          </Button>
        </Link>
      </div>
    </div>
  );
}
