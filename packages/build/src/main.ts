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
        console.log(`gatherAppConfig`)
        await stages.gatherAppConfig(build, options)
        console.log(`installDependencies`)
        await stages.installDependencies(build, options)
        console.log(`resolveConflicts`)
        await stages.resolveConflicts(build, options)
        console.log("cleanAfterConflictResolution")
        await stages.cleanAfterConflictResolution(build, options)
        console.log("prepareToGenerate")
        await stages.prepareToGenerate(build, options)
        let baseApp = await stages.generate(build, options)
        baseApp.cleanUp()
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
})();
