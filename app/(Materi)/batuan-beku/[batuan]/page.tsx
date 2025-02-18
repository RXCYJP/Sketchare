"use client";
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
  granit: Granit,
  rhyolite: Rhyolite,
  diorite: Diorite,
  andesit: Andesit,
  gabbro: Gabbro,
  basalt: Basalt,
};

const Source: any = {
  granit: "Sumber: (Bilgehan Korkmaz, 2015)",
  diorite: "Sumber: (Uni Freiburg, 2016)",
  gabbro: "Sumber: (Tapio Soukka, 2020)",
  rhyolite: "Sumber: (Ecole Nationale Superleure de Geologle, 2022)",
  andesit: "Sumber: (Panomrung, 2022)",
  basalt: "Sumber:  (Sara Carena, 2020)",
};

export default function Page() {
  const params = useParams();
  const batuan = params?.batuan as string; // Pastikan tidak undefined

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
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-choco text-2xl mb-4">{batuan.toUpperCase()}</h1>
      <div className="border border-red-600 w-[400px] h-[400px]">
        <Canvas
          gl={{ antialias: true }}
          dpr={[1, 1.5]}
          className="w-full h-full"
        >
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            <ModelComponent />
          </Suspense>
        </Canvas>
        <p className="italic text-sm">{Source[batuan.toLowerCase()]}</p>
      </div>
    </div>
  );
}
