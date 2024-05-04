import React, { useEffect, useRef, useState, RefObject } from "react";
import { animated, useSpring } from "@react-spring/three";
import {
    Color,
    type IcosahedronGeometry,
    Texture,
    AmbientLight,
} from "three";
import {
    MeshDistortMaterial,
    Icosahedron as IcosahedronComp,
} from "@react-three/drei";
import {
    EffectComposer,
    SelectiveBloom,
    Selection,
    Select,
    ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

const Icosahedron = animated(IcosahedronComp);


const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

interface BlobNucleusProps {
    texture: Texture;
    show: boolean;
    nucleus: RefObject<IcosahedronGeometry>
    ambientLight: RefObject<AmbientLight>
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

const Nucleus = ({ texture, show, nucleus, ambientLight }: BlobNucleusProps) => {
    const [hovered, setHovered] = useState(false);
    const [material, setMaterial] = useState();

    const [springs, api] = useSpring(() => {
        return {
            position: [0, 0, 0] as [number, number, number],
            timeScalar: heroTimeScalar,
            morphScalar: heroMorphScalar,
            scale: descScale,
            metalness: _metalness.off,
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

    return (
        <Selection>
            <EffectComposer multisampling={0} enableNormalPass={false} enabled={show}>
                <SelectiveBloom
                    lights={[ambientLight as any]}
                    mipmapBlur
                    intensity={_intensity[hovered ? "on" : "off"]}
                    luminanceSmoothing={0}
                    height={0.5}
                    luminanceThreshold={_lumThres[hovered ? "on" : "off"]}
                    radius={_radius[hovered ? "on" : "off"]}
                    levels={8}
                />
                <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
            </EffectComposer>
            <Select
                enabled={show}
            >
                {material && <Icosahedron
                    ref={nucleus as any}
                    material={material}
                    args={[1.5, 5]}
                    position={[0, 0, 0]}
                    scale={springs.scale}
                    onPointerEnter={() => {
                        api.start({
                            timeScalar: hoverTimeScalar,
                            morphScalar: hoverMorphScalar,
                            scale: hoverScale,
                            metalness: _metalness.on
                        });
                        setHovered(true);
                    }}
                    onPointerLeave={() => {
                        api.start({
                            timeScalar: show ? heroTimeScalar : descTimeScalar,
                            morphScalar: show ? heroMorphScalar : descMorphScalar,
                            scale: show ? heroScale : descScale,
                            metalness: _metalness.off
                        });
                        setHovered(false);
                    }}
                />}
                <AnimatedMeshDistortMaterial
                    ref={setMaterial as any}
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
            </Select>
        </Selection>
    );
};

Nucleus.displayName = "Nucleus";

export default Nucleus;
