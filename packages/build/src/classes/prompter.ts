import { UlldPlugin } from "./plugin.js";
import enq from "enquirer";
import { SlotConflict } from "./slotConflict.js";
import { PageConflict } from "./pageConflict.js";
import { GitManager } from "./baseClasses/gitManager.js";
import { BranchValue } from "../utils/options.js";

export class Prompter extends GitManager {
    constructor(targetDirectory: string, gitBranch: BranchValue) {
        super(targetDirectory, gitBranch);
    }
    async confirmContinueWithInvalidPlugins(
        invalidPlugins: UlldPlugin[],
    ): Promise<boolean> {
        this.log(
            "There are some errors related to the following plugins, so they aren't able to be installed.",
        );
        for (const k of invalidPlugins) {
            console.log(k.name);
        }
        let response = await enq.prompt({
            type: "confirm",
            message: "Would you like to continue?",
            name: "shouldContinue",
        });
        if ("shouldContinue" in response && response.shouldContinue) {
            return true;
        }
        return false;
    }
    async getPagePreferences(pageConflicts: PageConflict[]){
        let opts = pageConflicts.map((s) => s.getSurveyPromptData());
        const response: Record<string, string> = await enq.prompt(opts);
        for (const k of pageConflicts) {
            if (k.surveyKey in response) {
                k.resolveSlotConflict(response[k.surveyKey]);
            }
        }
    }
    async getSlotPreferences(slotConflicts: SlotConflict[]) {
        let opts = slotConflicts.map((s) => s.getSurveyPromptData());
        const response: Record<string, string> = await enq.prompt(opts);
        for (const k of slotConflicts) {
            if (k.surveyKey in response) {
                k.resolveSlotConflict(response[k.surveyKey]);
            }
        }
    }
    async promptForPackageManager() {
        let response = await enq.prompt({
            type: "select",
            name: "packageManager",
            message: "Which package manager are you using?",
            choices: ["npm", "pnpm", "yarn"],
        });
        return "packageManager" in response ? response.packageManager : undefined;
    }
    kBye() {
        console.log(`No worries. We can try this again later.`);
        process.exit(1);
    }
}
