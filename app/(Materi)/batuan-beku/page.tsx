"use client";
import SceneBatuanBeku from "@/components/BatuBeku3d/scene";
import Button from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsBack, BsSkipBackwardBtn } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import Swal from "sweetalert2";

export default function BatuanBekuPage() {
  const data = ["granit", "rhyolite", "diorite", "andesit", "gabbro", "basalt"];
  const router = useRouter();
  const modal = () => {
    Swal.fire({
      title:
        "Tahukah kamu Fakta tentang Jenis-Jenis Batuan Batuan Beku dari Magma?",
      text: "Batuan beku terbentuk dari magma yang mendingin dan mengeras.Contohnya, granit terbentuk di bawah permukaan bumi, sementara basal terbentuk dari lava yang mendingin di permukaan.",
    });
  };
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
                  Batuan <span className="italic"> intrusif</span> merupakan
                  terdiri dari batuan vulkanik berbutir halus (atau kaca) karena
                  pembekuannya yang cepat batuan
                  <span className="italic"> intrusif</span> umumnya berbutir
                  kasar, yang menunjukkan bahwa magma mengkristal secara
                  perlahan di bawah tanah. <br />
                  Eksperimen menunjukkan bahwa pendinginan cairan yang lebih
                  lambat menghasilkan kristal yang lebih besar.
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
                  Jenis batuan beku <span className="italic">intrusif </span>
                  didasarkan pada tekstur (terutama ukuran butiran) dan
                  komposisi mineralogi (yang mencerminkan komposisi kimiawi).
                  Adapun jenis batuan yang termasuk dalam batuan intrusif yaitu
                  <span className="italic"> granite, diorite, dan gabbro.</span>
                </p>
              </div>
            </li>
            <li>
              <span className="font-bold">
                Batuan <span className="italic"> Ekstrusive</span>
              </span>
              <br />
              <div>
                <p>
                  Sebagian besar batuan
                  <span className="italic"> ekstrusif </span> diberi nama dan
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
        <br />
        {/* karakter batuan beku */}
        <div className="text-justify mt-5">
          <h3>
            Adapun ciri-ciri dan karakteristik yang terdapat pada batuan beku,
            yaitu sebagai berikut
          </h3>
          <div className="mt-3">
            <ul className="list-decimal space-y-3">
              <li>
                <div>
                  <h2>Warna Batuan Beku</h2>
                  <p className="indent-8">
                    Warna batuan beku bervariasi dari hitam, abu-abu dan putih
                    cerah. Warna ini sangat dipengaruhi oleh komposisi mineral
                    penyusun batuan beku ini. Pencampuran warna mineral
                    merupakan faktor utama pewarnaan batuan beku. Contohnya
                    ketika terjadi pencampuran mineral hitam pekat dengan putih
                    maka biasanya akan terbentuk batuan beku hitam berbintik
                    putih.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Tekstur Batuan Beku</h2>
                  <p className="indent-8">
                    Tekstur dari batuan juga tergantung kepada jenis mineralnya.
                    Komposisi dari mineral tersebut akan berhubungan dengan
                    ukuran butir, tingkat kristalilasi, dan bentuk kristal.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Tingkat Keseragaman Butir </h2>
                  <ul className="list-disc">
                    <li>
                      <span className="italic">Equigranular</span>, apabila
                      kristal penyusunnya berukuran relatif seragam. Butir-butir
                      penyusun batu tersebut ukurannya hampir sama antara yang
                      satu dengan lainnya.
                    </li>
                    <li>
                      <span className="italic">Inequigranular</span>, jika
                      ukuran butir kristal penyusunnya tidak sama
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h2>Bentuk Kristal</h2>
                  <ul className="list-disc">
                    <li>
                      <span className="italic">Euhedral</span>, jika kristal
                      berbentuk sempurna, dengan dibatasi oleh bidang kristal
                      yang ideal (tegas, jelas teratur).{" "}
                    </li>
                    <li>
                      <span className="italic">Subhedral</span>, kristalnya
                      dibatasi oleh bidang-bidang kristal yang tidak begitu
                      jelas, sebagian teratur, sebagian tidak.
                    </li>
                    <li>
                      <span className="italic">Anhedral</span>,kristalnya
                      dibatasi oleh bidang-bidang kristal yang tidak teratur.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h3>Visualisasi Granularity</h3>
                  <p className="indent-7">
                    Berdasarkan pengamatan dengan mata telanjang atau dengan
                    kaca pembesar, batuan beku memiliki 2 jenis granulity, yaitu
                    :
                  </p>
                  <ul>
                    <li>
                      <span>Afanitik,</span> batuan beku berbutir sangat halus,
                      sehingga mineral atau kristal penyusunnya tidak dapat
                      diamati dengan mata telanjang atau kaca pembesar.
                    </li>
                    <li>
                      <span>Fenerik</span>, batuan beku yang dapat diamati
                      mineral penyusunnya, baik itu dalam bentuk kristal, ukuran
                      butir, atau hubungan antar butir.{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h3>Batuan Beku Berdasarkan Tempat Terbentuknya</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      <span>Batuan Beku Dalam</span>
                      <p>
                        Batuan beku dalam adalah batuan yang terbentuk di dalam
                        perut bumi, bahkan ada yang terbentuk di dekat dapur
                        magma. Proses ini terjadi karena pendinginan magma
                        berlangsung sangat lambat dan magma memiliki viskositas
                        tinggi. Batuan ini juga dikenal sebagai batuan plutonik
                        atau deep-seated rock. Contohnya adalah batuan granit.
                      </p>
                    </li>
                    <li>
                      <span>Batuan Beku Korok</span>
                      <p>
                        Batuan beku korok merupakan batuan yang terbentuk di
                        celah-celah litosfer (kerak bumi) atau di lereng gunung.
                        Batuan ini terbentuk di dekat permukaan bumi dan dikenal
                        juga dengan istilah dike rock. Contohnya adalah batu
                        diorit.
                      </p>
                    </li>
                    <li>
                      <span>Batuan Beku Luar </span>
                      <p>
                        Batuan beku luar adalah jenis batuan beku yang terbentuk
                        di permukaan bumi. Proses pembekuannya berlangsung lebih
                        cepat karena magma yang keluar dari dalam bumi telah
                        menjadi lava.
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h3>
                    Batuan Beku Berdasarkan Kandungan SiO₂ (Silikat Dioksida)
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Batuan Beku Asam Merupakan batuan beku dengan kandungan
                      silikat lebih dari 66%.
                    </li>
                    <li>
                      Batuan Beku Intermediate Merupakan batuan beku dengan
                      kandungan silikat antara 52% hingga 66%.{" "}
                    </li>
                    <li>
                      Batuan Beku Basa Merupakan batuan beku dengan kandungan
                      silikat antara 45% hingga 52%.{" "}
                    </li>
                    <li>
                      Batuan Beku Ultrabasa Merupakan batuan beku dengan
                      kandungan silikat kurang dari 45%.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
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
        <div className="flex justify-center">
          <Button
            onClick={modal}
            type="button"
            className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center"
          >
            <h3 className="font-bold">Fakta Menarik</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}
