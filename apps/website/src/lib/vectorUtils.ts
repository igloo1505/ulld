import { Pos } from "#/components/three/blob/utils";
import { RootState } from "@react-three/fiber";

export type RotationMatrix = [
    [number, number, number],
    [number, number, number],
    [number, number, number],
];

export const normalize = (vector: Pos): Pos => {
    let mag = Math.sqrt(vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2);
    console.log("vector: ", vector);
    return vector.map((a) => a / mag) as Pos;
};

export const getSceneRotation = (state?: RootState): number => {
    if (!state?.scene.rotation) return 1;
    return -Math.atan(
        state.scene.matrixWorld.elements[2] / -state.scene.matrixWorld.elements[0],
    );
};

export const getRotationMatrix = (
    theta: ReturnType<typeof getSceneRotation>,
    axis: "x" | "y" | "z" = "y",
): RotationMatrix => {
    console.log("theta: ", theta);
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    if (axis === "z") {
        return [
            [cos, sin, 0],
            [-sin, cos, 0],
            [0, 0, 1],
        ];
    }
    if (axis === "x") {
        return [
            [1, 0, 0],
            [0, cos, sin],
            [0, -sin, cos],
        ];
    }
    // axis = y
    return [
        [cos, 0, -sin],
        [0, 1, 0],
        [sin, 0, cos],
    ];
};

export const rotateVector = (
    rotation: ReturnType<typeof getSceneRotation>,
    vector: [number, number, number],
): Pos => {
    const rot = getRotationMatrix(rotation, "y");
    const vec: Pos = [
        rot[0].map((r) => r * vector[0]).reduce((a, b) => a + b),
        rot[1].map((r) => r * vector[1]).reduce((a, b) => a + b),
        rot[2].map((r) => r * vector[2]).reduce((a, b) => a + b),
    ];
    return vec;
};
