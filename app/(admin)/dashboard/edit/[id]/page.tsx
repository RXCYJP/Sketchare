"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import { retrieveDataById, updateData } from "@/lib/firebase/service";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import Swal from "sweetalert2";

export default function EditPage() {
  const searchParams: any = useParams();
  const userId = searchParams.id;
  const router = useRouter();
  console.log(userId);
  const [data, setData] = useState<any>({ name: "", kelas: "", scores: "" });

  useMemo(() => {
    if (userId) {
      retrieveDataById("user", userId).then((res) => {
        if (res) {
          setData(res); // Simpan data ke state
        }
      });
    }
  }, [userId]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form: any = e.target as HTMLFormElement;
    let data = {
      name: form.name.value,
      kelas: form.kelas.value,
      role: form.role?.value || "siswa",
      scores: { score: Number(form.scores.value) || 0 }, // Pastikan angka
      updatedAt: new Date().toISOString(),
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateData("user", userId, data, (res: any) => {
          if (res) {
            Swal.fire("Updated!", "Your file has been updated.", "success");
          } else {
            Swal.fire("Failed!", "Your file has not been updated.", "error");
          }
          router.push("/dashboard");
        });
      }
    });
    console.log(data);
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="text-center text-2xl font-bold text-choco uppercase">
            Edit Data Siswa <span className="">{data.name}</span>
          </h1>
        </div>
        <div>
          <form
            action=""
            className="flex flex-col gap-8"
            onSubmit={handleUpdate}
          >
            <Input
              name="name"
              type="text"
              defaultValue={data.name}
              label="Nama :"
            />
            <Input
              name="kelas"
              type="text"
              defaultValue={data.kelas}
              label="Kelas :"
            />
            <Input
              name="scores"
              type="text"
              defaultValue={data.scores?.score}
              label="Nilai :"
            />
            <Select
              name="role"
              label="Role :"
              options={[
                { value: "siswa", label: "Siswa" },
                { value: "admin", label: "Admin" },
              ]}
              defaultValue={data.role}
            />
            <div className="flex flex-wrap gap-4 mt-5">
              <Button
                type="submit"
                className="bg-choco text-brule p-2 w-1/6 rounded-md"
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
