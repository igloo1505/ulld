import {
    getCurrentDir,
    getDirectoryCompletionFromString,
} from "../utils/locationUtils";
import chalk from "chalk";
import { prompt } from "enquirer";

export const verifyDirectory = async (forceCurrentDir: boolean) => {
    const currentDir = getCurrentDir();

    if (forceCurrentDir) {
        return currentDir;
    }

    let useCurrentDir = await prompt({
        type: "confirm",
        name: "useCurrentDir",
        message: `
You're currently in the ${currentDir} directory.
Is this where you'd like to build ${chalk.hex("#0ba5e9")("U")}LLD?`,
        initial: true,
        // onState: (prev, val) => console.log("prev, val: ", prev, val),
    });
    if ("useCurrentDir" in useCurrentDir && useCurrentDir.useCurrentDir) {
        return currentDir;
    }
    console.log("useCurrentDir: ", useCurrentDir);

    // const prompt = new AutoComplete({})

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
    return newPath.path
};
