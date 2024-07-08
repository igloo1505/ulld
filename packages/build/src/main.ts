// import dotenv from "dotenv";
// dotenv.config({path: "../.env.local"})
import { program } from "commander";
import { verifyDirectory } from "./stages/verifyDirectory";
import fs from "fs";
import { UlldBuildProcess } from "./classes/build";
import { log } from "console";

const workingOffline = false

program.option("--noPlugins").option("--here");

program.parse();

const options = program.opts();

(async () => {
    try {
        console.log("STOP STOP STOP!!!! Push the existing updateed slots to github before overwriting it with a new build attempt! That took all fucking afternoon. Don't risk running another script until that's hosted remotely!!!!")
        // let targetDirectory = await verifyDirectory(options.here);
        // if (!targetDirectory || !fs.existsSync(targetDirectory)) {
        //     log(`You need to specify a directory to continue.`);
        //     process.exit(1);
        // }
        // let build = new UlldBuildProcess(targetDirectory);
        // let success = false;
        // success = workingOffline ? true : await build.createBaseProject(); // alpha
        // build.packageJson.gather(); // alpha
        // await build.gatherAppConfig(); // beta
        // await build.gatherPlugins(); // alpha
        // await build.checkPluginValidity(); //beta
        // !workingOffline && await build.packageJson.installDependencies(); //beta
        // await build.resolveSlotConflicts(); // beta
        // await build.resolvePageConflicts(); // beta
        // build.removeUnusablePlugins() // alpha
        

        // build.convertSlotsToPlugins()
        // await build.applyPages()
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
})();
