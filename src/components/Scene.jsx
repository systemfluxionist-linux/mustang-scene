import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 8]} fov={50} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      <OrbitControls />
    </>
  )
}
