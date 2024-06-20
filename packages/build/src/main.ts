import 'dotenv/config'
import { program } from "commander";
import { verifyDirectory } from "./stages/verifyDirectory";
import chalk from "chalk";
import { cloneBaseRepo } from "./stages/cloneRepo";
import fs from 'fs'

program.option("--noPlugins").option("--here");

program.parse();

const options = program.opts();

(async () => {
    try {
        let targetDirectory = await verifyDirectory(options.here);
        console.log(
            `Great! Give me a second to clone the ${chalk.hex("#0ba5e9")("U")}LLD code base onto your machine. This might take a minute or two.`,
        );
        if(!targetDirectory || !fs.existsSync(targetDirectory)){
            console.log(`You need to specify a directory to continue.`)
            return
        }
        await cloneBaseRepo(targetDirectory)
    } catch (err) {
        if (!err) {
            console.log(`No worries. We can handle this later.`);
        }
    }
})();
