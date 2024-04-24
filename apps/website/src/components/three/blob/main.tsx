"use client";
import React, { useEffect, useState, useRef } from "react";
import * as Three from "three";
import {
    Canvas,
    useLoader,
} from "@react-three/fiber";
import sceneBackground from "./assets/01.jpg";
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import _texture3 from "./assets/06.png";
import { BlobNucleus } from "./nucleus";
import { BlobSphere } from "./sphere";
import { BlobStars } from "./stars";
import { useStars } from "./useStars";
import PointsTest from "./astralBodies";
import { useSection } from "#/components/pageSpecific/landing/useSection";
import { useBlobAnimation } from "./animation/animate";
import DreiNucleus from "./dreiNucleus";


/* TODO: Find way to darken the background. Right now the backdrop can't be inserted between the background and the blob. */

interface NoiseyBlobProps { }

const NoiseyBlobInternal = (props: NoiseyBlobProps) => {
    const section = useSection("hero");
    const textureNucleus = useLoader(Three.TextureLoader, _textureNucleus.src);
    const textureStar = useLoader(Three.TextureLoader, _textureStar.src);
    const textureSphere = useLoader(Three.TextureLoader, sceneBackground.src);
    const textureStar1 = useLoader(Three.TextureLoader, _texture1.src);
    textureNucleus.anisotropy = 16;
    let vw = window?.innerWidth || 1600;
    let vh = window?.innerHeight || 1200;
    useStars();
    const nucleusRef = useRef<any>(null!);
    const cameraRef = useRef<Three.PerspectiveCamera>(null!);

    const [nucHoverd, setNucHovered] = useBlobAnimation({
        nucleus: nucleusRef,
        camera: cameraRef,
    });


    return (
        <>
            <perspectiveCamera
                fov={100}
                aspect={vw / vh}
                near={0.1}
                far={1000}
                position={[0, 0, 5]}
                ref={cameraRef}
            />
            <DreiNucleus
                ref={nucleusRef}
                texture={textureNucleus}
                geoData={section.geoData}
                setHovered={setNucHovered}
            />
            <ambientLight position={[0, 20, 20]} color={"#fff"} intensity={1} />
            <directionalLight args={["#fff", 2]} position={[0, 50, -20]} />
            <BlobStars texture={textureStar} />
            <BlobSphere section={section.active} texture={textureSphere} />
            <PointsTest section={section.active} texture={textureStar1} />
        </>
    );
};

            /* <BlobNucleus */
            /*     ref={nucleusRef} */
            /*     texture={textureNucleus} */
            /*     geoData={section.geoData} */
            /*     setHovered={setNucHovered} */
            /* /> */

const NoiseyBlob = (props: NoiseyBlobProps) => {
    return (
        <div
            className={
                "w-full h-screen absolute top-0 left-0 right-0 bottom-0 z-[10]"
            }
        >
            <Canvas
                className={"block w-full h-full"}
                gl={{
                    antialias: true,
                    alpha: true,
                    pixelRatio: window?.devicePixelRatio,
                }}
                camera={{
                    position: [0, 0, 8],
                }}
            >
                <NoiseyBlobInternal {...props} />
            </Canvas>
        </div>
    );
};

NoiseyBlob.displayName = "NoiseyBlob";

export default NoiseyBlob;
