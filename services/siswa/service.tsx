import instace from "@/lib/axios/isntace";
import { get } from "http";

const siswaService = {
  addSiswa: async (data: any) => {
    instace.post("/api/user", data).then((res) => console.log(res));
  },
  getAllSiswa: async () => {
    instace.get("/api/user");
  },
  getSiswaById: async (id: string) => {
    instace.get(`/api/user?id=${id}`);
  },
  updateSiswa: async (data: any, id: string) => {
    instace.put(`/api/user?id=${id}`, data, {}).then((res) => console.log(res));
  },
  deleteSiswa: async (id: string) => {
    instace.delete(`/api/user/${id}`, {}).then((res) => console.log(res));
  },
};

export default siswaService;
