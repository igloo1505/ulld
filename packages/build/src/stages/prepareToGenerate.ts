import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build";

export const prepareToGenerate = async (build: UlldBuildProcess, options: OptionValues) => {
        build.convertSlotsToPlugins()
        build.validateImportNames()
}
