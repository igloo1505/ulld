"use client";
import React, {
    useEffect,
    useState,
    useMemo,
    useRef,
    Suspense,
} from "react";
import * as Three from "three";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
/* import sceneBackground from "./assets/sphere/stars12.jpg"; */
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import { BlobSphere } from "./sphere";
import { BlobStars } from "./stars";
import { AstralBodies } from "./astralBodies";
import { useLandingSection } from "#/components/pageSpecific/landing/useSection";
import Nucleus from "./nucleus";
import { OrbitingBodies } from "./orbitingStars";
import { LandingSection } from "#/types/landingSection";
import { useViewport } from "@ulld/hooks/useViewport";
import { Html } from "@react-three/drei";


/* TODO: Find way to darken the background. Right now the backdrop can't be inserted between the background and the blob. */

interface NoiseyBlobProps {
    section: LandingSection;
    delay?: number;
    show: boolean
    onHide: () => void
    isProduction: boolean
}

const NoiseyBlobInternal = ({ section, show, isProduction, onHide }: NoiseyBlobProps) => {
    const viewport = useViewport();
    const textureNucleus = useLoader(Three.TextureLoader, _textureNucleus.src);
    const textureStar = useLoader(Three.TextureLoader, _textureStar.src);
    const textureStar1 = useLoader(Three.TextureLoader, _texture1.src);
    const textureStar2 = useLoader(Three.TextureLoader, _texture2.src);
    const ambientLight = useRef<Three.AmbientLight>(null!);
    textureNucleus.anisotropy = 16;
    let vw = viewport?.window.width || 1600;
    let vh = viewport?.window.height || 1200;
    const nucleusRef = useRef<any>(null!);
    const cameraRef = useRef<Three.PerspectiveCamera>(null!);


    return (
        <>
            <perspectiveCamera
                fov={100}
                aspect={vw / vh}
                near={0.1}
                far={1000}
                ref={cameraRef}
            />
            <ambientLight
                position={[0, 20, 20]}
                color={"#fff"}
                intensity={1.4}
                ref={ambientLight}
            />
            <Nucleus
                ambientLight={ambientLight}
                nucleus={nucleusRef}
                texture={textureNucleus}
                show={show}
            />
            {isProduction && <><BlobStars
                radius={40}
                size={1}
                rotationScalar={-0.01}
                texture={textureStar}
                show={section === "hero"}
            />
            <BlobStars
                radius={20}
                size={1.3}
                rotationScalar={0.03}
                texture={textureStar1}
                show={section === "hero"}
            />
            <BlobStars
                radius={20}
                size={1}
                rotationScalar={0.035}
                texture={textureStar2}
                show={section === "hero"}
            />
            </>}
            <BlobSphere
                show={show}
                radius={50}
                section={section}
                onHide={onHide}
            />
            <AstralBodies
                nucleus={nucleusRef}
                show={show}
                minRadius={8}
                maxRadius={12}
                size={1}
                section={section}
                texture={textureStar1}
                n={2}
            />
            <OrbitingBodies
                show={show}
                radius={15}
                size={0.5}
                section={section}
                texture={textureStar1}
                n={100}
                spread={2}
                sizeSpread={0.05}
                widthSegments={4}
                heightSegments={8}
                timeScalar={0.5}
            />
        </>
    );
};

const NoiseyBlob = ({isProduction}: {isProduction: boolean}) => {
    const [isHidden, setIsHidden] = useState(false)
    const [show, setShow] = useState(false)
    const frameLoop = useMemo(() => !isHidden ? "always" : "never", [isHidden])
    const section = useLandingSection();
    useEffect(() => {
            setShow(section === "hero");
        if(section === "hero"){
            setIsHidden(false)
        }
    }, [section]);

    const onHide = () => setIsHidden(true)


    return (
        <div
            className={
                "w-full h-screen absolute top-0 left-0 right-0 bottom-0 z-[10]"
            }
        >
            <Canvas
                className={"block w-full h-full"}
                dpr={window?.devicePixelRatio}
                frameloop={frameLoop}
                gl={{
                    powerPreference: isProduction ? "high-performance" : undefined,
                    alpha: true,
                    antialias: true,
                    /* stencil: false, */
                    /* depth: false, */
                    ...(typeof window !== "undefined" && {
                        pixelRatio: window?.devicePixelRatio,
                    })
                }}
                camera={{
                    position: [0, 6.46, 6.46],
                    quaternion: new Three.Quaternion(-0.38, 0, 0, 0.9238),
                    rotation: new Three.Euler(-0.7853, 0, 0),
                }}
            >
                <Suspense fallback={<Html>Loading...</Html>}>
                    <NoiseyBlobInternal
                isProduction={isProduction}
                        onHide={onHide}
                        show={show} 
                        section={section}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

NoiseyBlob.displayName = "NoiseyBlob";

export default NoiseyBlob;
