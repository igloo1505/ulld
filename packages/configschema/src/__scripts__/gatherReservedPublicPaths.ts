import path from "path";
import fs from "fs";
import { globSync } from "glob";

export const gatherReservedPublicPaths = (
    root: string = process.env.ULLD_TEST_ROOT,
) => {
    const publicDir = path.join(root, "public");

    const paths = globSync("*", {
        cwd: publicDir,
    }).filter((p) => fs.statSync(path.join(publicDir, p)).isDirectory());

    return paths;
};
