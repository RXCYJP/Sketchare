"use client";
import { retrieveData } from "@/lib/firebase/service";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";

interface Student {
  id: string;
  nama: string;
  kelas: string;
  nilai: string;
}

export default function KelasPage() {
  const { kelas } = useParams(); // Ambil parameter kelas dari URL
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!kelas) return;

    const getData = async () => {
      try {
        const rawData = await retrieveData("user");
        // Filter data berdasarkan kelas
        const data: Student[] = rawData
          .map((item: any) => ({
            id: item.id ?? "",
            nama: item.name ?? "Unknown",
            kelas: item.kelas ?? "Unknown",
            nilai: item.scores?.score ?? "0",
          }))
          .filter((student) => student.kelas === kelas);

        setStudents(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [kelas]);

  // ✅ Ekspor PDF dengan `autoTable`
  const handlePrintPDF = () => {
    const input = document.getElementById("print-section"); // Ambil elemen tabel
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190; // Lebar gambar dalam mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Sesuaikan proporsi

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Daftar_Siswa_Kelas_${kelas}.pdf`);
    });
  };

  // ✅ Ekspor Excel dengan header rapi & auto-width
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const header = [
      ["Daftar Siswa Kelas " + kelas],
      ["Nama", "Kelas", "Nilai"],
    ];
    const dataArray = students.map((s) => [s.nama, s.kelas, s.nilai ?? "-"]);

    const ws = XLSX.utils.aoa_to_sheet([...header, ...dataArray]);

    // Atur merge & auto-width
    ws["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];
    ws["!cols"] = [{ wch: 20 }, { wch: 10 }, { wch: 10 }];

    XLSX.utils.book_append_sheet(wb, ws, "Siswa");
    saveAs(
      new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })]),
      `Daftar_Siswa_Kelas_${kelas}.xlsx`
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="p-4">
      {/* 🔹 Tombol Ekspor */}
      <div className="flex gap-3 justify-center mb-4">
        <button
          onClick={exportToExcel}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          📊 Export Excel
        </button>
        <button
          onClick={handlePrintPDF}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          📄 Export PDF
        </button>
      </div>
      {/* 🔹 Tabel Siswa */}
      <div id="print-section" className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-choco">
          Daftar Siswa Kelas {kelas}
        </h1>

        <div className="overflow-x-auto">
          <table className="border-collapse border w-full text-center">
            <thead>
              <tr className="bg-choco border text-brule">
                <th className="p-2">No.</th>
                <th className="p-2">Nama</th>
                <th className="p-2">Kelas</th>
                <th className="p-2">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((s, i) => (
                  <tr key={s.id} className="border">
                    <td className="p-2">{i + 1}.</td>
                    <td className="p-2">{s.nama}</td>
                    <td className="p-2">{s.kelas}</td>
                    <td className="p-2">{s.nilai ?? "Belum ada nilai"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-2">
                    Tidak ada siswa di kelas ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
