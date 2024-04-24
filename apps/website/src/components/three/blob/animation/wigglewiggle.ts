import { RefObject } from "react";
import { IcosahedronGeometry } from "three";
import { createNoise4D } from "simplex-noise";
import alea from "alea";
import { RootState } from "@react-three/fiber";
import { UseBlobAnimationProps } from "./types";
import { Pos } from "../utils";

const noise3d = createNoise4D(alea("seed"));

const normalize = (dx: number, dy: number, dz: number): {
    x: number,
    y: number,
    z: number,
    mag: number
} => {
    let mag = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    let normal = [dx, dy, dz].map((d) => d / mag);
    return {
        x: normal[0],
        y: normal[1],
        z: normal[2],
        mag: mag,
    };
};

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

const x1 = 0.0003;
const y1 = 0.0003;
const z1 = 0.0003;

const pushRadiusScalar = 5; // Larger number makes radius tighter
const pushForce = 100000;

const getPushMagnitude = (
    x: number,
    y: number,
    z: number,
    mouse: Pos,
): number => {
    const d = Math.sqrt(
        (x - mouse[0]) ** 2 + (y - mouse[1]) ** 2 + (z - mouse[2]) ** 2,
    );
    return pushForce / (d * pushRadiusScalar) ** 2;
};

export const wiggleWiggle = (
    nucleus: RefObject<IcosahedronGeometry>,
    state: RootState,
    dt: number,
    timeScalar: number = 1,
    morphScalar: number = 3,
) => {
    const pos = nucleus.current?.getAttribute("position");
    if (!pos) return;
    let mi = pos.count;
    const r = nucleus.current?.parameters.radius;
    const deltaT = state.clock.getElapsedTime() * 1000;
    Array(mi - 1)
        .fill(0)
        .forEach((_, idx: number) => {
            let x = pos.getX(idx);
            let y = pos.getY(idx);
            let z = pos.getZ(idx);
            const uv = normalize(x, y, z);
            // let mouseUnitVector = mouse ? normalize(...mouse) : {x: 0, y: 0, z: 1, mag: 1};
            // const pushMagnitude = mouse ? getPushMagnitude(x, y, z, mouse) : 0;
            const noise =
                (r || 30) +
                noise3d(
                    (uv.x += deltaT * timeScalar * x1),
                    (uv.y += deltaT * timeScalar * y1),
                    (uv.z += deltaT * timeScalar * z1),
                    dt,
                ) *
                morphScalar;
            const scalar = applyScalar(x, y, z, noise);
            pos.setXYZ(idx, scalar[0], scalar[1], scalar[2]);
        });
    pos.needsUpdate = true;
    nucleus.current?.computeVertexNormals();
};
