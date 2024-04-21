import { Points } from '@react-three/drei';
import React from 'react'
import { AdditiveBlending, MathUtils, Quaternion, Texture, Vector3 } from 'three';
import { makeBuffer } from './utils';
import { useFrame } from '@react-three/fiber';
import * as buffer from 'maath/buffer'
import * as misc from 'maath/misc'


interface PointsTestProps {
 n?: number
    radius?: number
    texture: Texture
}
const rotationAxis = new Vector3(0, 1, 0).normalize()
const q = new Quaternion()


const PointsTest = ({texture, n =50, radius = 150}: PointsTestProps) => {

  const [positionA] = React.useState(() => makeBuffer({ length: n * 3 }, () => MathUtils.randFloatSpread(150)))
  const [positionB] = React.useState(() => makeBuffer({ length: n * 3 }, () => MathUtils.randFloatSpread(350)))
  const [positionFinal] = React.useState(() => positionB.slice(0))

  const [color] = React.useState(() => makeBuffer({ length: n * 3 }, () => Math.random()))
  const [size] = React.useState(() => makeBuffer({ length: n }, () => Math.random() * 0.2))
  useFrame(({ clock }) => {
    const et = clock.getElapsedTime()
    const t = misc.remap(Math.sin(et), [-1, 1], [0, 1])
    buffer.rotate(color, { q: q.setFromAxisAngle(rotationAxis, t * 0.01) })
    buffer.lerp(positionA, positionB, positionFinal, t)
    buffer.rotate(positionB, {
      q: q.setFromAxisAngle(rotationAxis, t * t * 0.1),
    })
  })

return (
    <Points
            positions={positionFinal}
            colors={color}
            sizes={size}
        >
    <pointsMaterial
        size={5}
        color="#fff"
        transparent={true}
        opacity={0.8}
        map={texture}
        blending={AdditiveBlending}
        depthWrite={false}
        /* attach="material" */
        /* args={[bufferGeo]} */
      />

    </Points>
)
}


PointsTest.displayName = "PointsTest"


export default PointsTest;
