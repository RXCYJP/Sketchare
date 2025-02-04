"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import Swal from "sweetalert2";
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
} from "./model";
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

export default function SceneBatuanSedimen() {
  return (
    <div className="w-full h-full p-10 flex flex-wrap gap-5 flex-col justify-center">
      <h1 className="text-center text-choco text-xl">Breksi</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className=" p-10">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Breksi />
          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
      <h1 className="text-center text-choco text-xl">Batubara</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Batubara />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <h1 className="text-center text-choco text-xl">Batu Pasir</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <BatuPasir />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <h1 className="text-center text-choco text-xl">Batu Pasir Kwarsa</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, 5, 5]} intensity={1} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <BatuPasirKawrsa />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <h1 className="text-center text-choco text-xl">Karbonat</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, 5, 5]} intensity={4} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Karbonat />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <h1 className="text-center text-choco text-xl">Aragonite</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Aragonite />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <h1 className="text-center text-choco text-xl">Calcite</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={1} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Kalsit />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <h1 className="text-center text-choco text-xl">Dolomit</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Dolomit />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>

      <h1 className="text-center text-choco text-xl">Magnesit</h1>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[-5, -5, 5]} intensity={1} />
        <Suspense fallback={<LoaderModel />}>
          <OrbitControls />
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <Magnesit />

          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
