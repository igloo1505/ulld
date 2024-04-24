import React, { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  InstancedMesh,
  MathUtils,
  Object3D,
  PointsMaterial,
  ShapeGeometry,
  Sphere,
  Texture,
  Vector3,
} from "three";
import { getPointArray, randomPointSphere } from "./utils";
import { useFrame } from "@react-three/fiber";
import { useSection } from "#/components/pageSpecific/landing/useSection";
import { useSearchParams } from "next/navigation";
import { animated, useSpring } from "@react-spring/three";


interface BlobStarProps {
  texture: Texture;
  n?: number;
  center?: Vector3;
}

const radius = 150

export const BlobStars = ({
  texture,
  n = 50,
  center = new Vector3(0, 0, 0),
}: BlobStarProps) => {
    const starRef = useRef<BufferGeometry>(null!)
    const sp = useSearchParams()

    const section = useMemo(()  => sp.get("section"), [sp])

    const [springs, api] = useSpring(
        () => ({
            opacity: section === "hero" ? 0.8 : 0,
            config: {
                friction: 200,
                mass: 3,
            },
        }),
        [],
    );

    useEffect(() => {
        if (section === "hero") {
            api.start({
                opacity: 0.8,
            });
        } else {
            api.start({
                opacity: 0,
            });
        }
    }, [section]);


  const bufferGeo = useMemo(() => {
    let vertices: number[] = getPointArray(radius, n)
    const b = new BufferGeometry()
    b.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(vertices), 3),
    );
    starRef.current = b
    return b;
  }, [n]);




  return (
    <points 
        args={[bufferGeo]}
        >
      <animated.pointsMaterial
        size={5}
        color="#fff"
        transparent={true}
        opacity={springs.opacity}
        map={texture}
        blending={AdditiveBlending}
        depthWrite={false}
        /* attach="material" */
        /* args={[bufferGeo]} */
      />
    </points>
  );
};

BlobStars.displayName = "BlobStars";
