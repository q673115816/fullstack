"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const page = () => {
  const geometry = [
    "Piano_case.stl",
    "Piano_leg.stl",
    "Piano_lid_prop.stl",
    "Piano_lid.stl",
    "Piano_pedals.stl",
    "Piano_stool_leg.stl",
    "Piano_stool_seat.stl",
  ].map((path) =>
    useLoader(STLLoader, `/assets/Grand_Piano_and_Stool/${path}`)
  );
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group>
        {geometry.map((item, index) => (
          <TransformControls key={index} mode="translate">
            <mesh
              scale={0.1}
              geometry={item}
              position={[index * 2, 0, 0]}
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
        ))}
      </group>
      <OrbitControls />
    </Canvas>
  );
};

export default page;
