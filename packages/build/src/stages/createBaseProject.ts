import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build";
import { getDevData } from "../utils/getDevData";

/** @alpha */
export const createBaseProject = async (build: UlldBuildProcess, options: OptionValues) => {
    let d = getDevData();
    return d.workingOffline ? true : await build.createBaseProject();
};
