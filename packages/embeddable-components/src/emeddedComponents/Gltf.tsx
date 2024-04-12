"use client";
import { useRef } from "react";
import { Mesh } from "three";
import { Backdrop, Stage, useGLTF } from "@react-three/drei";
import { ThreeJsCanvas } from "@ulld/render/3d/threeJsCanvas";


interface GltfProps {
    file?: string
    orbitControls?: boolean
    cameraControls?: boolean
    rotate?: boolean
    shadows?: boolean
    stage?: boolean
}




const Model = ({ file, rotate }: GltfProps) => {
    /* const [gltf, setGltf] = useState<Object3D | null>(null) */
    const mesh = useRef<Mesh>(null!)
    /* const fp = path.join(process.cwd(), `/content/resources/gltf/${file}`) */
    // const gltf = useLoader(GLTFLoader, "/assets/devOnly/galaxy.glb");
    const gltf = useGLTF("/assets/devOnly/earth.glb")
    // useFrame(() => {
    //     console.log("rotate: ", rotate)
    //     // PERFORMANCE: This needs to be handled without even setting the hook instead of returning inside of the hook. Look into using this without a hook when you have time.
    //     if (!rotate) return
    //     mesh.current.rotation.y += 0.01;
    // });


    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}

const _Stage = ({ stage, children }: { stage: boolean, children: React.ReactNode }) => {
    if (!stage) return children
    return (
        <Stage shadows="accumulative">
            {children}
        </Stage>
    )
}

const _Backdrop = () => {
    return (
        <Backdrop
            receiveShadow={true}
            floor={0.25} // Stretches the floor segment, 0.25 by default
            segments={20} // Mesh-resolution, 20 by default
        >
            <meshStandardMaterial color="#353540" />
        </Backdrop>
    )
}



const Gltf = ({ file, orbitControls, cameraControls, shadows, stage, rotate }: GltfProps) => {
    console.log("rotate: ", rotate)
    console.log(file, orbitControls, cameraControls, shadows, stage, rotate)
    const ref = useRef<HTMLElement>(null!)
    return (
        <ThreeJsCanvas shadows={shadows || stage} orbitControls={Boolean(orbitControls !== false)} cameraControls={Boolean(cameraControls !== false)} ref={ref} className={"w-[600px] h-[600px]"} >
            <_Stage stage={stage || false}>
                <Model file={file} rotate={rotate} />
            </_Stage>
        </ThreeJsCanvas>
    )
}

Gltf.displayName = "Gltf"



export default Gltf;
