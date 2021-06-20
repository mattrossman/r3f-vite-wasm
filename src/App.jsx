import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'
import init, { greet } from 'wasm-test'

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <Canvas>
      <Box onClick={() => greet('WASM')}>
        <meshNormalMaterial />
      </Box>
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default App
