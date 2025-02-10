"use client";
import SceneBatuanSedimen from "@/components/BatuanSedimen/scene";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";
import Swal from "sweetalert2";
import batu from "@/public/imageBatu/batu (1).png";
import kerikil from "@/public/imageBatu/batu (11).png";

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

  const handleClick = () => {
    Swal.fire({
      title: "Tahukah kamu bahwa Siklus Tak Berujung? ",
      text: " Batuan sedimen terbentuk dari akumulasi partikel-partikel yang terangkut oleh angin, air, atau es. Contoh batuan ini adalah batu pasir dan batu kapur.",
    });
  };

  const router = useRouter();
  return (
    <div>
      <Image
        src={batu}
        alt="batu"
        width={100}
        height={100}
        className="-z-40 absolute"
      />
      <Image
        src={batu}
        alt="batu"
        width={100}
        height={100}
        className="-z-40 absolute bottom-3 right-2"
      />

      <div className=" py-10">
        <Image
          src={kerikil}
          alt="batu"
          width={100}
          height={100}
          className="-z-40 absolute  left-2"
        />
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
              <p className="text-justify">
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
              <p className="text-justify">
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
              <p className="text-justify">
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
        {/* karakteristik batu sedimen */}
        <div>
          <div className="mt-5 text-justify">
            <h2>
              Adapun ciri-ciri dan karakteristik yang terdapat pada batuan
              sedimen, yaitu sebagai berikut.
            </h2>
            <div>
              <ul className="list-decimal">
                <li>
                  <span className="font-bold">Warna Batuan Sedimen</span>
                  <p>
                    Secara umum, warna pada batuan sedimen dipengaruhi oleh
                    beberapa faktor, yaitu:
                  </p>
                  <ul className="list-outside list-disc mx-3">
                    <li>
                      Warna mineral penyusun batuan sedimen. Misalnya, jika
                      batuan sedimen didominasi oleh mineral kuarsa, maka
                      warnanya cenderung putih.
                    </li>
                    <li>Warna massa dasar (matriks) atau warna semen.</li>
                    <li>
                      Warna material yang menyelubungi (coating material).
                      Contohnya, batupasir kuarsa yang diselubungi oleh
                      glaukonit akan berwarna hijau.
                    </li>
                    <li>
                      Derajat kehalusan butir penyusunnya. Pada batuan dengan
                      komposisi yang sama, semakin halus ukuran butirnya, maka
                      warnanya cenderung lebih gelap.
                    </li>
                    <li>
                      Kondisi lingkungan pengendapan. Jika lingkungan bersifat
                      reduksi, warna batuan akan lebih gelap dibandingkan dengan
                      lingkungan oksidasi.{" "}
                    </li>
                    <li>
                      Kandungan material organik. Batuan sedimen yang mengandung
                      banyak material organik cenderung memiliki warna yang
                      lebih gelap.
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <span className="font-bold">Struktur Sedimen</span>
                  </div>
                  <div>
                    <ul className="list-disc list-outside">
                      <li className="">
                        <h2>
                          Struktur di Dalam Batuan{" "}
                          <span className="italic">
                            (Features Within Strata){" "}
                          </span>
                        </h2>
                        <ul className="list-outside list-disc mx-3">
                          <li>
                            Struktur Pelapisan{" "}
                            <span className="italic">
                              (Planar atau Stratifikasi)
                            </span>{" "}
                            Jika ketebalan perlapisan kurang dari 1 cm, maka
                            disebut struktur laminasi.
                          </li>
                          <li>
                            Struktur Pelapisan Silang-siur{" "}
                            <span className="italic">
                              (Cross Bedding / Cross Lamination)
                            </span>
                          </li>
                          <li>
                            Struktur Pelapisan Pilihan{" "}
                            <span className="italic">(Graded Bedding)</span>
                          </li>
                          <li>
                            Normal, jika butiran besar berada di bagian bawah
                            dan semakin halus ke atas.
                          </li>
                          <li>
                            Terbalik <span className="italic">(inverse)</span>,
                            jika butiran halus berada di bagian bawah dan
                            semakin kasar ke atas.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h2>
                          Struktur Permukaan{" "}
                          <span className="italic">(Surface Features)</span>{" "}
                        </h2>
                        <ul className="list-outside list-disc mx-3">
                          <li>
                            <span className="italic"> Ripples</span> (pola
                            gelombang akibat arus atau current{" "}
                            <span className="italic">ripple</span> marks).
                          </li>
                          <li>
                            Cetakan jejak kaki hewan{" "}
                            <span className="italic">
                              (Footprints of various walking animals).
                            </span>
                          </li>
                          <li>
                            Cetakan jejak hewan melata{" "}
                            <span className="italic">
                              {" "}
                              (Tracks and trails of crawling animals).
                            </span>
                          </li>
                          <li>
                            Rekahan lumpur{" "}
                            <span className="italic">
                              (Mud cracks atau polygonal cracks).
                            </span>
                          </li>
                          <li>
                            {" "}
                            Gumuk pasir{" "}
                            <span className="italic">
                              {" "}
                              (Dunes atau Antidunes).{" "}
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3>
                          Struktur Erosi{" "}
                          <span className="italic">
                            (Erosional Sedimentary Structures)
                          </span>
                        </h3>
                        <ul className="list-outside list-disc mx-3">
                          <li>
                            Alur atau galur{" "}
                            <span className="italic">
                              (Flute marks, groove marks, linear ridges).
                            </span>
                          </li>
                          <li>
                            Bekas tumbukan{" "}
                            <span className="italic">(Impact marks)</span>,
                            yaitu jejak akibat tertimpa butiran fragmen batuan
                            atau fosil.{" "}
                          </li>
                          <li>
                            Saluran dan cekungan gerusan{" "}
                            <span className="italic">
                              (Channels and scours).
                            </span>
                          </li>
                          <li>
                            Cekungan gerusan dan pengisian{" "}
                            <span className="italic"> (Scours & fills).</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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

        <div className="flex justify-center">
          <Button
            type="button"
            onClick={handleClick}
            className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 items-center justify-center"
          >
            <h3 className="font-bold">Fakta Menarik</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}
