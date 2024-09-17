import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useAtom } from 'jotai';
import { colorAtom } from './UI';
import * as THREE from 'three';

export function Hoodie2(props) {
  const [color] = useAtom(colorAtom);  
  const { nodes, materials } = useGLTF('/hoodie2.glb');

  
  useEffect(() => {
    if (materials.Hoodie) {
      materials.Hoodie.color = new THREE.Color(color);
    }
    
  }, [color, materials.Hoodie]);  


return (
  <group {...props} dispose={null}>
    <group position={[-0.024, 5.46, -1.161]} scale={0.784}>
      <skinnedMesh
        geometry={nodes.hoodie.geometry}
        material={materials.Hoodie}
        skeleton={nodes.hoodie.skeleton}
      />
      <primitive object={nodes.Bone} />
      <primitive object={nodes.Bone009} />
    </group>
  </group>
)
}

useGLTF.preload('/hoodie2.glb');
