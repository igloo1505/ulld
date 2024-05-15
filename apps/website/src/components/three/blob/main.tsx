"use client";
import React, { useEffect, useState, useMemo, useRef, Suspense } from "react";
import * as Three from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import { BlobSphere } from "./sphere";
import { BlobStars } from "./stars";
import { AstralBodies } from "./astralBodies";
import Nucleus from "./nucleus";
import { OrbitingBodies } from "./orbitingBodies";
import { useViewport } from "@ulld/hooks/useViewport";
import { makeBuffer } from "./utils";
import * as buffer from "maath/buffer";
import * as misc from "maath/misc";
import {RootState} from '#/state/store';
import {connect} from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    section: state.core.landingSection,
    props: props
}))


/* TODO: Find way to darken the background. Right now the backdrop can't be inserted between the background and the blob. */

interface NoiseyBlobProps {
    section?: string;
    delay?: number;
    show: boolean;
    onHide: () => void;
    isProduction?: boolean;
    frameloop: "always" | "never";
}

const nAstralBodies = 2;

const posA =
    (n: number, center: boolean = false, minRadius: number = 150) =>
        () =>
            center
                ? makeBuffer({ length: n * 3 }, () => 0)
                : makeBuffer({ length: n * 3 }, () =>
                    Three.MathUtils.randFloatSpread(minRadius),
                );
const posB =
    (n: number, center: boolean = false, maxRadius: number = 350) =>
        () =>
            center
                ? makeBuffer({ length: n * 3 }, () => 0)
                : makeBuffer({ length: n * 3 }, () =>
                    Three.MathUtils.randFloatSpread(maxRadius),
                );

const astralRotationAxis = new Three.Vector3(0, 1, 0).normalize();

const q = new Three.Quaternion();

const NoiseyBlobInternal = connector(({
    section = "hero",
    show,
    isProduction = true,
    onHide,
    frameloop,
}: NoiseyBlobProps) => {
    const viewport = useViewport();
    const textureNucleus = useLoader(Three.TextureLoader, _textureNucleus.src);
    const textureStar = useLoader(Three.TextureLoader, _textureStar.src);
    const textureStar1 = useLoader(Three.TextureLoader, _texture1.src);
    const textureStar2 = useLoader(Three.TextureLoader, _texture2.src);
    const ambientLight = useRef<Three.AmbientLight>(null!);
    textureNucleus.anisotropy = 16;
    let vw = viewport?.window.width || 1600;
    let vh = viewport?.window.height || 1200;
    const orbitingStars = useRef<Three.InstancedMesh>(null!);
    const nucleusRef = useRef<any>(null!);
    const cameraRef = useRef<Three.PerspectiveCamera>(null!);
    const starRef1 = useRef<Three.BufferGeometry>(null!);
    const starRef2 = useRef<Three.BufferGeometry>(null!);
    const starRef3 = useRef<Three.BufferGeometry>(null!);
    const astralBodies = useRef<
        Three.Points<
            Three.BufferGeometry<Three.NormalBufferAttributes>,
            Three.Material | Three.Material[],
            Three.Object3DEventMap
        >
    >(null!);
    const [positionA, setPositionA] = useState(posA(nAstralBodies));
    const [positionB, setPositionB] = useState(posB(nAstralBodies));
    const [positionFinal] = useState(() => positionB.slice(0));
    const rotations = useMemo(() => {
        return makeBuffer({ length: nAstralBodies }, () => Math.random() * Math.PI);
    }, [nAstralBodies]);

    const rotationsB = useMemo(() => {
        return makeBuffer(
            { length: nAstralBodies },
            () => Math.random() * Math.PI * 2,
        );
    }, [nAstralBodies]);

    const rotationsFinal = useMemo(() => {
        return rotationsB.slice(0);
    }, []);

    useEffect(() => {
        setPositionA(posA(nAstralBodies, section !== "hero", 8));
        setPositionB(posB(nAstralBodies, section !== "hero", 12));
    }, [section]);

    useFrame((state, dt) => {
        if (starRef1.current) {
            starRef1.current.rotateY(dt * 0.02);
        }
        if (starRef2.current) {
            starRef2.current.rotateY(dt * 0.03);
        }
        if (starRef3.current) {
            starRef3.current.rotateY(dt * 0.035);
        }
        orbitingStars.current.rotateY(Math.PI * dt * 0.025);
        const et = state.clock.getElapsedTime();
        const t = misc.remap(Math.sin(et), [-1, 1], [0, 1]);
        buffer.lerp(positionA, positionB, positionFinal, t);
        buffer.rotate(positionB, {
            q: q.setFromAxisAngle(astralRotationAxis, t * t * 0.1),
        });
        astralBodies.current.rotateZ(Math.PI * 0.002 * t);
        buffer.lerp(rotations, rotationsB, rotationsFinal, t);
        let pos: Three.Vector3[] = [];
        astralBodies.current.traverse((item) => {
            pos.push(item.position);
        });
        state.scene.rotateY(dt * -0.01);
    });

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
                frameloop={frameloop}
            />
            {isProduction && (
                <>
                    <BlobStars
                        radius={35}
                        size={0.7}
                        texture={textureStar}
                        show={section === "hero"}
                        starRef={starRef1}
                    />
                    <BlobStars
                        radius={35}
                        size={1.3}
                        texture={textureStar1}
                        show={section === "hero"}
                        starRef={starRef2}
                    />
                    <BlobStars
                        radius={35}
                        size={1}
                        texture={textureStar2}
                        show={section === "hero"}
                        starRef={starRef3}
                    />
                </>
            )}
            <BlobSphere show={show} radius={50} section={section} onHide={onHide} />
            <AstralBodies
                astralBodies={astralBodies}
                show={show}
                size={1}
                section={section}
                texture={textureStar1}
                n={2}
                positions={positionFinal}
            />
            <OrbitingBodies
                orbitingStars={orbitingStars}
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
            />
        </>
    );
});


