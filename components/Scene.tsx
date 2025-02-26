"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calcarenite, Marble } from "./Model";
import { OrbitControls } from "@react-three/drei";
import Button from "./button";
import Swal from "sweetalert2";

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

export default function Scene() {
  return (
    <div className="w-full h-full p-10 flex flex-wrap gap-5 ">
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        className="border border-solid border-red-600 p-10"
      >
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Marble />
          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        className="border border-solid border-red-600"
      >
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Calcarenite />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
