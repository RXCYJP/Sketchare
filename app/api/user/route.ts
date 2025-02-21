import {
  addData,
  retrieveData,
  retrieveDataById,
  updateData,
  updateSiswa,
} from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const res = await addData("user", data, () => {});

    return NextResponse.json({ message: "succes", data: res });
    //response
  } catch {
    console.log("error");
    return NextResponse.json({ message: "error" });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(req.url);
  // console.log(id);
  if (id) {
    try {
      // Ambil data berdasarkan ID
      const detailUser = await retrieveDataById("user", id);

      if (!detailUser) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "success", data: detailUser },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error retrieving data by ID:", error);
      return NextResponse.json({ message: "error" }, { status: 500 });
    }
  } else {
    try {
      // Ambil semua data
      const data = await retrieveData("user");
      return NextResponse.json(
        { message: "success", data: { data } },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error retrieving all data:", error);
      return NextResponse.json({ message: "error" }, { status: 500 });
    }
  }
}

export async function PUT(req: NextRequest) {
  const user: any = req.nextUrl.searchParams.get("id");
  const data: any = req.body;
  await updateSiswa("user", data, user).then((res) => console.log(res));
}

export async function PATCH(req: NextRequest) {
  const user: any = req.nextUrl.searchParams.get("id");
  const data: any = req.body;
  await updateSiswa("user", data, user).then((res) => console.log(res));
}
