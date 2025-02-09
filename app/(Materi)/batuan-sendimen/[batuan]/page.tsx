"use client";

import {
  Aragonite,
  Batubara,
  BatuPasir,
  BatuPasirKawrsa,
  Breksi,
  Dolomit,
  Kalsit,
  Karbonat,
  Magnesit,
} from "@/components/BatuanSedimen/model";
import LoaderModel from "@/components/modelLoader";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const models: Record<string, React.FC> = {
  breksi: Breksi,
  batubara: Batubara,
  batupasir: BatuPasir,
  batupasirkwarsa: BatuPasirKawrsa,
  karbonat: Karbonat,
  aragonite: Aragonite,
  calcite: Kalsit,
  dolomit: Dolomit,
  magnesit: Magnesit,
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
      </div>
    </div>
  );
}
