import { program } from "commander";
import { log } from "console";
import { stages } from "./stages/main";
import { EnvManager } from "./classes/envManager";

const optionMap = {
    useLocal: "--use-local",
    here: "--here",
    noInstall: "--no-install",
    forceLocalSource: "--force-local-source"
} as const;

program 
    .option(optionMap.here)
    .option(optionMap.useLocal)
    .option(optionMap.forceLocalSource);
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
    if (!opts || !opts.length) return true;
    return !opts.some((x) => options[x]);
};

(async () => {
    try {
        let build = await stages.verifyDirectory(options.here);
        if (avoidIfInOpts({ opts: ["useLocal"] })) {
            await stages.createBaseProject(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            console.log(`gatherAppConfig`);
            await stages.gatherAppConfig(build, options);
        }
        if (avoidIfInOpts({ opts: ["noInstall"] })) {
            console.log(`installDependencies`);
            await stages.installDependencies(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            console.log(`resolveConflicts`);
            await stages.resolveConflicts(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            console.log("cleanAfterConflictResolution");
            await stages.cleanAfterConflictResolution(build, options);
        }
        if (avoidIfInOpts({ opts: [] })) {
            console.log("prepareToGenerate");
            await stages.prepareToGenerate(build, options);
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
