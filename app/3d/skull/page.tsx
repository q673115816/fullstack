"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Grid, TransformControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Page = () => {
  const geometry = useLoader(STLLoader, "/assets/tyrannosaurus_Rex_skull.stl");
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#aaccee" />
        </mesh>
        <Grid scale={10} />
        <TransformControls mode="translate">
          <mesh
            geometry={geometry}
            scale={0.01}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
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
        {/* <Text
          position={[0, 0, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={1}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          恐龙
        </Text> */}

        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#f5f5dc" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Page;
