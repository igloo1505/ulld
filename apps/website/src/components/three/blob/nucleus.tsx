import React, { forwardRef, ForwardedRef, useEffect } from "react";
import { Mesh, type IcosahedronGeometry, type Texture } from "three";
import { BlobLayout } from "./types";
import { GeoData } from "./utils";
import { animated, useSpring } from "@react-spring/three";
import { useViewport } from "@ulld/hooks/useViewport";
import { useSearchParams } from "next/navigation";

interface BlobNucleusProps {
  texture: Texture;
  morphScalar?: number;
  timeScalar?: number;
  layout?: BlobLayout;
  geoData: GeoData;
  setHovered: (hovered: boolean) => void;
}

/* RESUME: Come back here and review this: https://codepen.io/aaroniker/pen/YoqNRB for a much better looking blob animation when finally back on power. */

const detail = 10;
const radius = 30;

const heroMorphScalar = 0.5;
const descMorphScalar = 0.3;
const hoverMorphScalar = 0.3;

const heroTimeScalar = 1;
const descTimeScalar = 2;
const hoverTimeScalar = 2;

const heroRadius = 30;
const descRadius = 20;
const hoverRadius = 25;

export const BlobNucleus = forwardRef(
  (
    { texture, geoData, setHovered }: BlobNucleusProps,
    ref: ForwardedRef<IcosahedronGeometry>,
  ) => {
    const viewport = useViewport();
    const sp = useSearchParams();
    const isHero = (sp.get("section") || "hero") === "hero";
    const [springs, api] = useSpring(() => {
      return {
        position: geoData.nucleusPosition,
        timeScalar: heroTimeScalar,
        morphScalar: heroMorphScalar,
        radius: heroRadius,
        config: {
          mass: 4,
          friction: 10,
        },
      };
    }, [viewport, geoData]);

    useEffect(() => {
      if (isHero) {
        api.start({
          timeScalar: heroTimeScalar,
          morphScalar: heroMorphScalar,
          radius: heroRadius,
        });
      } else {
        api.start({
          timeScalar: descTimeScalar,
          morphScalar: descMorphScalar,
          radius: descRadius,
        });
      }
    }, [isHero]);

    return (
      <animated.mesh
        position={springs.position}
        scale={1}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        /* onPointerEnter={() => { */
        /*   api.start({ */
        /*     timeScalar: hoverTimeScalar, */
        /*     morphScalar: hoverMorphScalar, */
        /*   }); */
        /* }} */
        /* onPointerLeave={() => { */
        /*   api.start({ */
        /*     timeScalar: isHero ? heroTimeScalar : descTimeScalar, */
        /*     morphScalar: isHero ? heroMorphScalar : descMorphScalar, */
        /*   }); */
        /* }} */
      >
        <animated.icosahedronGeometry
          args={[30, detail]}
          ref={ref}
        />
        <meshPhongMaterial map={texture} />
      </animated.mesh>
    );
  },
);

BlobNucleus.displayName = "BlobNucleus";
