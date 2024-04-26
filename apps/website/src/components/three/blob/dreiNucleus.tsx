import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import { useViewport } from "@ulld/hooks/useViewport";
import { useSearchParams } from "next/navigation";
import { IcosahedronGeometry, Texture } from "three";
import { MeshDistortMaterial } from "@react-three/drei";
import { BlobLayout } from "./types";
import { GeoData } from "./utils";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

interface BlobNucleusProps {
  texture: Texture;
    show: boolean
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
  const viewport = useViewport();
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
  }, [viewport]);

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
        speed={1}
        distort={springs.morphScalar}
        specularIntensity={3}
        reflectivity={0.5}
      />
    </animated.mesh>
  );
};

DreiNucleus.displayName = "DreiNucleus";

export default DreiNucleus;
