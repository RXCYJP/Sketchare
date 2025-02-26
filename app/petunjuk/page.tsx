export default function TujuanPage() {
  return (
    <div className="h-full py-10">
      <div className="text-center">
        <h1 className=" font-bold text-choco">
          Petunjuk Penggunaan Media Pembelajaran SKETCHARE
        </h1>
      </div>
      <div>
        <ul className="list-decimal flex flex-col gap-5 py-4 mb-4">
          {/* 1 */}
          <li>
            <h1 className="font-bold">
              Login ke Akun <span className="italic">(Menu Login)</span>
            </h1>
            <ul className="list-disc px-3">
              <li>Masukan username dan password</li>
              <li>
                Masukkan kata sandi yang berisi keterangan kelas pada kolom
                <span className="italic"> Password, </span>
                lalu tekan tombol <span className="italic"> Login</span>
              </li>
              <li>
                contoh: <br /> Username: SRI WAHYUNI <br />
                Password: XA
              </li>
            </ul>
          </li>
          {/* 2 */}
          <li>
            <h1 className="font-bold">
              Tampilan <span className="italic">Home</span> Selamat Datang{" "}
              <span className="italic">(Home Menu)</span>
            </h1>
            <ul className="list-disc px-3">
              <li>
                <p>
                  Setelah berhasil login, pengguna akan disambut dengan tampilan
                  selamat datang yang memberikan gambaran awal tentang media
                  pembelajaran ini
                </p>
              </li>
            </ul>
          </li>
          {/* 3 */}
          <li>
            <h1 className="font-bold">
              Petunjuk Penggunaan <span className="italic">Tampilan</span>
            </h1>
            <ul className="list-disc px-3">
              <li>
                Pengguna akan diarahkan ke halaman{" "}
                <span className="font-black">Petunjuk Penggunaan</span>yang
                menjelaskan langkah-langkah dan pemanfaatan fitur yang ada di
                media pembelajaran.
              </li>
            </ul>
          </li>
          {/* 4 */}
          <li>
            <h1 className="font-bold">Tujuan Pembelajaran</h1>
            <ul className="list-disc px-3">
              <li>
                <p>
                  Selanjutnya, pengguna akan melihat{" "}
                  <span>Tujuan Pembejalaran</span> yang mencantumkan capaian
                  belajar yang diharapkan dari penggunaan media{" "}
                  <span className="italic"> SKETCHARE</span>, khususnya pada
                  materi Litosfer.
                </p>
              </li>
            </ul>
          </li>
          {/* 5 */}
          <li>
            <h1 className="font-bold">Akses Materi Pembelajaran</h1>
            <p>Pengguna dapat mengakses materi pembelajaran dengan:</p>
            <ul className="list-disc px-3">
              <li>menekan tumbol Mulai Belajar yang ada di halaman Utama</li>
              <li>atau, klik bagian Materi di menu navigasi</li>
            </ul>
          </li>
          {/* 6 */}
          <li>
            <h1 className="font-bold">
              Mempelajari Siklus Batuan dan Jenis-Jenis Batuan
            </h1>
            <p>
              Pada halaman materi, pengguna diarahkan untuk memilih materi
              Siklus Batuan dan Jenis-Jenis Batuan, yaitu:
            </p>
            <ul className="font-bold list-disc px-3">
              <li>Batuan Beku</li>
              <li>Batuan Sedimen</li>
              <li>Batuan Metamorf</li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold">Eksplorasi Materi Batuan</h1>
            <p>
              Pengguna mempelajari penjelasan setiap jenis batuan, termasuk{" "}
              <span className="font-bold">pengertian</span> dan{" "}
              <span className="font-bold">kegunaannya</span>, yang disajikan
              dalam bentuk teks dan objek 3D berbasis{" "}
              <span className="italic">Augmented Reality</span>. gunakan
              perangkat yang mendukung untuk pengalaman interkatif AR.
            </p>
          </li>
          <li>
            <h1 className="font-bold">
              Mengerjakan <span className="italic">Quiz</span>
            </h1>
            <p>
              Setelah mempelajari materi, pengguna dapat menguji pemahaman
              dengan mengerjkan <span className="italic">Quiz</span>
            </p>
            <ul className="list-disc px-3">
              <li>
                <span>Quiz</span> terdiri dari 20 butir soal pilihan ganda yang
                harus diselesaikan dalam waktu maksimal 30 menit.
              </li>
              <li>
                Setelah menyelesaikan <span className="italic">Quiz</span>,
                pengguna dapat melihat hasil skor untuk evaluasi pembelajaran.
              </li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold">Mengakhiri Sesi</h1>
            <p>
              Setelah menyelesaikan pembeljaran dan{" "}
              <span className="italic">Quiz</span>, pengguna dapat menekan
              tombol <span className="italic">Log out</span> untuk keluar dari
              akun dan mengakhiri sesi pembelajaran
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
