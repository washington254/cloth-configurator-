/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useAtom } from 'jotai';
import { colorAtom } from './UI';
import { useFrame } from '@react-three/fiber';

export function Showroom(props) {

  const { nodes, materials } = useGLTF('/showroom.glb')

  const [color] = useAtom(colorAtom);
  const platformRef = useRef();

  if (materials.light1) {
    materials.light1.emissive = new THREE.Color(color);  
    materials.light1.emissiveIntensity = 3.5;           
  }
  useFrame(() => {
    if (platformRef.current) {
      platformRef.current.rotation.y += 0.005;
    }
  })

  return (
    <group {...props} dispose={null}>
      <group position={[8.301, 0.406, -5.572]} rotation={[-Math.PI / 2, 0, 0]} scale={0.235}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.852, 0]} scale={0.854}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4001.geometry}
              material={materials.ceramique}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5001.geometry}
              material={materials.dirt}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.leaf}
            position={[0.365, 2.984, -0.105]}
            rotation={[0, 1.146, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.leaf}
            position={[0.144, 5.128, 0.629]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.leaf}
            position={[-0.596, 4.4, -0.245]}
            rotation={[-2.687, 1.381, 2.411]}
            scale={0.908}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9001.geometry}
            material={materials.bark_i_dunno_i_guess_thats_how_its_called}
            position={[-0.037, 1.411, -0.123]}
            rotation={[0, -0.9, 0]}
            scale={0.69}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7001.geometry}
            material={materials.bark_i_dunno_i_guess_thats_how_its_called}
            position={[0, 1.411, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.bark_i_dunno_i_guess_thats_how_its_called}
            position={[0.02, 1.525, -0.052]}
            rotation={[0.987, 1.499, -1.008]}
            scale={0.291}
          />
        </group>
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube__0.geometry}
          material={materials.Cube__0}
          position={[61.449, -584.149, 252.359]}
          rotation={[-Math.PI / 2, 0, 2.541]}
          scale={79.828}
        />
        <group
          position={[883.564, 291.09, -81.841]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1747.168, 1259.637, 579.643]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_1.geometry}
            material={materials.phong4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_2.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_3.geometry}
            material={materials.pac}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_4.geometry}
            material={materials.juice}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_5.geometry}
            material={materials.snoop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_6.geometry}
            material={materials.eminem}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_7.geometry}
            material={materials.xxxtent}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_8.geometry}
            material={materials.phong3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_9.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_10.geometry}
            material={nodes.pPlane8_phong4_0_10.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_11.geometry}
            material={materials.phong7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane8_phong4_0_12.geometry}
            material={materials.light1}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder2_phong2001_0.geometry}
          material={materials.light1}
          position={[0, 14.837, 228.485]}
          scale={[5.3, 0.115, 5.3]}
        />
        <mesh
          castShadow
          receiveShadow
          ref={platformRef}
          geometry={nodes.platform.geometry}
          material={materials.phong6}
          position={[0, 16.614, 228.485]}
          scale={[5, 0.135, 5]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/showroom.glb')
