import { Center, useAnimations, useGLTF, useScroll } from "@react-three/drei";
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

export function Batubara() {
  const group = useRef<Group>(null);
  function handleClick() {
    Swal.fire({
      title: "Batubara",
      text: "Batubara merupakan sedimen organik, lebih tepatnya merupakan batuan organik, terdiri dari kandungan bermacam-macam pseudomineral. Batubara terbentuk dari sisa tumbuhan yang membusuk dan terkumpul dalam suatu daerah dengan kondisi banyak air (rawa-rawa). Kondisi tersebut yang menghambat penguraian menyeluruh dari sisa-sisa tumbuhan yang kemudian mengalami proses perubahan menjadi batubara. Batuan tersusun oleh material-material organik, Berwarna hitam, ukuran butir pasir ( 1/16 – 2 mm) (Zuhdi, 2019). Dalam penyusunannya batubara diperkaya dengan berbagai macam polimer organik yang berasal dari antara lain karbohidrat, lignin, protein, Resin, Tanin, Alkaloida, Porphirin dan Hidrokarbon. Namun komposisi dari polimer-polimer ini bervariasi tergantung pada spesies dari tumbuhan penyusunnya (Zuhdi, 2019).",
      icon: "info",
      showConfirmButton: true,
    });
  }

  const { scene } = useGLTF("/batu/coal.glb");
  return (
    <group
      ref={group}
      scale={10}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function Breksi() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/fault_breccia_spain.glb");
  function handleClick() {
    Swal.fire({
      title: "Breksi",
      text: "Breksi memiliki butiran-butiran fragmen yang bersifat kasar dan runcing yang terbentuk dari sementasi fragmen-fragmen kasar dengan ukuran 2 hingga 256 milimeter. Fragmen-fragmen ini bersifat runcing dan menyudut, yang menunjukkan bahwa fragmen tersebut tidak tertransportasi pada jarak yang jauh. Fragmen-fragmen dari breksi merupakan fragmen yang terkumpul pada bagian dasar lereng yang mengalami sedimentasi, selain itu fragmen juga berasal dari longsor yang mengalami litifikasi. Komposisi dari breksi terdiri dari sejenis atau campuran dari rijang, kuarsa, granit, kuarsit, batu gamping, dan lain-lain (Zuhdi, 2019).",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={5}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
export function BatuPasir() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/light_gray_quartz_sandstone.glb");
  function handleClick() {
    Swal.fire({
      title: "Batu Pasir",
      text: "Batu pasir atau sand-stone adalah batuan yang terbentuk dari sementasi butiran-butiran pasir yang terbawa o aliran sungai, angin, dan ombak yang terakumulasi pada suatu tempat. Ukuran butiran dari batu pasir adalah 1/16 hingga 2 milimeter. Komposisi batu pasir bervariasi, tersusun terutama dari kuarsa, feldspar atau pecahan dari batuan, misalnya basalt, riolit, sabak, klorit dan bijih besi. Batu pasir umumnya digolongkan menjadi tiga kriteria, yaitu batu pasir kwarsa, arkose, dan graywacke (Zuhdi, 2019).",
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
export function BatuPasirKawrsa() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/quartz.glb");
  function handleClick() {
    Swal.fire({
      title: "Batu Pasir Kawrsa",
      text: "Batu pasir kwarsa adalah batu pasir yang sekitar 90% butirannya tersusun dari kuarsa. Butiran kuarsa pada batu pasir memiliki pemilahan yang baik dan ukuran butiran yang bulat karena terangkut hingga jarak yang jauh. Sebagian besar jenis batu pasir ini ditemukan pada pantai dan gumuk pasir (Zuhdi, 2019).",
      icon: "info",
      showConfirmButton: true,
    });
  }
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
export function Karbonat() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/carbonate_rock_for_lab.glb");
  function handleClick() {
    Swal.fire({
      title: "Karbonat",
      text: "Karbonat adalah persenyawaan dengan ion (CO3), dan disebut karbonat. Mineral karbonat dapat terbentuk karena proses sedimentasi kimia dari larutan jenuh karbonat maupun biokimia yang dihasilkan oleh sekresi enzym karbonat dari organisme penghasil karbonat. Beberapa contoh mineral yang termasuk dalam kelompok karbonat adalah: aragonit (CaCO3), kalsit (CaCO3) dolomit (CaMg(CO3)2  dan magnesit (MgCO3) (H Carlson et al., 2011).",
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
export function Aragonite() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/mineral_aragonite.glb");
  function handleClick() {
    Swal.fire({
      title: "Aragonite",
      text: "Aragonit adalah mineral karbonat, salah satu dari dua bentuk kristal kalsium karbonat, CaCO3 yang paling umum terdapat di alam. Mineral ini terbentuk karena proses biologis dan fisika, termasuk presipitasi dari laut dan air tawar. Kisi kristal aragonit berbeda dari kalsit, menghasilkan bentuk kristal yang berbeda, yaitu sistem kristal ortorombik dengan kristal menjarum. Pengembaran berulang menunjukkan bentuk pseudo-heksagonal (Winarno & Marin, 2020).",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <Center>
      <group
        ref={group}
        scale={2}
        rotation={[-Math.PI / -1, 0, 0]}
        onClick={handleClick}
      >
        <primitive object={scene} orbitControls />;
      </group>
    </Center>
  );
}

export function Kalsit() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/calcite.glb");
  function handleClick() {
    Swal.fire({
      title: "kalsit",
      text: "Kalsit adalah sebuah mineral karbonat dan polimorf kalsium karbonat (CaCO3) paling stabil. Aragonit akan berubah menjadi kalsit pada suhu 380-470 °C. Kalsit sangat umum ditemukan di seluruh dunia baik di dalam batuan sedimen, batuan metamorf, maupun batuan beku. Beberapa ahli geologi menganggapnya sebagai ubiquitous mineral atau mineral yang dapat hadir di hampir semua jenis batuan (Winarno & Marin, 2020). Mineral kalsit merupakan mineral utama pembentuk batu kapur (batugamping) dan batu marmer. Kedua batuan tersebut sangat banyak ditemukan di permukaan bumi dan sebagai salah satu repositori karbon terbesar di planet kita. Sifat fisik dan kimia dari mineral kalsit menjadikannya sebagai salah satu mineral yang paling sering muncul. Sifat fisik kalsit antara lain, warna jernih atau putih, abu-abu, kuning, hijau, bentuk kristalin, granuler, stalaktitik, konkresioner, masif, rombohedral, sistem kristal trigonal, heksagonal, belahan tiga arah, pecahan konkoidal, sifat dalam rapuh. Kalsit (CaCO3) mengandung magnesium, kristal rombohedral kalsit mempunyai kalsium yang dapat diganti oleh magnesium yang mampu mempertahankan struktur yang sama. Ketika kalsium terlarut dalam air akan terbentuk polimorf dolomit.  Ion magnesium dan ion kalsium ini mempunyai ukuran yang sama. Maka, Kandungan kalsit yang tinggi ini menjadikan batu gamping berubah menjadi dolomit (Winarno & Marin, 2020).",
      icon: "info",
      showConfirmButton: true,
    });
  }
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
export function Dolomit() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/dolomite_mineral.glb");
  function handleClick() {
    Swal.fire({
      title: "Dolomit",
      text: "Dolomit adalah mineral karbonat anhidrat yang terbentuk dari kalsium magnesium karbonat CaMg(CO3). Dolomit merupakan mineral karbonat yang paling stabil, dibandingkan aragonit dan kalsit. Mineral dolomit mengkristal dalam sistem trigonalrombohedral. Dolomit membentuk kristal putih, cokelat, abu-abu, atau merah muda. Dolomit adalah karbonat ganda, memiliki susunan struktural kalsium dan magnesium yang berselang-seling. Dolomit mempunyai sifat yang tidak cepat larut atau berbuih seperti dalam asam klorida encer seperti kalsit. Bentuk kristal seperti tabung, dengan permukaan melengkung, berbentuk kolom, mirip stalaktit, granular, padat. Memiliki sistem kristal trigonal,belahan tiga arah rhombohedral, pecahan konkoidal, kekerasan 3,5-4 skala Mohs, kilap kaca, cerat putih (Winarno & Marin, 2020).",
      icon: "info",
      showConfirmButton: true,
    });
  }

  return (
    <Center>
      <group
        ref={group}
        scale={4}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleClick}
      >
        <primitive object={scene} orbitControls />;
      </group>
    </Center>
  );
}
export function Magnesit() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/batu/magnesite.glb");
  function handleClick() {
    Swal.fire({
      title: "Magnesit",
      text: "Magnesit adalah mineral dengan rumus kimia MgCO3 (magnesium karbonat). Besi, mangan, kobalt, dan nikel dapat terjadi sebagai campuran, tetapi hanya dalam jumlah kecil. Magnesit terjadi sebagai urat dan produk alterasi dari batuan ultramafik, serpentinit dan jenis batuan kaya magnesium lainnya pada metamorf regional. Magnesit berupa cryptocrystalline dan mengandung silika dalam bentuk opal atau rijang (Winarno & Marin, 2020)\n Sifat fisik magnesit tidak berwarna, putih, kuning pucat, coklat pucat, agak merah muda, ungu muda. Bentuk magnesit masif, jarang seperti rhombohedron atau prisma heksagonal. Belahan tiga arah sempurna, pecahan konkoidal, sifat dalam rapuh, kekerasan 3,5-4,5 skala Mohs, kilap kaca, cerat putih, transparansi transparan sampain translucent (Winarno & Marin, 2020).",
      icon: "info",
      showConfirmButton: true,
    });
  }
  return (
    <group
      ref={group}
      scale={0.13}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <primitive object={scene} orbitControls />;
    </group>
  );
}
