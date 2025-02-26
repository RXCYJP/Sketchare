"use client";
import { Html, useProgress } from "@react-three/drei";

export default function LoaderModel() {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="w-10 h-10 border-4 border-t-choco border-gray-300 rounded-full animate-spin"></div>
    </Html>
  );
}
