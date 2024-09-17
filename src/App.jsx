import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Bloom,EffectComposer, Noise } from '@react-three/postprocessing'
import { UI } from "./components/UI";

function App() {
  return (
    <>
    <UI/>
    <Loader  />

    <Canvas 
    shadows 
    camera={{ position: [0, 0, 13], fov: 40 }}
    onCreated={({ gl }) => {
      gl.toneMappingExposure = 0.05;

    }}
    >
      <color attach="background" args={["#232323"]} />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
        <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.7} height={300} />
            <Noise opacity={0.02} />
          </EffectComposer>
    </Canvas>
    </>
  );
}

export default App;
