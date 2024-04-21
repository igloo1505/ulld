import { PathManagerProps } from "../src/buildClasses/pathManager.js";
export const testTargetRootPath =
    "/Users/bigsexy/Desktop/currentProjects/ulld/apps/build-sandbox/";

export const testValidPlugins = [
    {
        name: "@ulld/navigation",
        slot: "navigation",
    },
    {
        name: "@ulld/equations",
        slot: "math",
    },
];
export const testInvalidPlugins = ["dfajddadfgadg", "next", "dayjs"];

export const testMergeManagerProps = (
    validPlugins: boolean = true,
): PathManagerProps => {
    return {
        targetRootPath: testTargetRootPath,
        plugins: validPlugins ? testValidPlugins.map((p) => p.name) : testInvalidPlugins,
    };
};
