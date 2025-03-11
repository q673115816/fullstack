"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, TransformControls, Text } from "@react-three/drei";
import { useState } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { BufferGeometry, NormalBufferAttributes } from "three";
import { useMount } from "react-use";

const Skull = ({ setIsDragging }: { isDragging: boolean; setIsDragging: (value: boolean) => void }) => {
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
    <group>
      <TransformControls
        mode="translate"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
      >
        <mesh
          geometry={geometry}
          scale={0.01}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#f5f5dc"
            roughness={0.8}
            metalness={0.2}
            emissive="#f5f5dc"
            emissiveIntensity={0.1}
          />
        </mesh>
      </TransformControls>
      <Text
        position={[0, 0, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={1}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        恐龙
      </Text>
    </group>
  );
};

const Page = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} />
        <Grid />
        <Skull isDragging={isDragging} setIsDragging={setIsDragging} />
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#f5f5dc" />
        </mesh>
        <OrbitControls enabled={!isDragging} />
      </Canvas>
    </div>
  );
};

export default Page;
