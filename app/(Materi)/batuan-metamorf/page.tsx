"use client";
import SceneBatuanMetamorf from "@/components/BatuanMetamorf3d/scene";
import Button from "@/components/button";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function BatuanMetamorfPage() {
  const data = [
    "marmer",
    "kuarsit",
    "hornsfell",
    "phyllite",
    "gneiss",
    "batutulis",
  ];
  const router = useRouter();
  const modal = () => {
    Swal.fire({
      title: "Tahukah kamu Batu Permata Berasal dari Proses Metamorfisme",
      text: "Beberapa batu permata seperti safir dan rubi terbentuk akibat proses metamorfisme yang mengubah mineral menjadi bentuk kristal yang indah",
    });
  };
  return (
    <div className="my-5 py-10">
      <div>
        <div>
          <h2 className="text-2xl font-bold">
            Batuan Metamorfisme <br />
            <span className="italic">(Metamorphic Rock)</span>
          </h2>
        </div>
        <div>
          <p className="text-justify">
            Batuan Metamorfisme adalah batuan hasil dari perubahan batuan asal
            (batuan beku dan batuan sedimen) terjadi akibat proses metamorfosis.
            Metamorfosis merupakan suatu proses yang dialami batuan asal akibat
            dari adanya tekanan atau temperatur yang meningkat dan temperatur
            yang sama-sama meningkat. Adapun Klasifikasi batuan metamorf
            berdasarkan teksturnya yaitu sebagai berikut:
          </p>
          <ul className="list-decimal">
            <li>
              <span className="font-bold">batuan tidak terkelupas</span> <br />
              <div className="flex flex-wrap gap-5 mt-5 items-center justify-center">
                {data.slice(0, 3).map((item, index) => (
                  <Button
                    key={index}
                    type="button"
                    className="text-2xl p-2 bg-choco text-brule rounded-md capitalize w-[200px]"
                    onClick={() => router.push(`/batuan-metamorf/${item}`)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </li>
            <li>
              <span className="font-bold">batuan bergelombang</span> <br />
              <div className="flex flex-wrap gap-5 mt-5 items-center justify-center">
                {data.slice(3, 7).map((item, index) => (
                  <Button
                    key={index}
                    type="button"
                    className="text-2xl p-2 bg-choco text-brule rounded-md capitalize w-[200px]"
                    onClick={() => router.push(`/batuan-metamorf/${item}`)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </li>
          </ul>
        </div>
        {/* karakteristik */}
        <div className="text-justify">
          <ul className="list-decimal">
            <li>
              <h2 className="font-bold">Bentuk Kristal Batuan Metamorf</h2>
              <ul className="list-disc mx-3">
                <li>
                  <span className=" italic">Euhedral </span> (Kristal berbentuk
                  sempurna, dibatasi oleh bidang kristal yang ideal, tegas, dan
                  teratur).{" "}
                </li>
                <li>
                  <span className="italic">Subhedral </span> (Kristal dibatasi
                  oleh bidang kristal yang sebagian teratur dan sebagian tidak).{" "}
                </li>
                <li>
                  <span className="italic">Anhedral </span>
                  (Kristal tidak memiliki bentuk yang teratur).{" "}
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-bold">Berdasarkan bentuk kristalnya</h2>
              <p>tekstur batuan metamorf dapat dibedakan menjadi:</p>
              <ul className="list-disc mx-3">
                <li>
                  <span className="italic">Idioblastik</span> (Mineral memiliki
                  bentuk kristal euhedral).
                </li>
                <li>
                  <span>Xenoblastik/Hypidioblastik </span>(Mineral memiliki
                  bentuk kristal anhedral).
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-bold">Ukuran Butir Kristal</h2>
              <p>
                Berdasarkan ukuran butirnya, tekstur batuan metamorf dapat
                dibedakan menjadi:
              </p>
              <ul className="list-disc mx-3">
                <li>
                  <span className="italic">Fanerit </span> (Kristal masih dapat
                  dilihat dengan mata telanjang).
                </li>
                <li>
                  <span className="italic"> Afanit</span> (Kristal berukuran
                  sangat kecil dan tidak dapat dilihat dengan mata telanjang).
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-bold">
                Bentuk Mineral dalam Batuan Metamorf
              </h2>
              <p>
                Berdasarkan bentuk mineral penyusunnya, tekstur batuan metamorf
                diklasifikasikan sebagai berikut:
              </p>
              <ul className="list-disc mx-3">
                <li>
                  <span className="italic">Lepidoblastik</span> (Mineral
                  berbentuk tabular (pipih)).
                </li>
                <li>
                  <span className="italic">Nematoblastik</span> (Mineral
                  berbentuk prismatik (panjang dan ramping)).
                </li>
                <li>
                  <span className="italic">Granoblastik</span> (Mineral
                  berbentuk granular dan equi-dimensional).{" "}
                </li>
                <li>
                  <span className="italic">Granoblastik</span> (teratur)
                  (Mineral berbentuk <span className="italic">granular</span>,
                  memiliki batas yang lebih teratur, dan umumnya berbentuk
                  <span className="italic">anhedral</span>).{" "}
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-bold">Berdasarkan Proses Metamorfisme</h2>
              <ul className="list-disc mx-3">
                <li>
                  <span className="font-bold">
                    Batuan Metamorf Kontak{" "}
                    <span className="italic">(Thermal)</span>{" "}
                  </span>
                  <p>
                    Batuan metamorf kontak terbentuk akibat suhu yang sangat
                    tinggi, biasanya terjadi karena aktivitas magma. Suhu panas
                    dari intrusi magma menyebabkan perubahan bentuk dan warna
                    batuan. Semakin jauh letaknya dari sumber panas, semakin
                    rendah tingkat metamorfosisnya. Contoh batuan metamorf
                    kontak antara lain: Batu kapur (gamping) Batu marmer
                    Batolit, lakolit, dan sill{" "}
                  </p>
                </li>
                <li>
                  <span className="font-bold">
                    Batuan Metamorf Dinamo (Tekanan)
                  </span>
                  <p>
                    Batuan metamorf dinamo terbentuk akibat tekanan tinggi dalam
                    waktu lama, biasanya terjadi di bagian atas kerak bumi
                    akibat pergerakan tektonik. Tekanan ini menyebabkan
                    perubahan struktur mineral, seperti: Batu lumpur Batu tulis
                    (slate) Serpih, Batuan hablur Jenis batuan ini umumnya
                    ditemukan di daerah patahan dan lipatan.
                  </p>
                </li>
                <li>
                  <span className="font-bold">
                    Batuan Metamorf Kontak{" "}
                    <span className="italic">Pneumatolitik</span>{" "}
                  </span>
                  <p>
                    Batuan ini mengalami metamorfisme akibat pengaruh gas-gas
                    panas dari magma, yang menyebabkan perubahan komposisi kimia
                    mineral. Contohnya: Kuarsa, gas borium, Turmalin Kuarsa, gas
                    fluorium, dan Topas{" "}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="button"
            className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5"
            onClick={modal}
          >
            <h3 className="font-bold">Fakta Menarik</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}
