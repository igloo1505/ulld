import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { createNoise3D, createNoise4D } from "simplex-noise";
import type { IcosahedronGeometry, Texture } from "three";
import alea from "alea";

interface BlobNucleusProps {
    texture: Texture;
    morphScale?: number;
}

/* RESUME: Come back here and review this: https://codepen.io/aaroniker/pen/YoqNRB for a much better looking blob animation when finally back on power. */
const noise3d = createNoise4D(alea("seed"));

const x1 = 0.0003;
const y1 = 0.0003;
const z1 = 0.0003;
const morphScalar = 3

const normalize = (dx: number, dy: number, dz: number) => {
     let mag = Math.sqrt(dx**2 + dy**2 + dz**2) 
    let normal = [dx, dy, dz].map((d) => d / mag)
    return {
        x: normal[0],
        y: normal[1],
        z: normal[2],
        mag: mag
    }
    }

const applyScalar = (
    x: number,
    y: number,
    z: number,
    ds: number,
): [number, number, number] => {
    const vec = [x, y, z];
    const mag = Math.sqrt(vec[0] ** 2 + vec[1] ** 2 + vec[2] ** 2);
    const norm = vec.map((n) => n / mag);
    let dx: [number, number, number] = [norm[0] * ds, norm[1] * ds, norm[2] * ds];
    return dx;
};

export const BlobNucleus = ({ texture, morphScale = 3 }: BlobNucleusProps) => {
    const nucRef = useRef<IcosahedronGeometry>(null!);
    useFrame((state, dt) => {
        const pos = nucRef.current?.getAttribute("position");
        let mi = pos.count;
        const r = nucRef.current?.parameters.radius
        const deltaT = state.clock.getElapsedTime() * 1000
        console.log("mi: ", mi);
        Array(mi - 1)
            .fill(0)
            .forEach((_, idx: number) => {
                let x = pos.getX(idx);
                let y = pos.getY(idx);
                let z = pos.getZ(idx);
                const uv = normalize(x, y, z)
                const noise = r + noise3d(
                    (uv.x += deltaT * x1),
                    (uv.y += deltaT * y1),
                    (uv.z += deltaT * z1),
                    dt,
                    /* state.clock.getElapsedTime() */
                ) * morphScalar
                const scalar = applyScalar(x, y, z, noise);
                pos.setXYZ(idx, scalar[0], scalar[1], scalar[2]);
            });
        pos.needsUpdate = true;
        /* nucRef.current?.up */
        nucRef.current?.computeVertexNormals()
        /* nucRef.current?.computeVertexNormals */
    });
    return (
        <mesh position={[0, 0, 0]}>
            <icosahedronGeometry args={[30, 10]} ref={nucRef} />
            <meshPhongMaterial map={texture} />
        </mesh>
    );
};

BlobNucleus.displayName = "BlobNucleus";