const NoiseyBlob = connector(({ isProduction, show, setShow, section }: { isProduction: boolean, show: boolean, setShow: (val: boolean) => void, section: string }) => {
    const [isHidden, setIsHidden] = useState(false);
    const frameLoop = useMemo(() => (!isHidden ? "always" : "never"), [isHidden]);
    useEffect(() => {
        setShow(section === "hero");
        if (section === "hero") {
            setIsHidden(false);
            document.getElementById("blobSection")?.classList.remove("inactive");
        }
    }, [section]);
    /*     useNext13NavigationListener((url) => { */
    /*     const sp = new URLSearchParams(typeof url === "string" ? url : url?.toString()) */
    /*     console.log("sp: ", sp) */
    /*     console.log("sp.get(\"section\"): ", sp.get("section")) */
    /* }) */

    const onHide = () => {
        setIsHidden(true);
        document.getElementById("blobSection")?.classList.add("inactive");
    };

    return (
        <div
            className={
                "w-full h-screen absolute top-0 left-0 right-0 bottom-0 z-[10]  group-[.inactive]/blobSection:hidden"
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
                    ...(typeof window !== "undefined" && {
                        pixelRatio: window?.devicePixelRatio,
                    }),
                }}
                camera={{
                    position: [0, 6.46, 6.46],
                    quaternion: new Three.Quaternion(-0.38, 0, 0, 0.9238),
                    rotation: new Three.Euler(-0.7853, 0, 0),
                }}
            >
                <Suspense>
                    <NoiseyBlobInternal
                        isProduction={isProduction}
                        onHide={onHide}
                        show={show}
                        section={section}
                        frameloop={frameLoop}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
});

NoiseyBlob.displayName = "NoiseyBlob";

export default NoiseyBlob;
