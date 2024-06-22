import "dotenv/config";
import { program } from "commander";
import { verifyDirectory } from "./stages/verifyDirectory";
import fs from "fs";
import { UlldBuildProcess } from "./classes/build";
import { log } from "console";

program
    .option("--noPlugins")
    .option("--here")

program.parse();



const options = program.opts();

(async () => {
    try {
        let targetDirectory = await verifyDirectory(options.here);
        if (!targetDirectory || !fs.existsSync(targetDirectory)) {
            log(`You need to specify a directory to continue.`);
            process.exit(1)
        }
        let build = new UlldBuildProcess(targetDirectory);
        let success = await build.createBaseProject(); // alpha
        if (success) {
            build.packageJson.gather() // alpha
            await build.gatherAppConfig(); // beta
            await build.gatherPlugins();
            await build.checkPluginValidity()
            await build.packageJson.installDependencies();
            await build.resolveSlotConflicts()
        }
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
})();
