import React, { useEffect, useMemo, useRef } from "react";
import {
    AdditiveBlending,
    BufferAttribute,
    BufferGeometry,
    InstancedMesh,
    MathUtils,
    Object3D,
    PointsMaterial,
    ShapeGeometry,
    Sphere,
    Texture,
    Vector3,
} from "three";
import { getPointArray, randomPointSphere } from "./utils";
import { useFrame } from "@react-three/fiber";
import { useSection } from "#/components/pageSpecific/landing/useSection";
import { useSearchParams } from "next/navigation";
import { animated, useSpring } from "@react-spring/three";

interface BlobStarProps {
    texture: Texture;
    rotationScalar?: number;
    n?: number;
    radius?: number;
    size?: number;
    sizeMin?: number;
    sizeMax?: number;
    radialScalar?: number;
    show: boolean;
}

export const BlobStars = ({
    texture,
    n = 50,
    radius = 150,
    sizeMin = 2,
    sizeMax = 5,
    size = 2,
    rotationScalar = 0.01,
    show,
    radialScalar: _radialScalar = 2,
}: BlobStarProps) => {
    const starRef = useRef<BufferGeometry>(null!);
    /* const sizes = useMemo(() => { */
    /*     let range = sizeMax - sizeMin; */
    /*     return Array(n) */
    /*         .fill(0) */
    /*         .map(() => sizeMin + range / 2 + MathUtils.randFloatSpread(range)); */
    /* }, []); */

    /* const radialScalars = useMemo(() => { */
    /*     let range = sizeMax - sizeMin; */
    /*     return Array(n) */
    /*         .fill(0) */
    /*         .map(() => Math.random() * _radialScalar); */
    /* }, []); */

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

    useFrame((state, dt) => {
        if (starRef.current) {
            starRef.current.rotateY(-dt * rotationScalar);
        }
        state.scene.rotateY(dt * -0.01)
    });

    const bufferGeo = useMemo(() => {
        let vertices: number[] = getPointArray(radius, n);
        /* .map((n, i) => n * radialScalars[Math.floor(i / 3)]) */
        const b = new BufferGeometry();
        b.setAttribute(
            "position",
            new BufferAttribute(new Float32Array(vertices), 3),
        );
        /* b.setAttribute( */
        /*         "size",  */
        /*         new BufferAttribute(new Float32Array(sizes), 1) */
        /*     ) */

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
