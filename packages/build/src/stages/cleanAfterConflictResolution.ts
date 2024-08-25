import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build.js";

export const cleanAfterConflictResolution = async (build: UlldBuildProcess, options: OptionValues) => {
        build.removeUnusablePlugins() // alpha
}
