"use client";
import { Points, Stats } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AdditiveBlending,
  MathUtils,
  Points as ThreePoints,
  Quaternion,
  Texture,
  Vector3,
  TextureLoader,
  SphereGeometry,
  InstancedBufferGeometry,
  MeshPhysicalMaterial,
  InstancedMesh,
  Matrix4,
} from "three";
import { forLoopUtil, makeBuffer } from "./utils";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
/* import * as buffer from "maath/buffer"; */
import * as misc from "maath/misc";
import { LandingSection } from "#/types/landingSection";
import { useSpring, animated } from "@react-spring/three";
import colorTexture from "./assets/orbit/ground_0010_color_1k.jpg";

interface OrbitingStarsProps {
  n?: number;
  texture: Texture;
  section: LandingSection;
  radius?: number;
  size?: number;
  spread?: number;
  timeScalar?: number;
  widthSegments?: number;
  heightSegments?: number;
  sizeSpread?: number;
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

export const OrbitingStars = ({
  section,
  radius = 20,
  spread = 3,
  size: _size = 5,
  timeScalar = 0.05,
  widthSegments = 5,
  heightSegments = 5,
  sizeSpread = 2,
  n = 50,
}: OrbitingStarsProps) => {
  const orbitingStars = useRef<InstancedMesh>(null!);
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

  useFrame((state, dt) => {
    orbitingStars.current.rotateY(Math.PI * dt * timeScalar);
  });

  const [springs, api] = useSpring(() => {
    return {
      opacity: 0.8,
      scale: 1,
      config: {
        mass: 4,
        friction: 200,
      },
    };
  }, []);

  useEffect(() => {
    if (section === "hero") {
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
          mass: 4,
          friction: 20,
        },
      });
    }
  }, [section]);
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
    <>
      <Stats showPanel={1} />
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
        <meshPhysicalMaterial map={colorTextureMap} />
      </animated.instancedMesh>
    </>
  );
};

OrbitingStars.displayName = "OrbitingStars";
