export default function TujuanPage() {
  return (
    <div className="h-full py-10 sm:px-6">
      <div className="p-4 bg-choco rounded-lg text-white">
        <h3 className="mb-4 text-xl font-bold text-center">
          Capaian Pembelajaran
        </h3>
        <div className="">
          <p className="text-wrap text-justify ">
            Di akhir fase E, peserta didik mampu memahami Konsep Dasar Ilmu
            Geografi, Peta / Penginderaan jauh / GIS, Penelitian Geografi, dan
            Fenomena Geosfer, mampu mencari/mengolah informasi tentang
            keberagaman wilayah secara fisik dan sosial, mampu menganalisa
            wilayah berdasarkan ilmu pengetahuan dasar geografi, karakter fisik
            dan sosial wilayah (lokasi, keunikan, distribusi, persamaan dan
            perbedaan, dan lain-lain).
          </p>
        </div>
      </div>

      <div className="mt-5 p-1 bg-choco rounded-lg text-white text-[14px] sm:text-base leading-relaxed">
        <h3 className="mb-4 text-xl font-bold text-center">
          Tujuan Pembelajaran
        </h3>
        <div>
          <ul className="list-decimal pl-5 space-y-2 text-justify">
            <li>
              <p>
                Memahami konsep siklus batuan (
                <span className="italic">Rock Cycle</span>)
              </p>
            </li>
            <li>
              <p>Mengidentifikasi jenis-jenis batuan</p>
            </li>
            <li>
              <p className="whitespace-nowrap text-wrap">
                Memahami proses pembentukan batuan beku (
                <span className="italic">Igneous Rock</span>)
              </p>
            </li>
            <li>
              <p className="">
                Memahami proses pembentukan batuan sedimen (
                <span className="italic">Sedimentary Rock</span>)
              </p>
            </li>
            <li>
              <p>
                Memahami proses pembentukan batuan metamorf (
                <span className="italic">Metamorphic Rock</span>)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
