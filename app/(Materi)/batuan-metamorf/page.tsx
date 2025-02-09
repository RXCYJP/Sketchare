"use client";
import SceneBatuanMetamorf from "@/components/BatuanMetamorf3d/scene";
import Button from "@/components/button";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
  return (
    <div className="my-5 py-10">
      <div>
        <div>
          <h2 className="text-2xl font-bold">
            Batuan Metamorfisme
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
        <div className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center">
          <h3 className="font-bold">Fakta Menarik</h3>
          <p>
            Tahukah kamu Batu Permata Berasal dari Proses Metamorfisme –
            Beberapa batu permata seperti safir dan rubi terbentuk akibat proses
            metamorfisme yang mengubah mineral menjadi bentuk kristal yang indah
          </p>
        </div>
      </div>
    </div>
  );
}
