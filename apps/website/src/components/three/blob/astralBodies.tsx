import { Points } from "@react-three/drei";
import React, { MutableRefObject, useEffect, useMemo } from "react";
import {
    AdditiveBlending,
    Points as ThreePoints,
    Texture,
    BufferGeometry,
    Material,
    NormalBufferAttributes,
    Object3DEventMap,
} from "three";
import { makeBuffer } from "./utils";
import { LandingSection } from "#/types/landingSection";
import { useSpring, animated } from "@react-spring/three";


interface AstralBodiesProps {
    n?: number;
    texture: Texture;
    section: LandingSection;
    size?: number;
    show: boolean;
    positions: Float32Array
    astralBodies: MutableRefObject<ThreePoints<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>
}


export const AstralBodies = ({
    texture,
    section,
    show,
    astralBodies,
    positions,
    size: _size = 5,
    n = 2,
}: AstralBodiesProps) => {
    const size = useMemo(
        () => makeBuffer({ length: n }, () => Math.random() * 0.2),
        [n],
    );

    const [springs, api] = useSpring(() => {
        return {
            opacity: 0.8,
            size: _size,
            config: {
                mass: 4,
                friction: 10,
            },
        };
    }, [section]);

    useEffect(() => {
        if (show) {
            api.start({
                opacity: 0.8,
                size: _size,
            });
        } else {
            api.start({
                opacity: 0,
                size: 10,
            });
        }
    }, [show]);

    return (
            <Points positions={positions} sizes={size} ref={astralBodies}>
                <animated.pointsMaterial
                    size={springs.size}
                    color="#fff"
                    transparent={true}
                    opacity={springs.opacity}
                    map={texture}
                    blending={AdditiveBlending}
                    depthWrite={false}
                />
            </Points>
    );
};

AstralBodies.displayName = "AstralBodies";
