import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import { WrappedProduct } from './Product/WrappedProduct'
import { Scene } from './Setup/Scene'

function Main({ orbit }) {
  return (
    <>
      <Suspense fallback={null}>
        <WrappedProduct orbit={orbit} />
      </Suspense>
      <Suspense fallback={null}>
        <WrappedProduct orbit={orbit} position={[0, 2.5, 0]} />
      </Suspense>
    </>
  )
}

export default function App() {
  const orbit = useRef()
  return (
    <Scene orbit={orbit} cameraPosition={new THREE.Vector3(0, 0, 5)}>
      <Main orbit={orbit} />
    </Scene>
  )
}
