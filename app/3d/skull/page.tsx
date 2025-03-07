"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { BufferGeometry, NormalBufferAttributes } from "three";
import { useMount } from "react-use";
const Page = () => {
  const [geometry, setGeometry] =
    useState<BufferGeometry<NormalBufferAttributes>>();

  useMount(() => {
    const loader = new STLLoader();
    loader.load(
      "/assets/tyrannosaurus_Rex_skull.stl",
      (geometry) => {
        console.log(geometry);
        setGeometry(geometry);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error occurred:", error);
      }
    );
  });
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} />
        <mesh 
          geometry={geometry}
          scale={50}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial 
            color="gray" 
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Page;
