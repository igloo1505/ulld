import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build.js";
import { getDevData } from "../utils/getDevData.js";

/** @alpha */
export const createBaseProject = async (build: UlldBuildProcess, options: OptionValues) => {
    let d = getDevData();
    return d.workingOffline ? true : await build.createBaseProject();
};
