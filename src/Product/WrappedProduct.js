import { useTexture, TransformControls } from '@react-three/drei'
import { ProductGeometry } from './ProductGeometry'
import { useRef, useEffect, useState } from 'react'

export function WrappedProduct({ position, orbit }) {
  const transform = useRef()
  const [active, setActive] = useState(false)

  const texture = useTexture(
    'data:image/png;base64,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'
  )

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
      <ProductGeometry texture={texture} active={active} setActive={setActive} />
    </TransformControls>
  )
}
