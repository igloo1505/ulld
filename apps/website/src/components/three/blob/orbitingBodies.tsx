"use client";
import React, { MutableRefObject, useEffect, useMemo, useRef } from "react";
import {
    MathUtils,
    Quaternion,
    Texture,
    Vector3,
    TextureLoader,
    SphereGeometry,
    InstancedMesh,
    Matrix4,
} from "three";
import { forLoopUtil } from "./utils";
import { useLoader, useThree } from "@react-three/fiber";
import { LandingSection } from "#/types/landingSection";
import { useSpring, animated } from "@react-spring/three";
import colorTexture from "./assets/orbit/ground_0010_color_1k.jpg";

interface OrbitingBodiesProps {
    n?: number;
    texture: Texture;
    section: LandingSection;
    radius?: number;
    size?: number;
    spread?: number;
    widthSegments?: number;
    heightSegments?: number;
    sizeSpread?: number;
    orbitingStars: MutableRefObject<InstancedMesh>;
    show: boolean;
}

export const OrbitingBodies = ({
    radius = 20,
    spread = 3,
    size: _size = 5,
    widthSegments = 5,
    heightSegments = 5,
    show,
    orbitingStars,
    n = 50,
}: OrbitingBodiesProps) => {
    const sphereGeo = useRef<SphereGeometry>(null!);
    const colorTextureMap = useLoader(TextureLoader, colorTexture.src);
    const positions = useMemo(() => {
        return Array(n)
            .fill(0)
            .map(() => {
                const ds = radius + MathUtils.randFloatSpread(spread * 2);
                const dx = MathUtils.randFloatSpread(ds * 2);
                const dy = MathUtils.randFloatSpread(2) * spread;
                const dz =
                    Math.sqrt(ds ** 2 - dx ** 2) * (Math.random() > 0.5 ? -1 : 1);
                return [dx, dy, dz];
            }) as [number, number, number][];
    }, []);

    const [springs, api] = useSpring(() => {
        return {
            opacity: 0.8,
            scale: 0,
            config: {
                mass: 4,
                friction: 200,
            },
        };
    }, []);

    useEffect(() => {
        if (show) {
            api.start({
                opacity: 0.8,
                scale: 1,
                config: {
                    mass: 4,
                    friction: 200,
                },
            });
        } else {
            api.start({
                opacity: 0,
                scale: 0,
                config: {
                    mass: 2,
                    friction: 100,
                    duration: 0.6,
                },
            });
        }
    }, [show]);
    const three = useThree();

    useEffect(() => {
        if (!positions || !three) return;
        const quaternion = new Quaternion();
        const scale = new Vector3();
        const matrix = new Matrix4();
        const position = new Vector3();
        let p = [];
        forLoopUtil(n, (idx: number) => {
            scale.x = scale.y = scale.z = Math.random();
            p = positions[idx];
            position.x = p[0];
            position.y = p[1];
            position.z = p[2];
            orbitingStars.current.setMatrixAt(
                idx,
                matrix.compose(position, quaternion.random(), scale),
            );
        });
    }, [positions]);

    return (
        <animated.instancedMesh
            ref={orbitingStars}
            /* @ts-ignore */
            args={[null, null, n]}
            scale={springs.scale}
        >
            <sphereGeometry
                ref={sphereGeo}
                args={[_size, widthSegments, heightSegments]}
            />
            <meshPhysicalMaterial
                map={colorTextureMap}
                /* color={new Color("#000")} */
                /* emissive={new Color("#444444")} */
                roughness={1}
                specularIntensity={0}
                sheen={0}
                metalness={0}
                ior={1}
                reflectivity={0}
                iridescence={0}
                clearcoat={0}
            />
        </animated.instancedMesh>
    );
};

OrbitingBodies.displayName = "OrbitingBodies";
