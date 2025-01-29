"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { OrbitControls } from "@react-three/drei";

import Swal from "sweetalert2";
import { Calcarenite, Marble } from "../Model";
import { Gneiss, Marmer, Phyllite } from "./model";

// function Loader() {
//   const { progress, active } = useProgress();

//   return <Html center>{progress.toFixed(1)} % loaded</Html>;
// }

function Modals() {
  Swal.fire({
    title: "Selamat Datang",
    text: "Selamat Datang di Fiber Awesome Mix",
    icon: "info",
    showConfirmButton: true,
  });
}

export default function SceneBatuanMetamorf() {
  return (
    <div className="w-full h-full p-10 flex flex-wrap gap-5 flex-col justify-center">
      <h1 className="text-center text-choco text-xl">Phyllite</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className=" p-10">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Phyllite />
          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
      <h1 className="text-center text-choco text-xl">Gneiss</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Gneiss />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
      <h1 className="text-center text-choco text-xl">Marmer</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Marmer />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
