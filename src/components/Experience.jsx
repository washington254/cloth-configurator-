import { Environment, Loader, OrbitControls, PivotControls } from "@react-three/drei";
import { Hoodie } from "./Hoodie";
import { Showroom } from "./Showroom";
import { Hoodie2 } from "./Hoodie2";

export const Experience = () => {
  return (
    <>
  <OrbitControls
  maxPolarAngle={Math.PI / 2}     // Limit up/down
  minPolarAngle={Math.PI / 2}     // Lock vertical rotation to horizontal view
  minDistance={2}                 // Minimum zoom distance
  maxDistance={18}                // Maximum zoom distance
  minAzimuthAngle={-Math.PI / 5}      // Limit left rotation (-180 degrees)
  maxAzimuthAngle={Math.PI / 5}       // Limit right rotation (180 degrees)
/>

      <ambientLight intensity={1} />
      <Showroom position-y={-3.5} position-z={-4} scale={1.5} />

      <Hoodie2 position-y={-2.5} scale={0.7} />
      <Environment preset="city" environmentIntensity={1.2} />
    </>
  );
};
