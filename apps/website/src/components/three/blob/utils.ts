import { getSceneRotation, normalize, rotateVector } from "#/lib/vectorUtils";
import { LandingSection } from "#/types/landingSection";
import { RootState } from "@react-three/fiber";
import type { useViewport } from "@ulld/hooks/useViewport";
import { Vector3 } from "three";

export const randomPointSphere = (radius: number) => {
    let theta = 2 * Math.PI * Math.random();
    let phi = Math.acos(2 * Math.random() - 1);
    let dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
    let dy = 0 + radius * Math.sin(phi) * Math.sin(theta);
    let dz = 0 + radius * Math.cos(phi);
    return new Vector3(dx, dy, dz);
};

export const getPointArray = (radius: number, n: number = 50) => {
    let points: number[] = [];
    Array(n)
        .fill(0)
        .forEach(() => {
            let theta = 2 * Math.PI * Math.random();
            let phi = Math.acos(2 * Math.random() - 1);
            points.push(0 + radius * Math.sin(phi) * Math.cos(theta));
            points.push(0 + radius * Math.sin(phi) * Math.sin(theta));
            points.push(0 + radius * Math.cos(phi));
        });
    return points;
};

/* @ts-ignore */
export const makeBuffer = (...args: any) => Float32Array.from(...args);
export type Pos = [number, number, number];
export interface GeoData {
    nucleusPosition: Pos;
    nucleusTimeScalar: number;
    nucleusMorphScalar: number;
}



export const geoDataMap: {
    [k in LandingSection]: (
        viewport: ReturnType<typeof useViewport>,
        rootState?: RootState,
    ) => GeoData;
} = {
    hero: (vp) => {
        return {
            nucleusPosition: [0, 0, 0],
            nucleusMorphScalar: 3,
            nucleusTimeScalar: 1,
        };
    },
    description: (vp, state) => {
        const theta = getSceneRotation(state);
        const scalar = 8.5
        const rotationMatrix = rotateVector(theta, [scalar, scalar / (vp?.window.aspectRatio || 1), 0]);
        return {
            nucleusPosition: rotationMatrix,
            nucleusMorphScalar: 2,
            nucleusTimeScalar: 2,
        };
    },
};
