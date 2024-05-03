import React, { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import {
    BufferGeometry,
    Color,
    Material,
    MathUtils,
    Mesh,
    NormalBufferAttributes,
    Object3DEventMap,
    Texture,
} from "three";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import {
    EffectComposer,
    SelectiveBloom,
    Selection,
    Select,
    ToneMapping,
} from "@react-three/postprocessing";
import { Resolution, KernelSize, ToneMappingMode } from "postprocessing";
import { UnrealBloomPass } from "three-stdlib";
/* import { ToneMapping } from "postprocessing"; */
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { useControls } from "leva";
import { Effects } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const getLeva = (
    max: number = 5,
    min: number = 0,
    step: number = 0.01,
    initial?: number,
) => {
    return {
        min,
        max,
        value: typeof initial === "number" ? initial : min + (max - min) / 2,
        step: step || 0.01,
    };
};

/* {jsm ? ( */
/*     <Effects disableGamma> */
/*         <unrealBloomPass */
/*             threshold={1} */
/*             strength={intensity} */
/*             radius={radius} */
/*         /> */
/*         <outputPass args={[THREE.ACESFilmicToneMapping]} /> */
/*     </Effects> */
/* ) : ( */
/*     <EffectComposer disableNormalPass> */
/*         <Bloom */
/*             mipmapBlur */
/*             luminanceThreshold={1} */
/*             levels={8} */
/*             intensity={intensity * 4} */
/*         /> */
/*         <ToneMapping mode={ToneMappingMode.ACES_FILMIC} /> */
/*     </EffectComposer> */
/* )} */

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

interface BlobNucleusProps {
    texture: Texture;
    show: boolean;
}

const heroMorphScalar = 0.5;
const descMorphScalar = 0.3;
const hoverMorphScalar = 0.3;

const heroTimeScalar = 5;
const descTimeScalar = 8;
const hoverTimeScalar = 0.1;

const heroScale = 1;
const descScale = 0;
const hoverScale = 0.85;

const _radius = { on: 1, off: 0 };
const _metalness = { on: 4.5, off: 1.9 };
const _intensity = { on: 2, off: 0 };
const _lumThres = { on: 0.2, off: 0 };

const Nucleus = ({ texture, show }: BlobNucleusProps) => {
    const [hovered, setHovered] = useState(false);
    const nucleus = useRef<typeof sphereGeometry>(null!);

    const [springs, api] = useSpring(() => {
        return {
            position: [0, 0, 0] as [number, number, number],
            timeScalar: heroTimeScalar,
            morphScalar: heroMorphScalar,
            scale: descScale,
            metalness: _metalness.off,
            radius: _radius.off,
            lumThresh: _lumThres.off,
            intensity: _intensity.off,
            config: (key) => {
                switch (key) {
                    case "scale":
                        return {
                            friction: 50,
                            mass: 3,
                        };
                    case "position":
                        return { mass: 4, friction: 220 };
                    case "metalness":
                        return { mass: 4, friction: 220, bounce: 0 };
                    default:
                        return {
                            mass: 4,
                            friction: 220,
                        };
                }
            },
        };
    }, []);

    useEffect(() => {
        api.start({
            metalness: _metalness[hovered ? "on" : "off"],
            radius: _radius[hovered ? "on" : "off"],
            lumThresh: _lumThres[hovered ? "on" : "off"],
            intensity: _intensity[hovered ? "on" : "off"],
        });
    }, [hovered]);

    useEffect(() => {
        if (show) {
            api.start({
                timeScalar: heroTimeScalar,
                morphScalar: heroMorphScalar,
                scale: heroScale,
                position: [0, 0, 0],
            });
        } else {
            api.start({
                timeScalar: descTimeScalar,
                morphScalar: descMorphScalar,
                scale: descScale,
            });
        }
    }, [show]);

    /* useFrame(({ clock, mouse }) => { */
    /*     /* nucleus.current.rotation.z = clock.getElapsedTime(); */
    /*     nucleus.current.rotation.y = MathUtils.lerp( */
    /*       nucleus.current.rotation.y, */
    /*       mouse.x * Math.PI, */
    /*       0.1 */
    /*     ); */
    /*     nucleus.current.rotation.x = MathUtils.lerp( */
    /*       nucleus.current.rotation.x, */
    /*       mouse.y * Math.PI, */
    /*       0.1 */
    /*     ); */
    /*   }); */

    return (
        <Selection>
            <EffectComposer
                multisampling={0}
            /* enableNormalPass={false} */
            >
                <SelectiveBloom
                    mipmapBlur
                    intensity={_intensity[hovered ? "on" : "off"]}
                    luminanceSmoothing={0}
                    height={0.5}
                    luminanceThreshold={_lumThres[hovered ? "on" : "off"]}
                    radius={_radius[hovered ? "on" : "off"]}
                />
                <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
            </EffectComposer>
            <Select enabled>
                <animated.mesh
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    position={springs.position}
                    scale={springs.scale}
                    onPointerEnter={() => {
                        api.start({
                            timeScalar: hoverTimeScalar,
                            morphScalar: hoverMorphScalar,
                            scale: hoverScale,
                        });
                    }}
                    onPointerLeave={() => {
                        api.start({
                            timeScalar: show ? heroTimeScalar : descTimeScalar,
                            morphScalar: show ? heroMorphScalar : descMorphScalar,
                            scale: show ? heroScale : descScale,
                        });
                    }}
                >
                    <sphereGeometry args={[1.5, 64, 32]} ref={nucleus} />
                    <AnimatedMeshDistortMaterial
                        map={texture}
                        time={springs.timeScalar}
                        color={new Color("#0ba5e9")}
                        speed={1}
                        distort={springs.morphScalar}
                        specularColor={new Color("#000")}
                        /* TODO: Change this emissive to a dark blue when back on wifi and power. */
                        emissive={new Color("#000")}
                        roughness={0}
                        metalness={springs.metalness}
                        reflectivity={2}
                        iridescence={2.5}
                        iridescenceIOR={2.5}
                        clearcoat={1}
                        clearcoatRoughness={0}
                    />
                </animated.mesh>
            </Select>
        </Selection>
    );
};

Nucleus.displayName = "Nucleus";

export default Nucleus;
