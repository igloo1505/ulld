import {
    SharedPath,
    pluginSubPaths,
    targetSubPaths,
} from "../buildScripts/staticPathData";
import fs from "fs";
import path from "path";
import { PropertyManager } from "./propertyManager";


export type PathManagerProps = {
        targetRootPath: string
        plugins: string[] | "self"
}


export class PathManager extends PropertyManager {
    targetSubPaths = targetSubPaths;
    pluginSubPaths = pluginSubPaths;
    targetRootPath: string;
    hasGathered: boolean = false
    constructor({ targetRootPath, plugins = "self" }: PathManagerProps) {
        super()
        this.targetRootPath = targetRootPath;
        for (const k in this.targetSubPaths) {
            this.targetSubPaths[k] = path.join(
                targetRootPath,
                this.targetSubPaths[k],
            );
        }
        if (plugins === "self") {
            for (const k in this.pluginSubPaths) {
                this.pluginSubPaths[k as SharedPath] = path.join(
                    targetRootPath,
                    this.pluginSubPaths[k as SharedPath],
                );
            }
        }
    }
    pathExists(p: string) {
        return fs.existsSync(p);
    }
}
