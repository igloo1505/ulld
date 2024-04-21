import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { createNoise3D, createNoise4D } from "simplex-noise";
import type { IcosahedronGeometry, Texture } from "three";
import alea from 'alea'

interface BlobNucleusProps {
  texture: Texture;
  morphScale?: number;
}



/* RESUME: Come back here and review this: https://codepen.io/aaroniker/pen/YoqNRB for a much better looking blob animation when finally back on power. */
/* TODO: Swap this out for a different noise function. This is way to pointy, although that might be an issue with the mesh as well. */
const noise4d = createNoise4D(alea("seed"));

const x1 = 0.003
const y1 = 0.003
const z1 = 0.003

const applyScalar = (x: number, y: number, z: number, ds: number): [number, number, number] => {
    const vec = [x,y,z]
    const mag = Math.sqrt(vec[0]**2 + vec[1]**2 + vec[2]**2)
    const norm = vec.map((n) => n / mag)
     let dx: [number, number, number] = [norm[0] * ds, norm[1] * ds, norm[2] * ds]   
    /* console.log("x, y, z: ", x, y, z) */
    /* console.log("ds: ", ds) */
    /* console.log("dx: ", dx) */
    return dx
    }

export const BlobNucleus = ({ texture, morphScale = 3 }: BlobNucleusProps) => {
  const nucRef = useRef<IcosahedronGeometry>(null!);
  useFrame((state, dt) => {
    const pos = nucRef.current?.getAttribute("position");
    let mi = pos.count;
        console.log("mi: ", mi)
    Array(mi - 1)
      .fill(0)
      .forEach((_, idx: number) => { 
        let x = pos.getX(idx)
        let y = pos.getY(idx)
        let z = pos.getZ(idx)
        const noise = noise4d(
             x += dt * x1, 
             y += dt * y1, 
             z += dt * z1, 
                    dt
            /* state.clock.getElapsedTime() */
           )
                const scalar = applyScalar(x, y, z, noise)
        pos.setXYZ(idx,
            x + scalar[0],
            y + scalar[1],
            z + scalar[2],
        );
      });
    pos.needsUpdate = true
  });
  return (
    <mesh position={[0, 0, 0]}>
      <icosahedronGeometry args={[30, 10]} ref={nucRef} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};

BlobNucleus.displayName = "BlobNucleus";
