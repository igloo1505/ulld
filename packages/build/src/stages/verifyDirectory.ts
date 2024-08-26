import {
    getCurrentDir,
    getDirectoryCompletionFromString,
} from "../utils/locationUtils.js";
import chalk from "chalk";
import enq from "enquirer";
import fs from 'fs'
import { UlldBuildProcess } from "../classes/build.js";
import { BuildOptionsType } from "../utils/options.js";
import { getBranchSelection } from "./selectBranch.js";

const { prompt } = enq;

export const verifyDirectory = async (opts: BuildOptionsType) => {
    const currentDir = getCurrentDir();
    let branch = typeof opts.branch === "undefined" ? "main" : typeof opts.branch === "string" ? opts.branch : await getBranchSelection()

    if (opts.here) {
        return new UlldBuildProcess(currentDir, branch);
    }

    let useCurrentDir = await prompt({
        type: "confirm",
        name: "useCurrentDir",
        message: `You're currently in the ${currentDir} directory.
Is this where you'd like to build ${chalk.hex("#0ba5e9")("U")}LLD?`,
        initial: true,
    });
    if ("useCurrentDir" in useCurrentDir && useCurrentDir.useCurrentDir) {
        return new UlldBuildProcess(currentDir, branch);
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
    return new UlldBuildProcess(newPath.path, branch)
};
