import fs from "fs";

const splitPathAndFile = (path: string) => {
    const suffixes = [".ts", ".tsx", ".ulld.json", ".json", ".js", ".jsx"];
    const idx = path.lastIndexOf("/");
    const dirSplit = path.slice(0, idx);
    const fileSplit = path.slice(idx, path.length);
    for (const s of suffixes) {
        if (path.endsWith(s)) {
            return {
                dir: dirSplit,
                file: fileSplit,
                suffix: s,
                pathType: "file" as "file",
            };
        }
    }
    return {
        dir: path,
        file: undefined,
        suffix: undefined,
        pathType: "dir" as "dir",
    };
};

export const createPathIfNotExists = async (path: string) => {
    const p = splitPathAndFile(path);
    if (!fs.existsSync(p.dir)) {
        await fs.promises.mkdir(p.dir, { recursive: true });
    }
};
