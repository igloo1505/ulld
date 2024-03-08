import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';



interface CommonThreejsProps {
    color?: string
}

const CommonThreejs = ({ color }: CommonThreejsProps) => {
    return (
        <Suspense fallback={null}>
            {color && <color attach='background' args={[color]} />}
            <ambientLight intensity={0.4} />
        </Suspense>
    )
}


CommonThreejs.displayName = "CommonThreejs"


export default CommonThreejs;
