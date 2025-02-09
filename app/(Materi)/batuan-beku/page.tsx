"use client";
import SceneBatuanBeku from "@/components/BatuBeku3d/scene";
import Button from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsBack, BsSkipBackwardBtn } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BatuanBekuPage() {
  const data = ["granit", "rhyolite", "diorite", "andesit", "gabbro", "basalt"];
  const router = useRouter();
  return (
    <div>
      <div className="pb-10">
        <div>
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
            berhubungan dengan oksigen (O) disebut oksida, contoh: SiO2. Sifat
            dan jenis batuan beku dapat ditentukan dengan didasarkan pada
            kandungan SiO2 di dalamnya.
          </p>
          <br />
          <ul className="list-decimal text-justify space-y-3">
            <li>
              <span className="font-bold">
                Batuan <span className="italic">Intrusif </span>
              </span>
              <br />
              <div className="text-justify">
                <p>
                  Batuan <span className="italic">intrusif</span> merupakan
                  terdiri dari batuan vulkanik berbutir halus (atau kaca) karena
                  pembekuannya yang cepat; batuan
                  <span className="italic">intrusif</span> umumnya berbutir
                  kasar, yang menunjukkan bahwa magma mengkristal secara
                  perlahan di bawah tanah. Eksperimen menunjukkan bahwa
                  pendinginan cairan yang lebih lambat menghasilkan kristal yang
                  lebih besar.
                </p>
                <br />
                <p>
                  Eksperimen telah mengonfirmasi bahwa sebagian besar mineral
                  dalam batuan ini hanya dapat terbentuk pada suhu tinggi.
                  Eksperimen lain menunjukkan bahwa beberapa mineral hanya dapat
                  terbentuk di bawah tekanan tinggi, yang mengimplikasikan bahwa
                  mineral-mineral tersebut terkubur di bawah tanah.
                </p>
                <br />
                <p>
                  Jenis batuan beku <span className="italic">intrusif</span>
                  didasarkan pada tekstur (terutama ukuran butiran) dan
                  komposisi mineralogi (yang mencerminkan komposisi kimiawi).
                  Adapun jenis batuan yang termasuk dalam batuan intrusif yaitu
                  <span className="italic">granite, diorite, dan gabbro.</span>
                </p>
              </div>
            </li>
            <li>
              <span className="font-bold">
                Batuan <span className="italic">Ekstrusive</span>
              </span>
              <br />
              <div>
                <p>
                  Sebagian besar batuan{" "}
                  <span className="italic">ekstrusif </span> diberi nama dan
                  diidentifikasi berdasarkan komposisi dan teksturnya. Batuan
                  ekstrusif merupakan Batuan berbutir halus adalah batuan yang
                  sebagian besar butiran mineralnya lebih kecil dari 1
                  milimeter.{" "}
                </p>
                <br />
                <p>
                  Jenis batuan beku Extrusive didasarkan pada tekstur (terutama
                  ukuran butiran) dan komposisi mineralogi (yang mencerminkan
                  komposisi kimiawi). Adapun jenis batuan yang termasuk dalam
                  batuan extrusive yaitu rhyolite, andesite, dan basalt.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* List batuan beku */}
        <div className="flex flex-wrap gap-5 mt-5 justify-center pb-9">
          {data.map((item, index) => (
            <Button
              key={index}
              type="button"
              className="text-2xl p-2 bg-choco text-brule rounded-md capitalize w-[200px]"
              onClick={() => router.push(`/batuan-beku/${item}`)}
            >
              {item}
            </Button>
          ))}
          {/* <SceneBatuanBeku /> */}
        </div>
        <div className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center">
          <h3 className="font-bold">
            Tahukah kamu Fakta tentang Jenis-Jenis Batuan Batuan Beku dari
            Magma?
          </h3>
          <p>
            Batuan beku terbentuk dari magma yang mendingin dan mengeras.
            Contohnya, granit terbentuk di bawah permukaan bumi, sementara basal
            terbentuk dari lava yang mendingin di permukaan.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
