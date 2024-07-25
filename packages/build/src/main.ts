import { program } from "commander";
import { log } from "console";
import { stages } from "./stages/main";


program
    .option("--here")
    // option("--noPlugins")
    // .option("--from-install")

program.parse();

const options = program.opts();



(async () => {
    try {
        let build = await stages.verifyDirectory(options.here)
        await stages.createBaseProject(build, options)
        await stages.gatherAppConfig(build, options)
        await stages.installDependencies(build, options)
        await stages.resolveConflicts(build, options)
        await stages.cleanAfterConflictResolution(build, options)
        await stages.prepareToGenerate(build, options)
        let baseApp = await stages.generate(build, options)
        baseApp.cleanUp()
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
})();
