import { Points } from "@react-three/drei";
import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import {
    AdditiveBlending,
    MathUtils,
    Points as ThreePoints,
    Quaternion,
    Texture,
    Vector3,
    DirectionalLight,
    IcosahedronGeometry,
    BufferGeometry,
    Material,
    NormalBufferAttributes,
    Object3DEventMap,
} from "three";
import { Pos, makeBuffer } from "./utils";
import { useFrame } from "@react-three/fiber";
import * as buffer from "maath/buffer";
import * as misc from "maath/misc";
import { LandingSection } from "#/types/landingSection";
import { useSpring, animated } from "@react-spring/three";


interface AstralBodiesProps {
    n?: number;
    texture: Texture;
    section: LandingSection;
    minRadius?: number;
    maxRadius?: number;
    size?: number;
    show: boolean;
    nucleus: RefObject<IcosahedronGeometry>
}
const rotationAxis = new Vector3(0, 1, 0).normalize();
const q = new Quaternion();

const posA =
    (n: number, center: boolean = false, minRadius: number = 150) =>
        () =>
            center
                ? makeBuffer({ length: n * 3 }, () => 0)
                : makeBuffer({ length: n * 3 }, () =>
                    MathUtils.randFloatSpread(minRadius),
                );
const posB =
    (n: number, center: boolean = false, maxRadius: number = 350) =>
        () =>
            center
                ? makeBuffer({ length: n * 3 }, () => 0)
                : makeBuffer({ length: n * 3 }, () =>
                    MathUtils.randFloatSpread(maxRadius),
                );

export const AstralBodies = ({
    texture,
    section,
    minRadius,
    maxRadius,
    show,
    nucleus,
    size: _size = 5,
    n = 2,
}: AstralBodiesProps) => {
    const astralBodies = useRef<ThreePoints<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null!);
    const [positionA, setPositionA] = useState(posA(n));
    const [positionB, setPositionB] = useState(posB(n));
    const [positionFinal] = useState(() => positionB.slice(0));
    const size = useMemo(
        () => makeBuffer({ length: n }, () => Math.random() * 0.2),
        [n],
    );
    const rotations = useMemo(() => {
        return makeBuffer({ length: n }, () => Math.random() * Math.PI);
    }, [n]);

    const rotationsB = useMemo(() => {
        return makeBuffer({ length: n }, () => Math.random() * Math.PI * 2);
    }, [n]);

    const rotationsFinal = useMemo(() => {
        return rotationsB.slice(0);
    }, []);

    useEffect(() => {
        setPositionA(posA(n, section !== "hero", minRadius));
        setPositionB(posB(n, section !== "hero", maxRadius));
    }, [section]);


    useFrame(({ clock }) => {
        const et = clock.getElapsedTime();
        const t = misc.remap(Math.sin(et), [-1, 1], [0, 1]);
        buffer.lerp(positionA, positionB, positionFinal, t);
        buffer.rotate(positionB, {
            q: q.setFromAxisAngle(rotationAxis, t * t * 0.1),
        });
        astralBodies.current.rotateZ(Math.PI * 0.002 * t);
        buffer.lerp(rotations, rotationsB, rotationsFinal, t);
        let pos: Vector3[] = []
        astralBodies.current.traverse((item) => {
            pos.push(item.position) 
        })
        /* RESUME: Come back here and figure out how to get individual points positions. Then calculate the radial distance and use that to set the luminosity related points of the nucleus if they're not hovered. */
        /* if(!window.astralBodies){ */
        /*     window.astralBodies = astralBodies */
        /* } */
    });

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
            <Points positions={positionFinal} sizes={size} ref={astralBodies}>
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
