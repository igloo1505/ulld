"use client";
import React, {
    useEffect,
    useState,
    useRef,
    useMemo,
    Suspense,
    RefObject,
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
import { useStars } from "./useStars";
import { AstralBodies } from "./astralBodies";
import { useLandingSection } from "#/components/pageSpecific/landing/useSection";
import { useBlobAnimation } from "./animation/animate";
import Nucleus from "./nucleus";
import { OrbitingBodies } from "./orbitingStars";
import { LandingSection } from "#/types/landingSection";
import { useViewport } from "@ulld/hooks/useViewport";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { useControls } from "leva";


/* TODO: Find way to darken the background. Right now the backdrop can't be inserted between the background and the blob. */

interface NoiseyBlobProps {
    section: LandingSection;
    delay?: number;
}

const NoiseyBlobInternal = ({ section, delay }: NoiseyBlobProps) => {
    const viewport = useViewport();
    const textureNucleus = useLoader(Three.TextureLoader, _textureNucleus.src);
    const textureStar = useLoader(Three.TextureLoader, _textureStar.src);
    const textureStar1 = useLoader(Three.TextureLoader, _texture1.src);
    const textureStar2 = useLoader(Three.TextureLoader, _texture2.src);
    const ambientLight = useRef<Three.AmbientLight>(null!);
    const directionalLight = useRef<Three.DirectionalLight>(null!);
    const [show, setShow] = useState(false);
    textureNucleus.anisotropy = 16;
    let vw = viewport?.window.width || 1600;
    let vh = viewport?.window.height || 1200;
    const nucleusRef = useRef<any>(null!);
    const cameraRef = useRef<Three.PerspectiveCamera>(null!);

    const [nucHoverd, setNucHovered] = useBlobAnimation({
        nucleus: nucleusRef,
        camera: cameraRef,
    });

    useEffect(() => {
        if (section !== "hero") {
            setShow(false);
        } else {
            if (delay) {
                setTimeout(() => setShow(true), delay);
            } else {
                setShow(true);
            }
        }
    }, [section]);


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
            <Nucleus texture={textureNucleus} show={show} />
            <BlobStars
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
            <BlobSphere show={show} radius={50} section={section} />
            <AstralBodies
                show={show}
                minRadius={8}
                maxRadius={12}
                size={1}
                section={section}
                texture={textureStar1}
                n={2}
                directionalLight={directionalLight}
                ambientLight={ambientLight}
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

const NoiseyBlob = () => {
    const [frameLoop, setFrameLoop] = useState<"always" | "never">("never");
    const section = useLandingSection();
    useEffect(() => {
        if (section === "hero") {
            setFrameLoop("always");
        } else {
            setTimeout(() => setFrameLoop("never"), 2000);
        }
    }, [section]);


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
                    /* powerPreference: "high-performance", */
                    alpha: true,
                    antialias: true,
                    /* stencil: false, */
                    /* depth: false, */
                    ...(typeof window !== "undefined" && {
                        pixelRatio: window?.devicePixelRatio,
                    }),
                    /* shadowMapCullFace: Three.CullFaceNone, */
                }}
                camera={{
                    position: [0, 6.46, 6.46],
                    quaternion: new Three.Quaternion(-0.38, 0, 0, 0.9238),
                    rotation: new Three.Euler(-0.7853, 0, 0),
                }}
            >
                <Suspense fallback={null}>
                    <NoiseyBlobInternal section={section} />
                </Suspense>
            </Canvas>
        </div>
    );
};

NoiseyBlob.displayName = "NoiseyBlob";

export default NoiseyBlob;
