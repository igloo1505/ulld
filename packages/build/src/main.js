import { program } from "commander";
import { log } from "console";
import { stages } from "./stages/main.js";
import { optionMap, stringOptionMap } from "./utils/options.js";
program
    .option(optionMap.here)
    .option(optionMap.useLocal)
    .option(optionMap.forceLocalSource)
    .option(optionMap.pnpm)
    .option(optionMap.npm)
    .option(optionMap.yarn)
    .option(optionMap.genDatabase)
    .option(stringOptionMap.branch, "Branch to clone", "main");
// option("--noPlugins")
// .option("--from-install")
program.parse();
const options = program.opts();
const avoidIfInOpts = ({ opts, other, options }) => {
    if (other && other.length && other.some((x) => x)) {
        return false;
    }
    if (!opts || !opts.length) {
        return true;
    }
    return !opts.some((x) => options[x]);
};
export const runBuild = async (options) => {
    try {
        let build = await stages.verifyDirectory(options);
        build.applyPackageManagerOptions(options);
        if (avoidIfInOpts({ opts: ["useLocal"], options })) {
            build.logDebug(`creating base project`);
            await stages.createBaseProject(build, options);
        }
        if (avoidIfInOpts({ opts: [], options })) {
            build.logDebug(`gatherAppConfig`);
            await stages.gatherAppConfig(build, options);
        }
        if (avoidIfInOpts({ opts: ["noInstall"], options })) {
            build.logDebug(`installDependencies`);
            await stages.installDependencies(build, options);
        }
        if (avoidIfInOpts({ opts: [], options })) {
            build.logDebug(`resolveConflicts`);
            await stages.resolveConflicts(build, options);
        }
        if (avoidIfInOpts({ opts: [], options })) {
            build.logDebug("cleanAfterConflictResolution");
            await stages.cleanAfterConflictResolution(build, options);
        }
        if (avoidIfInOpts({ opts: [], options })) {
            build.logDebug("prepareToGenerate");
            await stages.prepareToGenerate(build, options);
        }
        if (avoidIfInOpts({ opts: [], options })) {
            let baseApp = await stages.generate(build, options);
            baseApp.cleanUp();
        }
        console.log(`That's it! You're all set to run your app. Checkout the docs for more information.`);
    }
    catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
};
