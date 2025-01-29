"use clent";
import Image from "next/image";
import siklusBatuan from "../../../public/siklus batubatuan.jpg";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import Loader from "@/components/loader";
import RockCycleScene from "@/components/siklusBatuan3d/Scene";

export default function PengertianPage() {
  return (
    <div>
      <div>
        <div className=" flex gap-5 pt-5">
          <Link href="/menu" className="text-3xl">
            <MdArrowBackIosNew />
          </Link>
          <h1 className="font-bold"> A. Siklus batuan</h1>
        </div>
        <div className="md:mt-5 text-justify">
          <p>
            Siklus batuan merupakan proses perputaran terbentuknya batuan yang
            berawal dari magma yang membeku sehingga menjadi batuan beku
            kemudian akibat adanya pengaruh cuaca menjadi batuan sedimen. Batuan
            sedimen yang mengalami tekanan dan suhu yang tinggi di bawah
            permukaan bumi akan menjadi batuan metamorf. Setelah menjadi batuan
            metamorf siklusnya akan kembali lagi menjadi magma. Proses yang
            berulang tersebut terjadi dalam waktu hingga jutaan tahun{" "}
            <span className="italic font-bold">(Oktafiana et al., 2023).</span>
          </p>
        </div>
        <div>
          <RockCycleScene />
        </div>
        <div className="md:mt-5 text-justify">
          <ul className="list-decimal li">
            <li>
              <h3 className="font-bold">Magma Mengalami Kristalisasi</h3>
              <p>
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
                yang dikenal sebagai batuan beku (Harris, 2021).{" "}
              </p>
            </li>
            <li>
              <h3 className="font-bold">Mengalami Pengankatan dan Pelapukan</h3>
              <p>
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
            <li>
              <h3 className="font-bold">Proses Erosi</h3>
              <p>
                Setelah melalui proses pengangkatan dan pelapukan, tahap
                berikutnya adalah erosi. Dalam tahap ini, air memegang peranan
                penting dalam siklus batuan. Aliran air, seperti di sungai,
                mampu membawa material hasil pelapukan ke lokasi lain. Selain
                air, angin dan gletser juga memiliki kemampuan untuk memindahkan
                material pelapukan ke tempat yang berbeda (Harris, 2021).
              </p>
            </li>
            <li>
              <h3 className="font-bold">
                Pengendapan dan Pembentukan Batuan Sedimen
              </h3>
              <p>
                Material hasil pelapukan batuan beku yang terbawa atau berpindah
                akhirnya akan mengendap di suatu lokasi. Seiring waktu, endapan
                ini terus bertambah dan menumpuk. Endapan yang semakin banyak
                tersebut kemudian mengalami pengerasan, sehingga membentuk
                batuan sedimen (Harris, 2021).
              </p>
            </li>
            <li>
              <h3 className="font-bold">
                Batuan Sedimen Berubah Menjadi Batuan Metamorf
              </h3>
              <p>
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
            <li>
              <h3 className="font-bold">
                Batuan Metamorf atau Malihan Berubah Kembali Menjadi Magma
              </h3>
              <p>
                Karena batuan memiliki siklus yang berputar seperti siklus air
                hujan, batuan metamorf atau malihan juga dapat kembali menjadi
                magma. Magma ini kemudian akan melalui proses selanjutnya, dan
                siklus tersebut terus berulang tanpa henti. (Harris, 2021).
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-5 pb-10 items-center flex justify-center flex-col">
          <Link
            href={"/jenis-batuan"}
            className="p-2 text-2xl bg-choco text-brule mt-5 rounded-lg"
          >
            Jenis-Jenis Batuan
          </Link>
        </div>
      </div>
    </div>
  );
}
