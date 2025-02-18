"use client";
import Image from "next/image";
import siklusBatuan from "../../../public/siklus batubatuan.jpg";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import Loader from "@/components/loader";
import RockCycleScene from "@/components/siklusBatuan3d/Scene";
import Swal from "sweetalert2";
import Button from "@/components/button";

export default function PengertianPage() {
  const modal = () => {
    Swal.fire({
      title: "Tahukah kamu bahwa Siklus Tak Berujung?",
      text: "Siklus batuan adalah proses alami yang terus berlangsung selama jutaan tahun, mengubah satu jenis batuan menjadi jenis lainnya melalui berbagai proses geologi.",
    });
  };

  return (
    <div>
      <div className="pb-10">
        <div className=" flex gap-5 pt-5">
          <h1 className="font-bold"> A. Siklus batuan</h1>
        </div>
        <div className="md:mt-4 text-justify text-[14px]">
          <p>
            Siklus batuan <span className="italic">(Rock Cycle)</span> merupakan
            proses perputaran terbentuknya batuan yang berawal dari magma yang
            membeku sehingga menjadi batuan beku
            <span className="italic"> Igneous Rock</span> kemudian akibat adanya
            pengaruh cuaca menjadi batuan sedimen. Batuan sedimen yang mengalami
            tekanan dan suhu yang tinggi di bawah permukaan bumi akan menjadi
            batuan metamorf <span className="italic">Metamorphic Rock</span>.
            Setelah menjadi batuan metamorf siklusnya akan kembali lagi menjadi
            magma. Proses yang berulang tersebut terjadi dalam waktu hingga
            jutaan tahun
            <span className="italic font-bold"> (Oktafiana et al., 2023).</span>
          </p>
        </div>
        <div>
          <RockCycleScene />
        </div>

        <div className="md:mt-5">
          <ul className="list-decimal gap-2">
            <li className="mt-3">
              <h1 className="font-bold ">
                Magma Mengalami Kristalisasi
                <span className="italic"> (Cooling)</span>
              </h1>
              <p className="text-wrap text-justify text-sm">
                Semua jenis batuan di Bumi berasal dari magma, yang merupakan
                inti pembentuk batuan yang berada di bawah permukaan bumi. Magma
                ini biasanya keluar melalui letusan gunung berapi. Setelah
                keluar, magma mengalami proses kristalisasi, yaitu pembekuan
                yang menghasilkan kristal atau mineral. Ketika gunung berapi
                meletus, magma mengalir di permukaan bumi dalam bentuk lelehan.
                Jika lelehan magma tersebut terkena air hujan, proses
                kristalisasi akan berlangsung. Hasil kristalisasi magma ini
                sering ditemukan di sekitar gunung berapi yang telah mengalami
                erupsi. Magma yang membeku ini kemudian membentuk jenis batuan
                yang dikenal sebagai batuan beku{" "}
                <span className="italic font-bold">(Igneous Rock)</span>{" "}
                (Harris, 2021).
              </p>
            </li>
            <li className="mt-3">
              <h3 className="font-bold">
                Mengalami Pengankatan dan Pelapukan{" "}
                <span className="italic">(Weathering and Lithification)</span>
              </h3>
              <p className="text-wrap text-justify text-sm">
                Batuan beku yang telah terbentuk, jika berada di udara terbuka,
                akan mengalami proses pelapukan. Batuan yang paling cepat
                mengalami pelapukan adalah batuan yang membeku di permukaan bumi
                karena langsung terkena pengaruh cuaca, seperti air hujan dan
                panas matahari. Oleh sebab itu, batuan di permukaan bumi lebih
                rentan terhadap pelapukan dibandingkan dengan batuan yang berada
                di bawah permukaan. Pengangkatan batuan dari bawah permukaan
                bumi ke permukaan biasanya terjadi akibat aktivitas tektonik.
                Proses pelapukan batuan ini disebabkan oleh reaksi fisik dan
                kimia antara batuan dengan elemen seperti udara, air, atau
                organisme tertentu. Setelah mengalami pelapukan, batuan akan
                berubah menjadi material sedimen melalui proses erosi(Harris,
                2021).
              </p>
            </li>
            <li className="mt-3">
              <h3 className="font-bold">
                Proses Erosi <span className="italic">(Erosion)</span>
              </h3>
              <p className="text-wrap text-justify text-sm">
                Setelah melalui proses pengangkatan dan pelapukan, tahap
                berikutnya adalah erosi. Dalam tahap ini, air memegang peranan
                penting dalam siklus batuan. Aliran air, seperti di sungai,
                mampu membawa material hasil pelapukan ke lokasi lain. Selain
                air, angin dan gletser juga memiliki kemampuan untuk memindahkan
                material pelapukan ke tempat yang berbeda (Harris, 2021).
              </p>
            </li>
            <li className="mt-3">
              <h3 className="font-bold">
                Pengendapan dan Pembentukan Batuan Sedimen{" "}
                <span className="italic">(Sedimentary Rock)</span>
              </h3>
              <p className="text-wrap text-justify text-sm">
                Material hasil pelapukan batuan beku yang terbawa atau berpindah
                akhirnya akan mengendap di suatu lokasi. Seiring waktu, endapan
                ini terus bertambah dan menumpuk. Endapan yang semakin banyak
                tersebut kemudian mengalami pengerasan, sehingga membentuk
                batuan sedimen (Harris, 2021).
              </p>
            </li>
            <li className="mt-3">
              <h3 className="font-bold">
                Batuan Sedimen Berubah Menjadi Batuan Metamorf{" "}
                <span className="italic">(Metamorphic Rock)</span>
              </h3>
              <p className="text-wrap text-justify text-sm">
                Batuan sedimen terdapat dalam jumlah yang melimpah, terutama di
                bawah permukaan bumi. Jika batuan ini tidak terangkat ke
                permukaan, misalnya melalui proses tektonik, maka batuan
                tersebut justru akan terkubur semakin dalam. Semakin dalam
                posisinya, semakin besar pula kemungkinan batuan sedimen terkena
                pengaruh suhu tinggi dan tekanan yang dihasilkan oleh kompresi
                tektonik serta panas dari inti bumi. Proses ini menyebabkan
                perubahan pada batuan sedimen hingga akhirnya menjadi batuan
                metamorf atau malihan (Harris, 2021).
              </p>
            </li>
            <li className="mt-3">
              <h3 className="font-bold">
                Batuan Metamorf atau Malihan Berubah Kembali Menjadi Magma
              </h3>
              <p className="text-wrap text-justify text-sm">
                Karena batuan memiliki siklus yang berputar seperti siklus air
                hujan, batuan metamorf atau malihan juga dapat kembali menjadi
                magma. Magma ini kemudian akan melalui proses selanjutnya, dan
                siklus tersebut terus berulang tanpa henti (Harris, 2021).
              </p>
            </li>
          </ul>
        </div>

        <div>
          <iframe
            className="w-full h-[300px] md:h-[500px] mt-5"
            src="https://www.youtube.com/embed/7JP9R-OpGqQ?si=3KC0NnCWS2Xo30Gu"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="text-sm">
            <span className="font-bold">Sumber vidio youtube</span> (BBGP
            Provinsi Jawa Timur, 2023)
          </p>
        </div>

        <div className="mt-5 pb-10 items-center flex justify-center flex-col">
          <Link
            href={"/jenis-batuan"}
            className="p-2 text-2xl bg-choco text-brule mt-5 rounded-lg"
          >
            Jenis-Jenis Batuan
          </Link>
        </div>

        <div className="items-center justify-center flex">
          <Button
            type="button"
            onClick={modal}
            className=" bg-choco p-3 rounded-md text-brule flex flex-wrap gap-5 mt-5 "
          >
            <h3 className="font-bold">Fakta Menarik</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}
