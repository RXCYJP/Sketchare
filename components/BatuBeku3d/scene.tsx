"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { OrbitControls } from "@react-three/drei";

import Swal from "sweetalert2";
import { Calcarenite, Marble } from "../Model";
import { Andesit, Basalt, Diorite, Gabbro, Granit, Rhyolite } from "./model";
import LoaderModel from "../modelLoader";

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

export default function SceneBatuanBeku() {
  return (
    <div className="w-full h-full py-10 flex flex-col flex-wrap gap-5 justify-center">
      <div>
        <h1 className="text-center text-choco text-xl">Granit</h1>
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="w-[400px]">
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            {/* <ScrollControls damping={0.5} pages={3}>   */}
            {/* <Model /> */}
            <Granit />
            {/* </ScrollControls> */}
          </Suspense>
        </Canvas>
      </div>
      <div>
        <h1 className="text-center text-choco text-xl italic">Rhyolite</h1>
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            {/* <ScrollControls damping={0.5} pages={3}>   */}
            {/* <Model /> */}
            <Rhyolite />

            {/* </ScrollControls> */}
          </Suspense>
        </Canvas>
      </div>
      <div>
        <h1 className="text-center text-choco text-xl italic">Diorite</h1>
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            {/* <ScrollControls damping={0.5} pages={3}>   */}
            {/* <Model /> */}
            <Diorite />

            {/* </ScrollControls> */}
          </Suspense>
        </Canvas>
      </div>

      <div>
        <h1 className="text-center text-choco text-xl italic">Andesit</h1>
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            {/* <ScrollControls damping={0.5} pages={3}>   */}
            {/* <Model /> */}
            <Andesit />

            {/* </ScrollControls> */}
          </Suspense>
        </Canvas>
      </div>
      <div>
        <h1 className="text-center text-choco text-xl italic">Gabbro</h1>
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            {/* <ScrollControls damping={0.5} pages={3}>   */}
            {/* <Model /> */}
            <Gabbro />

            {/* </ScrollControls> */}
          </Suspense>
        </Canvas>
      </div>

      <div>
        <h1 className="text-center text-choco text-xl italic">Basalt</h1>
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<LoaderModel />}>
            <OrbitControls />
            {/* <ScrollControls damping={0.5} pages={3}>   */}
            {/* <Model /> */}
            <Basalt />

            {/* </ScrollControls> */}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
