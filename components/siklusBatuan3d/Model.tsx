import {
  Bounds,
  Center,
  useAnimations,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb");

export function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  // useEffect(() => {
  //   console.log(actions)
  //   //@ts-ignore
  //   actions["Experiment"].play().paused = true
  // }, [])
  // useFrame(
  //   () =>
  //     //@ts-ignore
  //     (actions["Experiment"].time =
  //       //@ts-ignore
  //       (actions["Experiment"].getClip().duration * scroll.offset) / 4)
  // )
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export function RockCycle() {
  const group = useRef<Group>(null);
  function handleClick() {
    Swal.fire({
      title: "Selamat Datang",
      text: "Selamat Datang di Fiber Awesome Mix",
      icon: "info",
      showConfirmButton: true,
    });
  }

  const { scene } = useGLTF("/materi/rock_cycle.glb");
  return (
    <Center scale={1}>
      <group
        ref={group}
        scale={[15, 15, 15]}
        rotation={[-Math.PI / 0.5, 0, 0]}
        onClick={handleClick}
      >
        <primitive object={scene} orbitControls />;
      </group>
    </Center>
  );
}
