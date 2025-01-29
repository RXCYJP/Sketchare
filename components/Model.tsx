import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
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

export function Marble() {
  const group = useRef<Group>(null);
  function handleClick() {
    Swal.fire({
      title: "Selamat Datang",
      text: "Selamat Datang di Fiber Awesome Mix",
      icon: "info",
      showConfirmButton: true,
    });
  }

  const { scene } = useGLTF("/batu/marble.glb");
  return (
    <group
      ref={group}
      scale={0.1}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function Calcarenite() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/altered_calcarenite_spain.glb");
  return (
    <group ref={group} scale={0.5} rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={scene} orbitControls />;
    </group>
  );
}
