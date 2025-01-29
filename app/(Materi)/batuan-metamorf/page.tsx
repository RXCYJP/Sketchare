"use client";
import SceneBatuanMetamorf from "@/components/BatuanMetamorf3d/scene";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BatuanMetamorfPage() {
  return (
    <div>
      <div>
        <div>
          <Link href="/jenis-batuan" className="text-3xl">
            <MdArrowBackIosNew />
          </Link>
          <h2 className="text-2xl font-bold">
            Batuan <span className="italic">Metamorf</span>
          </h2>
        </div>
        <div>
          <p className="text-justify">
            Batuan malihan <span className="italic">(Metamorf)</span> adalah
            batuan hasil dari perubahan batuan asal (batuan beku dan batuan
            endapan (sedimen)) akibat proses metamorfosis. Metamorfosis
            merupakan suatu proses yang dialami batuan asal akibat dari adanya
            tekanan atau temperatur yang meningkat dan temperatur yang sama-sama
            meningkat. Adapun Klasifikasi batuan metamorf berdasarkan teksturnya
            yaitu sebagai berikut:
          </p>
          <ul className="list-decimal">
            <li>
              <span className="font-bold">Metamorfisme Kontak</span>{" "}
              ;Metamorfisme kontak adalah di mana suhu tinggi merupakan faktor
              utama. Tekanan pembatas dapat memengaruhi mineral baru yang
              mengkristal; namun, tekanan pembatas biasanya relatif rendah. Hal
              ini dikarenakan metamorfisme kontak sebagian besar terjadi tidak
              terlalu jauh di bawah permukaan bumi (kurang dari 10 kilometer).
              Metamorfisme kontak terjadi berdekatan dengan pluton ketika sebuah
              tubuh magma menyusup ke dalam batuan yang relatif dingin (H
              Carlson et al., 2011).
            </li>
            <li>
              <span className="font-bold">Metamorfisme Regional</span> ;
              Metamorfisme Regional yaitu metamorfisme yang terjadi pada
              kedalaman yang cukup dalam di bawah tanah (umumnya lebih dari 5
              kilometer). Batuan metamorf regional mengindikasikan adanya
              tekanan diferensial selama rekristalisasi (karena alasan ini,
              metamorfisme regional kadang-kadang disebut sebagai metamorfisme
              dinamotermal). Batuan metamorf lazim ditemukan di bagian
              pegunungan yang mengalami perubahan bentuk paling parah. Batuan
              ini dapat dilihat di mana inti pegunungan yang dulunya terkubur
              dalam-dalam terbuka oleh erosi (H Carlson et al., 2011).
            </li>
          </ul>
        </div>
        <div>
          <SceneBatuanMetamorf />
        </div>
      </div>
    </div>
  );
}
