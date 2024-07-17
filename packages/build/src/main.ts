import { program } from "commander";
import { verifyDirectory } from "./stages/verifyDirectory";
import fs from "fs";
import { UlldBuildProcess } from "./classes/build";
import { log } from "console";
import { BaseApp } from "./classes/baseApp/baseApp";

const workingOffline = true

program.option("--noPlugins").option("--here");

program.parse();

const options = program.opts();

(async () => {
    try {
        let targetDirectory = await verifyDirectory(options.here);
        if (!targetDirectory || !fs.existsSync(targetDirectory)) {
            log(`You need to specify a directory to continue.`);
            process.exit(1);
        }
        let build = new UlldBuildProcess(targetDirectory);
        let success = false;
        success = workingOffline ? true : await build.createBaseProject(); // alpha
        build.packageJson.gather(); // alpha
        await build.gatherAppConfig(); // beta
        await build.gatherPlugins(); // alpha
        await build.checkPluginValidity(); //beta
        !workingOffline && await build.packageJson.installDependencies(); //beta
        await build.resolveSlotConflicts(); // beta
        await build.resolvePageConflicts(); // beta
        build.removeUnusablePlugins() // alpha
        build.convertSlotsToPlugins()
        // TODO: Add event functions when they are imported here as well.
        build.validateImportNames()
        let baseApp = new BaseApp(build)
        baseApp.generate()
        // await build.applyPages()
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
})();
