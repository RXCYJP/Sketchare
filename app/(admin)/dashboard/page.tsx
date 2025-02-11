"use client";
import Accordion from "@/components/accordion";
import Button from "@/components/button";
import Input from "@/components/input";
import Loader from "@/components/loader";
import { deleteData, retrieveData } from "@/lib/firebase/service";
import siswaService from "@/services/siswa/service";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { TbEdit, TbTrash, TbTrashOff } from "react-icons/tb";
import Swal from "sweetalert2";

export default function DashboardPage() {
  const { data: session, status }: any = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteData("user", id, (res: any) => {
          if (res) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          } else {
            Swal.fire("Failed!", "Your file has not been deleted.", "error");
          }
        });
      }
    });
  };
  console.log({ data: status });
  const onSubmit = (event: any) => {
    event.preventDefault();

    const form: any = event.target as HTMLFormElement;
    let data = {
      name: form.name.value,
      kelas: form.kelas.value,
      role: "siswa",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      if (data.name === "" || data.kelas === "") {
        Swal.fire({
          icon: "error",
          title: "Harap isi data",
        });
        return null;
      } else {
        siswaService.addSiswa(data);
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Berhasil Menambahkan",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Gagal Menambahkan",
      });
    }
  };

  useMemo(() => {
    const getData = async () => {
      try {
        const data: any = await retrieveData("user");
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader></Loader>
      </div>
    );
  }
  if (status === "authenticated") {
    return (
      <div className=" flex flex-col">
        <div>
          <h1 className="font-bold text-2xl text-choco">
            Hallo <span>{session?.user?.username || session?.user?.name}</span>
          </h1>
        </div>
        <div className="gap-6">
          <Accordion title="Tambahkan Siswa">
            <form action="" className="flex flex-col " onSubmit={onSubmit}>
              <div className="flex flex-col gap-8 px-4">
                <Input label="Nama" name="name" type="text" />
                <Input label="kelas" name="kelas" type="text" />
                <div className="flex justify-end pt-7">
                  <Button
                    type="submit"
                    className="bg-choco px-2 py-1 text-white rounded-lg"
                  >
                    Tambah
                  </Button>
                </div>
              </div>
            </form>
          </Accordion>

          <div className="flex justify-items-center mt-6">
            <table className="table-auto w-full border">
              <thead className="bg-choco text-white">
                <tr className="capitalize">
                  <th>No</th>
                  <th>Nama</th>
                  <th>kelas</th>
                  <th>role</th>
                  <th>nilai</th>
                  <th>aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: number) => {
                  return (
                    <tr className="text-center border border-choco" key={index}>
                      <td>{index + 1}</td>
                      <td>{item.username || item.name}</td>
                      <td>{item.kelas}</td>
                      <td>{item.role}</td>
                      <td>{item?.scores?.score}</td>
                      <td className="text-center gap-4 justify-items-center">
                        <div className="flex items-center gap-2 text-center">
                          <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            className="text-white px-5 bg-red-400 hover:bg-red-700 text-center rounded-md "
                          >
                            <TbTrash />
                          </button>
                          <button
                            type="button"
                            className="text-white px-5 bg-cyan-400 hover:bg-cyan-700 text-center rounded-md"
                          >
                            <TbEdit />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
