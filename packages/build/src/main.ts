import { program } from "commander";
import { log } from "console";
import { stages } from "./stages/main.js";
import { cleanAfterConflictResolution } from "./stages/cleanAfterConflictResolution.js";
import { createBaseProject } from "./stages/createBaseProject.js";
import { gatherAppConfig } from "./stages/gatherConfig.js";
// import { generate } from "./stages/generate.js";
import { installDependencies } from "./stages/preModuleInstall.js";
import { prepareToGenerate } from "./stages/prepareToGenerate.js";
import { resolveConflicts } from "./stages/resolveConflicts.js";
// import { verifyDirectory } from "./stages/verifyDirectory.js";
import { optionMap, stringOptionMap } from "./utils/options.js";

program
    .option(optionMap.here)
    .option(optionMap.useLocal)
    .option(optionMap.forceLocalSource)
    .option(optionMap.pnpm)
    .option(optionMap.npm)
    .option(optionMap.yarn)
    .option(stringOptionMap.maxConcurrent, "Max Concurrent process", "10")
    .option(stringOptionMap.branch, "Branch to clone", "main")
// option("--noPlugins")
// .option("--from-install")

program.parse();

const options = program.opts();

interface AvoidConfig {
    opts?: (keyof typeof optionMap)[];
    other?: boolean[];
}

const avoidIfInOpts = ({ opts, other }: AvoidConfig): boolean => {
    if (other && other.length && other.some((x) => x)) {
        return false;
    }
    if (!opts || !opts.length) {
        return true;
    }
    return !opts.some((x) => options[x]);
};



(async () => {
    try {
        let build = await stages.verifyDirectory(options);
        build.applyPackageManagerOptions(options);
        if (avoidIfInOpts({ opts: ["useLocal"] })) {
            build.logDebug(`creating base project`);
            await createBaseProject(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            build.logDebug(`gatherAppConfig`);
            await gatherAppConfig(build, options);
        }
        if (avoidIfInOpts({ opts: ["noInstall"] })) {
            build.logDebug(`installDependencies`);
            await installDependencies(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            build.logDebug(`resolveConflicts`);
            await resolveConflicts(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            build.logDebug("cleanAfterConflictResolution");
            await cleanAfterConflictResolution(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            build.logDebug("prepareToGenerate");
            await prepareToGenerate(build, options);
        }

        if (avoidIfInOpts({ opts: [] })) {
            let baseApp = await stages.generate(build, options);
            baseApp.cleanUp();
        }
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
})();
