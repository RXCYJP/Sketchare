"use client";
import SceneBatuanBeku from "@/components/BatuBeku3d/scene";
import Link from "next/link";
import { BsBack, BsSkipBackwardBtn } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BatuanBekuPage() {
  return (
    <div>
      <div>
        <div>
          <Link href="/jenis-batuan" className="text-3xl">
            <MdArrowBackIosNew />
          </Link>
          <h2 className="text-2xl font-bold">Batuan Beku</h2>
        </div>
        <div>
          <p className="text-justify">
            Batuan Beku adalah jenis batuan yang terbentuk dari magma yang
            mendingin dan mengeras dengan atau tanpa proses kristalisasi, batuan
            beku dapat berupa batuan ekstrusif jika terbentuk di permukaan bumi
            atau intrusif jika magma membeku di bawah tanah. (Yulhendra, 2016).
            Jenis dan sifat batuan beku ditentukan dari tipe magmanya. Tipe
            magma tergantung dari komposisi kimia magma. Komposisi kimia magma
            dikontrol dari limpahan unsur-unsur dalam bumi, yaitu Si, Al, Fe,
            Ca, Mg, K, Na, H, dan O yang mencapai hingga 99,9%. Semua unsur yang
            berhubungan dengan oksigen (O ) disebut oksida, contoh: SiO2. Sifat
            dan jenis batuan beku dapat ditentukan dengan didasarkan pada
            kandungan SiO2 di dalamnya. Batuan beku tersusun dari dua mineral
            yaitu mineral felsic dan mafik, mineral tersebut dikelompokkan
            sebagai berikut:
          </p>
          <ul className="list-decimal">
            <li>
              <span className="font-bold">Mineral felsik</span> ; tersusun atas
              silika dan alumina, umumnya berwarna cerah. Mineral tersebut
              antara lain : kuarsa, plagioklas, ortoklas, muskovit.{" "}
            </li>
            <li>
              <span className="font-bold">Mineral mafik</span> ; tersusun atas
              unsur – unsur besi magnesium kalsium, umumnya mineral - mineral
              ini berwarna gelap. Mineral tersebut antara lain : olivin,
              piroksen, hornblenda, biotit.
            </li>
          </ul>
        </div>
        <div>
          <SceneBatuanBeku />
        </div>
      </div>
    </div>
  );
}
