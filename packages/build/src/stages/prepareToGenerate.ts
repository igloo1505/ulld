import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build.js";

export const prepareToGenerate = async (build: UlldBuildProcess, options: OptionValues) => {
        build.convertSlotsToPlugins()
        build.validateImportNames()
}
