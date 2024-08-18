import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build";

export const gatherAppConfig = async (build: UlldBuildProcess, options: OptionValues) => {
        build.packageJson.gather(); // alpha
        await build.gatherAppConfig(); // beta
}
