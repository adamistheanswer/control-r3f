import * as THREE from 'three'
import { useRef } from 'react'

export function ProductGeometry({ active, setActive, texture }) {
  const meshRef = useRef()

  return (
    <mesh
      castShadow
      receiveShadow
      ref={meshRef}
      userData={{ hello: 'world' }}
      name="1234"
      onClick={(e) => {
        setActive(!active)
        let vector = new THREE.Vector3()
        e.object.getWorldPosition(vector)
        if (active) {
          console.log(vector)
        }
      }}>
      <boxGeometry />
      <meshPhongMaterial color={active ? 'yellow' : 'white'} attach="material" map={texture} reflectivity={0} />
    </mesh>
  )
}
