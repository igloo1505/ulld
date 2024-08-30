import { log } from "console";
import { stages } from "./stages/main.js";
import { BuildOptionsType, optionMap } from "./utils/options.js";
import { BuildConfig } from "./types.js";
import notifier from "node-notifier"
import path from 'path'

interface AvoidConfig {
    opts?: (keyof typeof optionMap)[];
    other?: boolean[];
    options: BuildOptionsType;
}

const avoidIfInOpts = ({ opts, other, options }: AvoidConfig): boolean => {
    if (other && other.length && other.some((x) => x)) {
        return false;
    }
    if (!opts || !opts.length) {
        return true;
    }
    return !opts.some((x) => options[x]);
};

export const runUlldBuild = async (
    options: BuildOptionsType,
    buildParams: BuildConfig,
) => {
    try {
        let build = await stages.verifyDirectory(options, buildParams.branch);
        build.applyPackageManagerOptions(options);
        build.logDebug(`creating base project`);
        await stages.createBaseProject(build, options);
        build.logDebug(`gatherAppConfig`);
        await stages.gatherAppConfig(build, options);
        build.logDebug(`installDependencies`);
        await stages.installDependencies(build, options);
        build.logDebug(`resolveConflicts`);
        await stages.resolveConflicts(build, options);
        build.logDebug("cleanAfterConflictResolution");
        await stages.cleanAfterConflictResolution(build, options);
        build.logDebug("prepareToGenerate");
        await stages.prepareToGenerate(build, options);

        if (avoidIfInOpts({ opts: [], options })) {
            let baseApp = await stages.generate(build, options);
            baseApp.cleanUp();
        }
        notifier.notify({
            title: "Woah",
            message: `I know that was a lot, but you're all set! You can now run your app with the 'ulld run' command. Checkout the docs for more information.`,
            sound: true,
            icon: path.join(__dirname, "ulldLogo.png"),
            wait: true
        })
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
};
