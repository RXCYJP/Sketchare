"use client";
import SceneBatuanSedimen from "@/components/BatuanSedimen/scene";
import Button from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BatuanSendimenPage() {
  const data = [
    "breksi",
    "batubara",
    "batupasir",
    "batupasirkwarsa",
    "karbonat",
    "aragonite",
    "calcite",
    "dolomit",
    "magnesit",
  ];

  const router = useRouter();
  return (
    <div>
      <div className=" py-10">
        <div className="">
          <h2 className="text-2xl font-bold text-center">Batuan Sedimen</h2>
        </div>
        <div>
          <p className="text-justify">
            Batuan sedimen adalah jenis batuan yang terjadi karena proses
            pengendapan materi hasil erosi atau pelarutan. dengan kata lain
            batuan sedimen merupakan batuan yang berasal dari batuan yang sudah
            pernah ada sebelumnya. batuan sedimen hanya menyusun sekitar 5% dari
            banyak total volume kerak bumi dan menutupi sekitar 75% dari
            permukaan bumi. selain itu, sekitar 80% permukaan benua memang
            tertutup oleh batuan sedimen.
          </p>
          <ul className="list-decimal">
            <li>
              <span className="font-bold">Sedimen Klastik</span> <br />
              <p>
                Batuan sedimen klastik adalah jenis batuan sedimen yang memiliki
                komposisi kimia yang sama seperti batuan asalnya. Saat diangkut,
                batuan ini mengalami proses penghancuran secara mekanis, dari
                ukuran besar menjadi lebih kecil. Misalnya, batuan besar di
                pegunungan yang lapuk akan pecah menjadi kepingan-kepingan
                kecil. Kepingan tersebut kemudian terbawa oleh air hujan,
                longsor, atau menggelinding di lereng hingga masuk ke sungai.
                Saat berada di sungai, aliran air menghantam batuan tersebut,
                mengubahnya menjadi kerikil, pasir, atau lumpur yang akhirnya
                mengendap di lokasi baru (Hartono, 2007).
              </p>
            </li>
            <li>
              <span className="font-bold">Sedimen Kimiawi</span> <br />{" "}
              <p>
                {" "}
                Batuan Sedimen Kimiawi adalah batuan sedimen yang terbentuk oleh
                proses pengendapan yang terjadi karena proses kimia, seperti
                pelarutan, penguapan, oksidasi, dan dehidrasi. Contohnya hujan
                yang terjadi di gunung kapur. Air hujan yang mengandung CO2
                meresap ke dalam retakan halus pada batu gamping (CaCO3 ). Air
                tersebut akan melarutkan gamping yang dilaluinya sehingga
                menjadi larutan air kapur atau Ca(HCO3 ). Aliran larutan kapur
                akan sampai ke atap gua kapur, sehingga tetesan air kapur
                tersebut membentuk stalaktit di atap gua dan stalagmit di dasar
                gua. Terjadinya stalaktit dan stalagmit akibat adanya pelarutan
                dan penguapan H2O dan CO2 pada waktu air kapur menetes. Kedua
                bentukan sedimen kapur tersebut disebut batuan sedimen kimiawi
                (Hartono, 2007).
              </p>
            </li>
            <li>
              <span className="font-bold">Sedimen Organik</span> <br />{" "}
              <p>
                {" "}
                Batuan Batuan sedimen organik adalah batuan sedimen yang terjadi
                karena proses pengendapan mendapat bantuan dari organisme. Sisa
                rumah, atau bangkai binatang laut yang tertimbun di dasar laut,
                seperti kerang, terumbu karang, tulang belulang, lapisan humus
                di hutan, dan organisme-organisme lainnya (Hartono, 2007).
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-center gap-7 mt-5">
          {data.map((item, index) => (
            <Button
              key={index}
              type="button"
              className="text-2xl p-2 bg-choco text-brule rounded-md capitalize w-[200px]"
              onClick={() => router.push(`/batuan-sendimen/${item}`)}
            >
              {item}
            </Button>
          ))}
          {/* <SceneBatuanSedimen /> */}
        </div>

        <div>
          <div className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center">
            <h3 className="font-bold">
              Tahukah kamu Batuan Sedimen dari Endapan
            </h3>
            <p>
              Batuan sedimen terbentuk dari akumulasi partikel-partikel yang
              terangkut oleh angin, air, atau es. Contoh batuan ini adalah batu
              pasir dan batu kapur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
