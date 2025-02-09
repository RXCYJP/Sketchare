import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
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

export function Granit() {
  const group = useRef<Group>(null);
  function handleClick() {
    Swal.fire({
      title: "Granit",
      text: "Granit adalah jenis batuan beku berwarna cerah dengan tekstur kasar. Batu ini terbentuk dari mineral kuarsa dan feldspar, dengan sedikit kandungan mika dan amfibol. Granit bersifat asam dan memiliki butiran kristal yang ukurannya hampir sama. Teksturnya disebut phaneritik, yang berarti permukaannya halus tanpa retakan atau lubang akibat pelepasan gas (Fadilah & Subekti, 2023).",
      icon: "info",
      showConfirmButton: true,
    });
  }

  const { scene } = useGLTF("/batu/granit_rock_wall.glb");
  return (
    <group
      ref={group}
      scale={3}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function Rhyolite() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/rhyolite_a_fiammes.glb");
  function handleClick() {
    Swal.fire({
      title: "Rhyolite",
      text: "Rhyolite adalah batuan berwarna krem, cokelat, atau merah muda. Warna cerah ini menunjukkan bahwa batuan ini hanya mengandung sedikit mineral ferro-magnesium atau mineral ferro-magnesium tidak melimpah. Teksturnya halus dengan butiran kecil.",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={3}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function Basalt() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/basalt_usa.glb");
  function handleClick() {
    Swal.fire({
      title: "Basalt",
      text: "Batu basalt adalah batuan dengan kristal-kristal sangat kecil, berwarna hijau keabu-abuan, dan memiliki banyak lubang kecil. Batu ini terbentuk dari lava yang mendingin setelah gas-gasnya menguap. Basalt sering digunakan sebagai bahan baku untuk industri poles, material bangunan, pondasi gedung atau jalan, dan berbagai keperluan lainnya.",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={80}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}

export function Diorite() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/hornblende_diorite_italy.glb");
  function handleClick() {
    Swal.fire({
      title: "Diorite",
      text: "Diorite adalah jenis batuan berwarna abu-abu bercampur putih atau hitam bercampur putih. Batu ini terbentuk dari proses peleburan lantai samudra. Diorit sering digunakan sebagai hiasan dinding atau lantai pada bangunan, dan juga bisa dimanfaatkan sebagai bahan konstruksi.",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={0.5}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}

export function Andesit() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/piece_of_andesite.glb");
  function handleClick() {
    Swal.fire({
      title: "Andesit",
      text: "Andesit adalah jenis batuan yang sering dikaitkan dengan gunung berapi berlapis atau komposit. Jika lava sangat panas dan cukup cair, lava tersebut akan mengalir dengan mudah dari kawah ke lereng gunung. Namun, jika tekanan gas di dalam gunung berapi cukup besar, letusan bisa menyebarkan material andesit berupa serpihan piroklastik ke lereng. Hal ini biasanya terjadi jika lava sudah mengeras sebagian atau sepenuhnya sehingga menyumbat lubang gunung berapi. Andesit memiliki tekstur halus dengan butiran kecil.",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={3}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}

export function Gabbro() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/gabro.glb");
  function handleClick() {
    Swal.fire({
      title: "Gabbro",
      text: "Gabbro adalah jenis batuan berwarna hitam, hijau, atau abu-abu gelap yang padat tanpa rongga, lubang udara, atau retakan. Mineralnya terlihat jelas, dan ukurannya yang besar menunjukkan bahwa batu ini terbentuk dari magma yang membeku perlahan di dalam gunung. Batu gabro sering digunakan sebagai bahan pelapis dinding.",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={4}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
