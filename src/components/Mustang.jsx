export function Mustang() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <boxGeometry args={[2, 1, 4]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
