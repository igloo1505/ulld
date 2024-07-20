import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build";
import { getDevData } from "../utils/getDevData";

export const installDependencies = async (build: UlldBuildProcess, options: OptionValues) => {
       let d = getDevData()
        !d.workingOffline && await build.packageJson.installDependencies(); //beta
}
