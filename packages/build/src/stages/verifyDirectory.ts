import {
    getCurrentDir,
    getDirectoryCompletionFromString,
} from "../utils/locationUtils";
import chalk from "chalk";
import { prompt } from "enquirer";
import fs from 'fs'
import { UlldBuildProcess } from "../classes/build";
import { EnvManager } from "../classes/envManager";

export const verifyDirectory = async (forceCurrentDir: boolean) => {
    const currentDir = getCurrentDir();

    if (forceCurrentDir) {
        return new UlldBuildProcess(currentDir);
    }

    let useCurrentDir = await prompt({
        type: "confirm",
        name: "useCurrentDir",
        message: `
You're currently in the ${currentDir} directory.
Is this where you'd like to build ${chalk.hex("#0ba5e9")("U")}LLD?`,
        initial: true,
    });
    if ("useCurrentDir" in useCurrentDir && useCurrentDir.useCurrentDir) {
        return new UlldBuildProcess(currentDir);
    }


    const newPath: {path: string} = await prompt({
        type: "autocomplete",
        name: "path",
        message: `Where would you like to build ${chalk.hex("#0ba5e9")("U")}LLD?`,
        choices: [],

        /* @ts-ignore */
        highlight: chalk.hex("#0ba5e9"),
        /* @ts-ignore */
        limit: 10,
        /* @ts-ignore */
        suggest: (data: string): {message: string}[] => {
            // console.log("data: ", data);
            return getDirectoryCompletionFromString(data).map((f) => ({message: f, value: f}))
        },
        // initial: currentDir,
    });
    if (!newPath.path || !fs.existsSync(newPath.path)) {
            console.log(`You need to specify a directory to continue.`);
            process.exit(1);
    }
    return new UlldBuildProcess(newPath.path)
};
