import { useCursor, Line, MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { Mesh } from 'pixi.js'
import React, { useMemo, useRef, useState } from 'react'
import THREE, { EllipseCurve, Group } from 'three'



interface ThreejsTestBlobProps {

}

const ThreejsTestBlob = ({ route = '/', ...props }) => {
    const [hovered, hover] = useState(false)
    const router = useRouter()
    const mesh = useRef<Group>(null!)
    useCursor(hovered)
    const points = useMemo(() => new EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
        mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
        mesh.current.rotation.z -= delta / 4
    })

    return (
        <mesh
            onClick={() => router.push(route)}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            {...props}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial roughness={0} color={hovered ? '#1fb2f5' : '#1fb2f5'} />
        </mesh>
    )
}

ThreejsTestBlob.displayName = "ThreejsTestBlob"


export default ThreejsTestBlob;
