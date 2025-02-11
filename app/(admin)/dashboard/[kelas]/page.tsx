import { retrieveData } from "@/lib/firebase/service";
import { useMemo, useState } from "react";

export default function KelasPage() {
  const [data, setData] = useState([]);

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
  console.log(data);
  return (
    <div>
      <div>
        <h1>Siswa</h1>
      </div>
    </div>
  );
}
