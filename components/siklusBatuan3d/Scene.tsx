"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Swal from "sweetalert2";
import { RockCycle } from "./Model";
import Loader from "../loader";

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

export default function RockCycleScene() {
  return (
    <div className="w-full h-full p-10 flex flex-wrap gap-5 ">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="">
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <Suspense fallback={null}>
          {/* <ScrollControls damping={0.5} pages={3}>   */}
          {/* <Model /> */}
          <RockCycle />
          <OrbitControls target={[0, 0, 0]} />
          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
