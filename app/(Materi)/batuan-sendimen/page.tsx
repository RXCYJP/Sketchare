"use client";
import SceneBatuanSedimen from "@/components/BatuanSedimen/scene";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BatuanSendimenPage() {
  return (
    <div>
      <div>
        <div className="">
          <Link href="/jenis-batuan" className="text-3xl">
            <MdArrowBackIosNew />
          </Link>
          <h2 className="text-2xl font-bold">Batuan Sedimen</h2>
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
              <span className="font-bold">Sedimen Klastik</span> Batuan sedimen
              klastik adalah jenis batuan sedimen yang memiliki komposisi kimia
              yang sama seperti batuan asalnya. Saat diangkut, batuan ini
              mengalami proses penghancuran secara mekanis, dari ukuran besar
              menjadi lebih kecil. Misalnya, batuan besar di pegunungan yang
              lapuk akan pecah menjadi kepingan-kepingan kecil. Kepingan
              tersebut kemudian terbawa oleh air hujan, longsor, atau
              menggelinding di lereng hingga masuk ke sungai. Saat berada di
              sungai, aliran air menghantam batuan tersebut, mengubahnya menjadi
              kerikil, pasir, atau lumpur yang akhirnya mengendap di lokasi baru
              (Hartono, 2007).
            </li>
            <li>
              <span className="font-bold">Sedimen Kimiawi</span> ; Batuan
              Sedimen Kimiawi adalah batuan sedimen yang terbentuk oleh proses
              pengendapan yang terjadi karena proses kimia, seperti pelarutan,
              penguapan, oksidasi, dan dehidrasi. Contohnya hujan yang terjadi
              di gunung kapur. Air hujan yang mengandung CO2 meresap ke dalam
              retakan halus pada batu gamping (CaCO3 ). Air tersebut akan
              melarutkan gamping yang dilaluinya sehingga menjadi larutan air
              kapur atau Ca(HCO3 ). Aliran larutan kapur akan sampai ke atap gua
              kapur, sehingga tetesan air kapur tersebut membentuk stalaktit di
              atap gua dan stalagmit di dasar gua. Terjadinya stalaktit dan
              stalagmit akibat adanya pelarutan dan penguapan H2O dan CO2 pada
              waktu air kapur menetes. Kedua bentukan sedimen kapur tersebut
              disebut batuan sedimen kimiawi (Hartono, 2007).
            </li>
            <li>
              <span className="font-bold">Sedimen Organik</span> ; Batuan Batuan
              sedimen organik adalah batuan sedimen yang terjadi karena proses
              pengendapan mendapat bantuan dari organisme. Sisa rumah, atau
              bangkai binatang laut yang tertimbun di dasar laut, seperti
              kerang, terumbu karang, tulang belulang, lapisan humus di hutan,
              dan organisme-organisme lainnya (Hartono, 2007).
            </li>
          </ul>
        </div>
        <div>
          <SceneBatuanSedimen />
        </div>
      </div>
    </div>
  );
}
