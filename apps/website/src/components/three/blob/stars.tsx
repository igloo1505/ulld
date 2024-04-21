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


interface BlobStarProps {
  texture: Texture;
  n?: number;
  radius?: number;
  center?: Vector3;
}


export const BlobStars = ({
  texture,
  n = 50,
  radius = 150,
  center = new Vector3(0, 0, 0),
}: BlobStarProps) => {
    const starRef = useRef<BufferGeometry>(null!)

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
      <pointsMaterial
        size={5}
        color="#fff"
        transparent={true}
        opacity={0.8}
        map={texture}
        blending={AdditiveBlending}
        depthWrite={false}
        /* attach="material" */
        /* args={[bufferGeo]} */
      ></pointsMaterial>
    </points>
  );
};

BlobStars.displayName = "BlobStars";
