import { globSync } from "glob";
import { getRepoPaths, readJsonData } from "./getRepoPaths";
import path from 'path'
import { FileData } from "@ulld/utilities/fileClass";
import fs from 'fs'


interface ComponentData {
    slot: string;
    subSlot: string;
    type: "page" | "component" | "embeddable";
}


export const getFlattenedComponents = () => {
    const paths = getRepoPaths();
    const slotMap = readJsonData(paths.slotMap);
    const buildData = readJsonData(paths.buildData);

    let components: ComponentData[] = [];

    for (const slot in slotMap) {
        for (const subSlot in slotMap[slot]) {
            components.push({
                ...slotMap[slot][subSlot],
                slot,
                subSlot,
            });
        }
    }
    return components;
};


export const getTypesExportString = (rootDir: string, outputPath: string, glob: string = "**", write: boolean = true) => {
    let importString = globSync(glob, {
        cwd: rootDir
    }).filter((f) => Boolean(fs.statSync(path.join(rootDir, f)).isFile())).map((f) => {
        let importPath = path.relative(path.dirname(outputPath), path.join(rootDir, f));
    return `export type * from "${importPath.startsWith(".") ? importPath : `./${importPath}`}";` }).join("\n")

    if(write){
        let file = new FileData(outputPath, false)
        file.writeContent(importString)
    }

}
