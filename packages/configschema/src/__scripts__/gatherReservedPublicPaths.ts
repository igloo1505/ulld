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
    // const outputPath = path.join(
    //     __dirname,
    //     "../../../../apps/website/content/embeddedDocs/developer/reservedPublicDir.txt",
    // );
    // let s = paths.map((p) => `- \`${p}\``).join("\n");

    // fs.writeFileSync(outputPath, s, { encoding: "utf-8" });

    return paths;
};
