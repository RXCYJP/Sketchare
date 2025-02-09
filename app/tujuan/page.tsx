export default function TujuanPage() {
  return (
    <div className="h-full bg-choco rounded-lg">
      <div className="mt-5 text-wrap text-white p-10">
        <h3 className="space-y-2 mb-4 text-xl font-bold text-white text-center">
          Capaian Pembelajaran
        </h3>
        <div>
          <p className="text-justify">
            Di akhir fase E, peserta didik mampu memahami Konsep Dasar Ilmu
            Geografi, Peta/Penginderaan jauh/GIS, Penelitian Geografi, dan
            Fenomena Geosfer, mampu mencari/mengolah informasi tentang
            keberagaman wilayah secara fisik dan sosial, mampu menganalisa
            wilayah berdasarkan ilmu pengetahuan dasar geografi, karakter fisik
            dan sosial wilayah (lokasi, keunikan, distribusi, persamaan dan
            perbedaan, dan lain-lain).
          </p>
        </div>
      </div>
      <div className="mt-5 text-wrap text-white p-10">
        <h3 className="mb-4 text-xl font-bold text-white text-center">
          Tujuan Pembelajaran
        </h3>
        <div>
          <ul className="list-decimal">
            <li>
              <p>
                Memahami konsep siklus batuan (
                <span className="italic">Rock Cycle</span>)
              </p>
            </li>
            <li>
              <p>Mengidentifikasi jenis-jenis batuan </p>
            </li>
            <li>
              <p>
                Memahami proses pembentukan batuan beku (
                <span className="italic">Igneous Rock</span>){" "}
              </p>
            </li>
            <li>
              <p>
                Memahami proses pembentukan batuan sedimen (
                <span className="italic">Sendimentary Rock</span>)
              </p>
            </li>
            <li>
              <p>
                Memahami proses pembentukan batuan metamor (
                <span className="italic">Metamorphic Rock</span>)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
