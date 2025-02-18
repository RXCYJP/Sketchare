"use client";
import {
  BatuTulis,
  Gneiss,
  Hornsfell,
  Kuarsit,
  Marmer,
  Phyllite,
} from "@/components/BatuanMetamorf3d/model";
import {
  Andesit,
  Basalt,
  Diorite,
  Gabbro,
  Granit,
  Rhyolite,
} from "@/components/BatuBeku3d/model";
import LoaderModel from "@/components/modelLoader";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const models: Record<string, React.FC> = {
  phyllite: Phyllite,
  gneiss: Gneiss,
  marmer: Marmer,
  hornsfell: Hornsfell,
  kuarsit: Kuarsit,
  batutulis: BatuTulis,
};
const Source: any = {
  phyllite:
    "Phyllite sumber ( https://skfb.ly/6QXAT ) (Edurock-Educational Virtual Rock Collection, 2019)",
  gneiss: "Gneiss sumber ( https://skfb.ly/M7MF ) (Callanbentley, 2016)",
  marmer:
    "Marmer sumber ( https://skfb.ly/ptIZY ) (Department Of Geology, University Of Ljubljana, 2023)",
  kuarsit: "Kuarsit sumber ( https://skfb.ly/ptIzw ) ( Octoraanayaa, 2025)",
  hornsfell: "Hornfels sumber ( https://skfb.ly/ptJnp ) ( Jens Andersen, 2020)",
  batutulis: "Batu Tulis sumber ( https://skfb.ly/6SEoK ) (Sara Carena, 2020)",
};

export default function BatuanPage() {
  const { batuan } = useParams<{ batuan: string }>();
  if (!batuan) {
    return (
      <h1 className="text-center text-red-500 text-xl">URL tidak valid</h1>
    );
  }

  const ModelComponent = models[batuan.toLowerCase()];

  if (!ModelComponent) {
    return (
      <h1 className="text-center text-red-500 text-xl">
        Batuan tidak ditemukan
      </h1>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className="text-choco text-2xl mb-4">{batuan.toUpperCase()}</h1>
      <div className=" border border-red-600">
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className=" h-1/2 ">
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            <ModelComponent />
          </Suspense>
        </Canvas>
      </div>
      <p className="italic text-sm">{Source[batuan.toLowerCase()]}</p>
    </div>
  );
}
