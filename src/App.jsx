import { Canvas } from '@react-three/fiber'
import { Scene } from './components/Scene'
import { Mustang } from './components/Mustang'
import './styles.css'

export default function App() {
  return (
    <Canvas>
      <Scene />
      <Mustang />
    </Canvas>
  )
}
