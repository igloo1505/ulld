import { getDevData } from "../utils/getDevData.js";
/** @alpha */
export const createBaseProject = async (build, options) => {
    let d = getDevData();
    return d.workingOffline ? true : await build.createBaseProject();
};
