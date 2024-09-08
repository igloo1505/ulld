import { pluginSubPaths, targetSubPaths, } from "../buildScripts/staticPathData.js";
import fs from "fs";
import path from "path";
import { PropertyManager } from "./propertyManager.js";
export class PathManager extends PropertyManager {
    targetSubPaths = targetSubPaths;
    pluginSubPaths = pluginSubPaths;
    targetRootPath;
    hasGathered = false;
    constructor({ targetRootPath, plugins = "self" }) {
        super();
        this.targetRootPath = targetRootPath;
        for (const k in this.targetSubPaths) {
            this.targetSubPaths[k] = path.join(targetRootPath, this.targetSubPaths[k]);
        }
        if (plugins === "self") {
            for (const k in this.pluginSubPaths) {
                this.pluginSubPaths[k] = path.join(targetRootPath, this.pluginSubPaths[k]);
            }
        }
    }
    pathExists(p) {
        return fs.existsSync(p);
    }
}
