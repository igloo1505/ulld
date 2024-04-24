import { ThreeElements, ThreeEvent, useFrame } from "@react-three/fiber";
import React, { forwardRef, useRef, useState, ForwardedRef } from "react";
import { createNoise4D } from "simplex-noise";
import {
    Mesh,
    type IcosahedronGeometry,
    type Object3D,
    type Texture,
} from "three";
import { BlobLayout } from "./types";
import { GeoData, geoDataMap } from "./utils";
import { animated, useSpring } from "@react-spring/three";
import { useViewport } from "@ulld/hooks/useViewport";
import { useSearchParams } from "next/navigation";
import { LandingSection } from "#/types/landingSection";

interface BlobNucleusProps {
    texture: Texture;
    morphScalar?: number;
    timeScalar?: number;
    layout?: BlobLayout;
    geoData: GeoData;
    setHovered: (hovered: boolean) => void
}

/* RESUME: Come back here and review this: https://codepen.io/aaroniker/pen/YoqNRB for a much better looking blob animation when finally back on power. */

const detail = 10;
const radius = 30;

export const BlobNucleus = forwardRef(
    (
        { texture, geoData, setHovered }: BlobNucleusProps,
        ref: ForwardedRef<IcosahedronGeometry>,
    ) => {
        const viewport = useViewport();
        const sp = useSearchParams();
        const section = (sp.get("section") as LandingSection) || ("hero" as "hero");
        const [springs, api] = useSpring(() => {
            return {
                scale: 1,
                position: geoData.nucleusPosition,
                config: (key) => {
                    switch (key) {
                        case "scale":
                            return {
                                mass: 4,
                                friction: 10,
                            };
                        case "position":
                            return {
                                mass: 1,
                                tension: 170,
                                friction: 200,
                            };
                        default:
                            return {};
                    }
                },
            };
        }, [viewport, sp, geoData]);

        /* const handleMouseMove = (e: ThreeEvent<PointerEvent>) => { */
        /*     const pushVector = [-e.point.x, -e.point.y, -e.point.z]; */
        /*     setMousePosition(pushVector) */
        /* }; */

        return (
            <animated.mesh
                position={springs.position}
                scale={springs.scale}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
            >
                <icosahedronGeometry args={[radius, detail]} ref={ref} />
                <meshPhongMaterial map={texture} />
            </animated.mesh>
        );
    },
);

BlobNucleus.displayName = "BlobNucleus";
