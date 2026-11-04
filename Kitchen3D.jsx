import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';

const finishes = {
  walnut: '#76533b',
  ivory: '#e8e1d5',
  sage: '#777d70',
  charcoal: '#303633',
  oak: '#b58b61'
};

function Cabinet({ position, scale = [1, 1, 1], color }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={0.58} />
      </mesh>
      <mesh position={[0, 0, 0.506]} scale={[0.025, 0.55, 0.018]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#b99b75" metalness={0.55} roughness={0.35} />
      </mesh>
    </group>
  );
}

function KitchenModel({ cabinetColor, topColor }) {
  const units = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);
  return (
    <group position={[0, -0.1, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.58, 0]} receiveShadow>
        <planeGeometry args={[11, 8]} />
        <meshStandardMaterial color="#d8d0c3" roughness={0.88} />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, 1.35, -1.85]} receiveShadow>
        <boxGeometry args={[8.5, 4, 0.12]} />
        <meshStandardMaterial color="#e9e3d9" roughness={0.95} />
      </mesh>
      {/* Base cabinets */}
      {units.map((i) => <Cabinet key={i} position={[-2 + i, 0.05, -1.05]} scale={[0.94, 1.05, 0.72]} color={cabinetColor} />)}
      {/* Countertop */}
      <mesh position={[0, 0.62, -1.05]} castShadow receiveShadow>
        <boxGeometry args={[5.15, 0.12, 0.86]} />
        <meshStandardMaterial color={topColor} roughness={0.24} />
      </mesh>
      {/* Upper cabinets */}
      {units.map((i) => <Cabinet key={`u${i}`} position={[-2 + i, 1.75, -1.48]} scale={[0.94, 0.92, 0.48]} color={cabinetColor} />)}
      {/* Island */}
      <mesh position={[0, -0.03, 0.55]} castShadow receiveShadow>
        <boxGeometry args={[2.65, 1.05, 1.25]} />
        <meshStandardMaterial color={cabinetColor} roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.53, 0.55]} castShadow>
        <boxGeometry args={[2.82, 0.12, 1.38]} />
        <meshStandardMaterial color={topColor} roughness={0.22} />
      </mesh>
      {/* Island handles */}
      {[-0.82, 0, 0.82].map((x) => (
        <mesh key={x} position={[x, 0.02, 1.184]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.018, 0.018, 0.34, 12]} />
          <meshStandardMaterial color="#b99b75" metalness={0.7} roughness={0.28} />
        </mesh>
      ))}
      {/* Sink and faucet */}
      <mesh position={[-1.15, 0.69, -1.02]}>
        <boxGeometry args={[0.68, 0.025, 0.42]} />
        <meshStandardMaterial color="#8c9691" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-1.15, 0.91, -1.24]}>
        <torusGeometry args={[0.16, 0.025, 12, 32, Math.PI]} />
        <meshStandardMaterial color="#a9aaa4" metalness={0.85} roughness={0.18} />
      </mesh>
      {/* Decorative pendant lights */}
      {[-0.65, 0.65].map((x) => (
        <group key={x} position={[x, 2.55, 0.55]}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.012, 0.012, 0.42, 8]} />
            <meshStandardMaterial color="#9b8a72" />
          </mesh>
          <mesh position={[0, -0.04, 0]}>
            <coneGeometry args={[0.2, 0.23, 32, 1, true]} />
            <meshStandardMaterial color="#c3aa86" side={2} metalness={0.35} roughness={0.35} />
          </mesh>
          <pointLight position={[0, -0.12, 0]} intensity={0.35} distance={2} color="#ffe3b4" />
        </group>
      ))}
    </group>
  );
}

export default function Kitchen3D({ cabinet = 'walnut', countertop = 'ivory' }) {
  return (
    <div className="canvas-wrap">
      <Canvas shadows camera={{ position: [5.8, 4.1, 6.4], fov: 38 }}>
        <color attach="background" args={['#e9e4dc']} />
        <ambientLight intensity={1.15} />
        <directionalLight position={[4, 7, 5]} intensity={2.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <Environment preset="apartment" />
        <KitchenModel cabinetColor={finishes[cabinet]} topColor={countertop === 'dark' ? '#454947' : countertop === 'sand' ? '#b9a58b' : '#eee9df'} />
        <ContactShadows position={[0, -0.56, 0]} opacity={0.32} scale={12} blur={2.4} far={4} />
        <OrbitControls enablePan={false} minDistance={4.5} maxDistance={11} maxPolarAngle={Math.PI / 2.05} />
      </Canvas>
      <div className="drag-hint">اسحب لمعاينة المطبخ من جميع الزوايا</div>
    </div>
  );
}
