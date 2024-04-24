import { Points } from '@react-three/drei';
import React, { useEffect } from 'react'
import { AdditiveBlending, MathUtils, Quaternion, Texture, Vector3 } from 'three';
import { makeBuffer } from './utils';
import { useFrame } from '@react-three/fiber';
import * as buffer from 'maath/buffer'
import * as misc from 'maath/misc'
import { LandingSection } from '#/types/landingSection';


interface PointsTestProps {
 n?: number
    texture: Texture
    section: LandingSection
}
const rotationAxis = new Vector3(0, 1, 0).normalize()
const q = new Quaternion()



const posA = (n: number, center: boolean = false) => () => center ? makeBuffer({length: n * 3}, () => 0) : makeBuffer({ length: n * 3 }, () => MathUtils.randFloatSpread(150))
const posB = (n: number, center: boolean = false) => () => center ? makeBuffer({length: n * 3}, () => 0) : makeBuffer({ length: n * 3 }, () => MathUtils.randFloatSpread(350))

const PointsTest = ({texture, section, n=50 }: PointsTestProps) => {

  const [positionA, setPositionA] = React.useState(posA(n))
  const [positionB, setPositionB] = React.useState(posB(n))
  const [positionFinal] = React.useState(() => positionB.slice(0))
  const [color] = React.useState(() => makeBuffer({ length: n * 3 }, () => Math.random()))
  const [size] = React.useState(() => makeBuffer({ length: n }, () => Math.random() * 0.2))
    useEffect(() => { 
            setPositionA(posA(n, section !== "hero"))
            setPositionB(posB(n, section !== "hero"))
    }, [section])
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
