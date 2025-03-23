import { Environment, Loader, OrbitControls, PivotControls, Sky } from "@react-three/drei";
import { Fight } from "./Fight";


export const Experience = () => {
  return (
    <>
  <OrbitControls
  // maxPolarAngle={Math.PI / 2}     // Limit up/down
  // minPolarAngle={Math.PI / 2}     // Lock vertical rotation to horizontal view
  // minDistance={2}                 // Minimum zoom distance
  // maxDistance={18}                // Maximum zoom distance
  // minAzimuthAngle={-Math.PI / 5}      // Limit left rotation (-180 degrees)
  // maxAzimuthAngle={Math.PI / 5}       // Limit right rotation (180 degrees)
/>

        <ambientLight intensity={1} />
       <Fight scale={4.8} position={[0, -1.2, 0]}  rotation={[0.2, 0, 0]}  />
       <Sky
             distance={450000}
             sunPosition={[5, 1, 8]}
             inclination={0}
             azimuth={0.25}
         />
      <Environment preset="city" environmentIntensity={1.6} />
    </>
  );
};
