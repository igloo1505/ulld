import { Points } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import {
  AdditiveBlending,
  MathUtils,
  Points as ThreePoints,
  Quaternion,
  Texture,
  Vector3,
} from "three";
import { makeBuffer } from "./utils";
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
  size: _size = 5,
  n = 50,
}: AstralBodiesProps) => {
  const astralBodies = useRef<ThreePoints>(null!);
  const [positionA, setPositionA] = useState(posA(n));
  const [positionB, setPositionB] = useState(posB(n));
  const [positionFinal] = useState(() => positionB.slice(0));
  const [size] = useState(() =>
    makeBuffer({ length: n }, () => Math.random() * 0.2),
  );
  const [rotations, setRotations] = useState(() => {
    return makeBuffer({ length: n }, () => Math.random() * Math.PI);
  });

  const [rotationsB, setRotationsB] = useState(() => {
    return makeBuffer({ length: n }, () => Math.random() * Math.PI * 2);
  });

  const [rotationsFinal, setRotationsFinal] = useState(() => {
    return rotationsB.slice(0);
  });

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
    astralBodies.current.rotateZ(Math.PI * 0.002 * t)
    buffer.lerp(rotations, rotationsB, rotationsFinal, t);
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
    if (section === "hero") {
      api.start({
        opacity: 0.8,
        size: _size,
      });
    } else {
      api.start({
        opacity: 0,
        size: 0,
      });
    }
  }, [section]);

  return (
    <Points
      positions={positionFinal}
      sizes={size}
      ref={astralBodies}
        /* rotation={rotations} */
      /* rotateZ={rotations} */
      /* colors={color}  */
    >
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
