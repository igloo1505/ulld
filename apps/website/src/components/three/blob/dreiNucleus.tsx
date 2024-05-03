import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/three";
import { Color, Texture } from "three";
import { MeshDistortMaterial } from "@react-three/drei";

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

const DreiNucleus = ({ texture, show }: BlobNucleusProps) => {
  /* TODO: Come back here and animate this time scalar somehow without needing to re-render 100 times as the value transitions. Not currently working directly in the speed field of the component  */
  const [springs, api] = useSpring(() => {
    return {
      position: [0, 0, 0] as [number, number, number],
      timeScalar: heroTimeScalar,
      morphScalar: heroMorphScalar,
      scale: descScale,
      config: (key) => {
        switch (key) {
          case "scale":
            return {
              friction: 50,
              mass: 3,
            };
          case "position":
            return { mass: 4, friction: 220 };
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
    <animated.mesh
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
      <sphereGeometry args={[1.5, 64, 32]} />
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
        metalness={0}
        /* ior={1} */
        reflectivity={0.45}
        /* iridescence={1} */
        /* iridescenceIOR={1.7} */
        clearcoat={1}
        clearcoatRoughness={0}
        sheen={0.6}
        sheenRoughness={0}
        sheenColor={new Color("#fff")}
        specularIntensity={1}
        attenuationDistance={2}
        /* vertexColors */
      />
    </animated.mesh>
  );
};

DreiNucleus.displayName = "DreiNucleus";

export default DreiNucleus;
