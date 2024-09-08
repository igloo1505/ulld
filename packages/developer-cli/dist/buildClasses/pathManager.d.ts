import { SharedPath } from "../buildScripts/staticPathData.js";
import { PropertyManager } from "./propertyManager.js";
export type PathManagerProps = {
    targetRootPath: string;
    plugins: string[] | "self";
};
export declare class PathManager extends PropertyManager {
    targetSubPaths: Record<string, string>;
    pluginSubPaths: Record<SharedPath, string>;
    targetRootPath: string;
    hasGathered: boolean;
    constructor({ targetRootPath, plugins }: PathManagerProps);
    pathExists(p: string): boolean;
}
