import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, TransformControls, GizmoHelper, GizmoViewcube } from '@react-three/drei'

function Product({ active, setActive }) {
  const meshRef = useRef()

  return (
    <mesh
      ref={meshRef}
      userData={{ hello: 'world' }}
      name="1234"
      onClick={() => {
        setActive(!active)
      }}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

function TransformBox({ position, orbit }) {
  const transform = useRef()
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (transform.current) {
      const { current: controls } = transform
      const callback = (event) => {
        orbit.current.enabled = !event.value
      }
      transform.current.addEventListener('dragging-changed', callback)
      return () => controls.removeEventListener('dragging-changed', callback)
    }
  })

  return (
    <TransformControls
      showX={active ? true : false}
      showY={active ? true : false}
      position={position}
      ref={transform}
      mode="translate"
      showZ={false}>
      <Product active={active} setActive={setActive} />
    </TransformControls>
  )
}

function Main({ orbit }) {
  return (
    <>
      <TransformBox orbit={orbit} />
      <TransformBox orbit={orbit} position={[0, 2.5, 0]} />
    </>
  )
}

function Controls({ orbit }) {
  return (
    <>
      <OrbitControls
        ref={orbit}
        // enableDamping
        // dampingFactor={0.05}
        // rotateSpeed={1.1}
        // minPolarAngle={Math.PI / 3.5}
        // maxPolarAngle={Math.PI / 1.5}
      />
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[60, 60]} // widget margins (X, Y)
      >
        <GizmoViewcube
          faces={['Right', 'Left', 'Top', 'Bottom', 'Front', 'Back']}
          color={'white'}
          opacity={0.85}
          strokeColor={'gray'}
          textColor={'black'}
          hoverColor={'lightgray'}
        />
      </GizmoHelper>
    </>
  )
}

export default function App() {
  const orbit = useRef()
  return (
    <Canvas pixelRatio={window.devicePixelRatio} shadowMap={THREE.PCFSoftShadowMap} colorManagement dpr={[1, 2]}>
      <gridHelper args={[10, 10, `white`, `gray`]} />
      <Main orbit={orbit} />
      <Controls orbit={orbit} />
    </Canvas>
  )
}
