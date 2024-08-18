import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build";
import { getDevData } from "../utils/getDevData";
import { writePackageManagerData } from "./writePackageManagerData";

export const installDependencies = async (build: UlldBuildProcess, options: OptionValues) => {
       let d = getDevData()
        await build.gatherPlugins(); // alpha
        let packageManager = build.alreadyProvidedPackageManager ? build.packageManager : undefined 
        writePackageManagerData(build.paths, packageManager || "pnpm")
        !d.workingOffline && await build.packageJson.installDependencies(options.forceLocalSource, packageManager); //beta
        build.revalidatePluginConfigs()
        await build.checkPluginValidity(); //beta
}
