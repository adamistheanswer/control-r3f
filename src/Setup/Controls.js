import { OrbitControls, GizmoHelper, GizmoViewcube } from '@react-three/drei'

export function Controls({ orbit }) {
  return (
    <>
      <OrbitControls
        ref={orbit}
        makeDefault
        maxAzimuthAngle={Math.PI / 2}
        maxPolarAngle={Math.PI}
        minAzimuthAngle={-Math.PI / 2}
        minPolarAngle={0}
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
