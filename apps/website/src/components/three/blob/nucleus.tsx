import React, { useState, RefObject } from "react";
import { animated, useSpring } from "@react-spring/three";
import { Color, type IcosahedronGeometry, Texture, AmbientLight } from "three";
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
    nucleus: RefObject<IcosahedronGeometry>;
    ambientLight: RefObject<AmbientLight>;
    frameloop: "always" | "never";
}

const heroScale = 1;
const descScale = 0;
const hoverScale = 0.85;

const _radius = { on: 1, off: 0 };
const _metalness = { on: 4.5, off: 1.9 };
const _intensity = { on: 2, off: 1 };
const _lumThres = { on: 0.2, off: 0 };

const pulseScalar = 1.2;
const pulseDuration = 5000;

const Nucleus = ({
    texture,
    show,
    nucleus,
    ambientLight,
    frameloop,
}: BlobNucleusProps) => {
    const [hovered, setHovered] = useState(false);
    const [material, setMaterial] = useState();
    const [springs, api] = useSpring(() => {
        return {
            ...(!Boolean(show && material)
                ? {
                    scale: descScale,
                    metalness: _metalness.off,
                }
                : {
                    scale: !show ? descScale : hovered ? hoverScale : 1,
                    metalness: !show
                        ? _metalness.off
                        : _metalness[hovered ? "on" : "off"],
                    onRest: () => {
                        api.start({
                            to: async (next) => {
                                await next({
                                    scale: pulseScalar,
                                    metalness: _metalness.off * pulseScalar,
                                });
                                await next({
                                    scale: heroScale,
                                    metalness: _metalness.off,
                                });
                            },
                            loop: true,
                            cancel: hovered || !show,
                            config: {
                                duration: pulseDuration,
                            },
                        });
                    },
                }),
            config: (key) => {
                switch (key) {
                    case "scale":
                        return {
                            friction: 50,
                            mass: 3,
                            bounce: 0,
                        };
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
    }, [hovered, show, material]);

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
            <Select enabled={show}>
                {material && (
                    <Icosahedron
                        ref={nucleus as any}
                        material={material}
                        args={[1.5, 5]}
                        position={[0, 0, 0]}
                        scale={frameloop === "never" ? 0 : springs.scale}
                        onPointerEnter={() => {
                            api.stop();
                            setHovered(true);
                        }}
                        onPointerLeave={() => {
                            setHovered(false);
                        }}
                    />
                )}
                <AnimatedMeshDistortMaterial
                    ref={setMaterial as any}
                    map={texture}
                    time={5}
                    color={new Color("#0ba5e9")}
                    speed={1}
                    distort={0.4}
                    specularColor={new Color("#000")}
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
