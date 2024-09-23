import { OrbitControls } from "@react-three/drei";
import { AnuraModel } from "../models/Anuraavatar";
import { SajithModel } from "../models/sajith";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei"; // Import the Text component for banner text


export const Experience = ({ model }) => {
  const bannerRef = useRef();
  const meshRef = useRef();

  // Optional: Animate the banner (e.g., for some interaction)
  useFrame(() => {
    // if (bannerRef.current) {
    //   bannerRef.current.rotation.y += 0.01; // Rotates banner slowly on Y axis
    // }
  });

  return (
    <>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}   target={meshRef.current?.position}/>
      <mesh>
        {/* <boxGeometry />
        <meshNormalMaterial /> */}
        <group ref={meshRef} position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
          {/* Display the passed model */}
          {model === "anura" && <AnuraModel position={[0, 0, -1]} />}
          {model === "another" && <SajithModel position={[0, 0, -1]}/>}
          <ambientLight intensity={5} />
        </group>
      </mesh>

      {/* Banner (2D plane with text) */}
      <mesh ref={bannerRef} position={[0, 1, -2]}>
        <planeGeometry args={[4, 1]} /> {/* Banner size (width, height) */}
        <meshStandardMaterial color={"#f0f0f0"} /> {/* Banner color */}
        {/* Text on the banner */}
        <Text
          position={[0, 0, 0.1]} // Slightly in front of the banner to avoid clipping
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Fit On
        </Text>
      </mesh>
    </>
  );
};
