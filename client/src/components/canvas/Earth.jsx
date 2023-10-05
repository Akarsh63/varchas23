import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  const earth = useGLTF("./iitj/ct.glb");
  // const earth = useGLTF("./iitj/1.glb");

  return (
    // <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={1} rotation-x={1} rotation-z={1} />
    <primitive object={earth.scene} scale={0.5} position-y={-4.5}  position-x={-1}  rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
    // shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: false }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <directionalLight position={[10, 10, 5]} intensity={5} />
      <directionalLight position={[-10, -10, -5]} intensity={2} />
      {/* <pointLight intensity={1} /> */}
        <OrbitControls
          // autoRotate
          // autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
    <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
