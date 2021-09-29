import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Stats } from '@react-three/drei'
import { Controls } from './Controls'

export function Scene({
  children,
  orbit,
  cameraFov = 75,
  cameraPosition = new THREE.Vector3(-5, 5, 5),
  controls = true,
  lights = true,
  ...restProps
}) {
  return (
    <Canvas
      // frameloop={'demand'}
      // mode={'concurrent'}
      // vr={true}
      // shadowMap
      // colorManagement
      frameloop="demand"
      shadows
      camera={{ position: cameraPosition, fov: cameraFov }}
      dpr={window.devicePixelRatio}
      {...restProps}>
      {children}
      {lights && (
        <>
          <ambientLight intensity={0.8} />
          <pointLight intensity={1} position={[0, 6, 0]} />
        </>
      )}
      <gridHelper args={[10, 10, `white`, `gray`]} />
      <Controls orbit={orbit} />
      <Stats showPanel={0} />
    </Canvas>
  )
}
