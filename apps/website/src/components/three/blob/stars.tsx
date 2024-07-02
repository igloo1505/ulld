import React, {  MutableRefObject, useEffect, useMemo } from "react";
import {
    AdditiveBlending,
    BufferAttribute,
    BufferGeometry,
    Texture,
} from "three";
import { getPointArray } from "./utils";
import { animated, useSpring } from "@react-spring/three";

interface BlobStarProps {
    texture: Texture;
    n?: number;
    radius?: number;
    size?: number;
    radialScalar?: number;
    show: boolean;
    starRef: MutableRefObject<BufferGeometry>
}

export const BlobStars = ({
    texture,
    n = 50,
    radius = 150,
    size = 2,
    show,
    radialScalar: _radialScalar = 2,
    starRef,
}: BlobStarProps) => {

    const [springs, api] = useSpring(
        () => ({
            opacity: show ? 0.8 : 0,
            config: {
                friction: 200,
                mass: 3,
            },
        }),
        [show],
    );

    useEffect(() => {
        if (show) {
            api.start({
                opacity: 0.8,
            });
        } else {
            api.start({
                opacity: 0,
            });
        }
    }, [show]);

    const bufferGeo = useMemo(() => {
        let vertices: number[] = getPointArray(radius, n);
        const b = new BufferGeometry();
        b.setAttribute(
            "position",
            new BufferAttribute(new Float32Array(vertices), 3),
        );
        starRef.current = b;
        return b;
    }, [n]);

    return (
        <points args={[bufferGeo]}>
            <animated.pointsMaterial
                size={size}
                color="#fff"
                transparent={true}
                opacity={springs.opacity}
                map={texture}
                blending={AdditiveBlending}
                depthWrite={false}
                attach="material"
            />
        </points>
    );
};

BlobStars.displayName = "BlobStars";
