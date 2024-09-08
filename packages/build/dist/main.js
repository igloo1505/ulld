import { log } from "console";
import { cleanAfterConflictResolution } from "./stages/cleanAfterConflictResolution.js";
import { createBaseProject } from "./stages/createBaseProject.js";
import { gatherAppConfig } from "./stages/gatherConfig.js";
import { generate } from "./stages/generate.js";
import { installDependencies } from "./stages/preModuleInstall.js";
import { prepareToGenerate } from "./stages/prepareToGenerate.js";
import { resolveConflicts } from "./stages/resolveConflicts.js";
import { verifyDirectory } from "./stages/verifyDirectory.js";
import notifier from "node-notifier";
import path from 'path';
const avoidIfInOpts = ({ opts, other, options }) => {
    if (other && other.length && other.some((x) => x)) {
        return false;
    }
    if (!opts || !opts.length) {
        return true;
    }
    return !opts.some((x) => options[x]);
};
export const runUlldBuild = async (options, buildParams) => {
    try {
        let build = await verifyDirectory(options, buildParams.branch);
        build.applyPackageManagerOptions(options);
        build.logDebug(`creating base project`);
        await createBaseProject(build, options);
        build.logDebug(`gatherAppConfig`);
        await gatherAppConfig(build, options);
        build.logDebug(`installDependencies`);
        await installDependencies(build, options);
        build.logDebug(`resolveConflicts`);
        await resolveConflicts(build, options);
        build.logDebug("cleanAfterConflictResolution");
        await cleanAfterConflictResolution(build, options);
        build.logDebug("prepareToGenerate");
        await prepareToGenerate(build, options);
        if (avoidIfInOpts({ opts: [], options })) {
            let baseApp = await generate(build, options);
            baseApp.cleanUp();
        }
        notifier.notify({
            title: "Woah",
            message: `I know that was a lot, but you're all set! You can now run your app with the 'ulld run' command. Checkout the docs for more information.`,
            sound: true,
            icon: path.join(__dirname, "ulldLogo.png"),
            wait: true
        });
    }
    catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
};
