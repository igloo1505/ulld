import path from "path";
import fs from "fs";

export const getRepoPaths = () => {
    return {
        slotMap: path.join(
            __dirname,
            "../packages/utilities/src/utils/slotMap.json",
        ),
        buildData: path.join(
            __dirname,
            "../packages/utilities/src/utils/buildStaticData.json",
        ),
        rootPackageJson: path.join(__dirname, "../package.json"),
        tempDir: path.join(__dirname, "./__temp__/"),
    };
};

export const writeJsonData = (data: string | object, filePath: string) => {
    let d = typeof data === "string" ? data : JSON.stringify(data, null, 4);
    return fs.writeFileSync(filePath, d, { encoding: "utf-8" });
};

export const readJsonData = (filePath: string) => {
    if(!fs.existsSync(filePath)){
        throw new Error(`File path ${filePath} does not exist.`)
    }
    return JSON.parse(fs.readFileSync(filePath, {encoding: "utf-8"}))
}

export const writeSlotMapData = (data: string | object) => {
    return writeJsonData(data, getRepoPaths().slotMap);
};
