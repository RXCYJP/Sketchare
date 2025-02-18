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

export function Phyllite() {
  const group = useRef<Group>(null);
  function handleClick() {
    Swal.fire({
      title: "Phyllite",
      text: "Phyllite adalah batuan di mana micas yang baru terbentuk lebih besar daripada mineral platy pada batu tulis, tetapi masih tidak dapat dilihat dengan mata telanjang. Hal ini membutuhkan peningkatan temperatur lebih lanjut dari yang dibutuhkan untuk membentuk batu tulis (Zikri, 2018). Mika yang berbutir sangat halus memberikan kilau satin pada batuan, yang mungkin sangat mirip dengan batu tulis. Tetapi belahan batu tulis dapat berkerut dalam proses konversi batu tulis menjadi filit.",
      icon: "info",
      showConfirmButton: true,
    });
  }

  const { scene } = useGLTF("/batu/phyllite.glb");
  return (
    <group
      ref={group}
      scale={15}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function Gneiss() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/archean_gneiss_montana.glb");
  function handleClick() {
    Swal.fire({
      title: "Gneiss",
      text: "Gneiss adalah batuan yang terdiri dari lapisan mineral terang dan gelap atau lensa. Suhu dan tekanan tertinggi telah berubah batuan sehingga mineral-mineral terpisah menjadi beberapa lapisan (Zikri, 2018). Mineral platy atau memanjang (seperti mika atau amfibol) dalam lapisan gelap bergantian dengan lapisan mineral berwarna terang yang tidak memiliki bentuk tertentu. Biasanya, feldspar kasar dan kuarsa lebih dominan di dalam lapisan berwarna terang. Dalam komposisi, sebuah gneiss dapat menyerupai granit atau diorit, tetapi dapat dibedakan dari batuan plutonik tersebut oleh foliasi (Mulyaningsih, 2018). Kondisi suhu di mana gneiss berkembang mendekati kondisi suhu di mana granit mengeras. Maka tidak mengherankan jika mineral yang sama ditemukan dalam gneiss dan granit (Zikri, 2018). Faktanya, granit yang sebelumnya dipadatkan dapat dikonversi menjadi gneiss di bawah kondisi tekanan dan suhu yang sesuai dan jika batuan berada di bawah tekanan diferensial (H Carlson et al., 2011).",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={1.5}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function Marmer() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/marble.glb");
  function handleClick() {
    Swal.fire({
      title: "Marmer",
      text: "Marmer adalah batuan berbutir kasar yang terdiri dari kristal kalsit yang saling mengunci, terbentuk ketika batu kapur mengalami rekristalisasi selama metamorfosis. Jika batuan induknya adalah dolomit, maka batuan yang direkristalisasi adalah marmer dolomit. Marmer telah lama dihargai sebagai bahan bangunan dan sebagai bahan untuk patung, sebagian karena mudah dipotong dan dipoles dan sebagian lagi karena marmer memantulkan cahaya dalam pola yang berkilauan, hasil dari pembelahan yang sangat baik dari masing-masing kristal kalsit. Namun, marmer sangat rentan terhadap pelapukan kimiawi (H Carlson et al., 2011)",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={0.2}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function Kuarsit() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/quartzite_rock.glb");
  function handleClick() {
    Swal.fire({
      title: "Kuarsit",
      icon: "info",
      text: "Kuarsit adalah batuan yang dihasilkan ketika butiran kuarsa dalam batu pasir dilas bersama saat batu tersebut terkena suhu tinggi. Hal ini membuatnya sulit untuk dipatahkan di sepanjang batas butir seperti halnya melalui butiran. Oleh karena itu, kuarsit, yang sekeras kristal kuarsa tunggal, sulit untuk dihancurkan atau dipatahkan. Kuarsit adalah batuan yang paling tahan lama yang umum digunakan untuk konstruksi, baik karena kekerasannya maupun karena kuarsa tidak rentan terhadap pelapukan kimiawi (H Carlson et al., 2011).",
      showConfirmButton: true,
    });
  }
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
export function Hornsfell() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/hornfels.glb");
  function handleClick() {
    Swal.fire({
      title: "Hornsfell",
      icon: "info",
      text: "Hornfels adalah batuan metamorfisme berbutir sangat halus, tidak terkelupas, yang batuan induknya adalah serpih atau basal. Jika terbentuk dari serpih, secara karakteristik hanya mikroskopis terlihat mikroskopis dari mineral lempung serpih. Beberapa mineral tumbuh cukup besar untuk dilihat dengan mata telanjang; ini adalah mineral yang secara khusus mampu mengkristal di bawah suhu tertentu yang dicapai selama metamorfisme. Jika serpih tanduk terbentuk dari basalt, amfibol, dan bukan mika, adalah mineral berbutir halus yang paling dominan yang dihasilkan (H Carlson et al., 2011).",
      showConfirmButton: true,
    });
  }
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
export function BatuTulis() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/slate.glb");
  function handleClick() {
    Swal.fire({
      title: "Batu Tulis",
      icon: "info",
      text: "Batu tulis (Slate) adalah batuan berbutir sangat halus yang mudah terbelah di sepanjang bidang datar dan sejajar. Meskipun beberapa batu tulis terbentuk dari abu vulkanik, batuan induk yang umum adalah serpih. Batu tulis berkembang di bawah suhu dan tekanan yang hanya sedikit lebih besar daripada yang ditemukan di alam sedimen (H Carlson et al., 2011).  Temperaturnya tidak cukup tinggi bagi batuan untuk mengkristal kembali secara menyeluruh. Faktor pengendali yang penting adalah tekanan diferensial. Mineral lempung asli sebagian direkristalisasi menjadi mineral lempung yang berbutir halus dan sama. Di bawah tekanan diferensial, mineral platy yang lama dan yang baru akan sejajar, menciptakan belahan batu tulis di dalam batuan. Batu tulis menunjukkan bahwa batuan yang relatif dingin dan rapuh telah mengalami aktivitas tektonik yang intens. Karena kemudahannya untuk dibelah menjadi lembaran tipis dan rata, batu tulis digunakan untuk membuat papan tulis, meja biliar, dan atap (Zikri, 2018).",
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
