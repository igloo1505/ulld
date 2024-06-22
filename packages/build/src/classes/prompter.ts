import { UlldPlugin } from "./plugin";
import {prompt} from "enquirer"
import { SlotConflict } from "./slotConflict";
import { ShellManager } from "./baseClasses/shell";


export class Prompter extends ShellManager {
    constructor(){
        super()
    }
    async confirmContinueWithInvalidPlugins(invalidPlugins: UlldPlugin[]): Promise<boolean> {
        this.log("There are some errors related to the following plugins, so they aren't able to be installed.") 
        for (const k of invalidPlugins) {
            console.log(k.name)
        }
        let response = await prompt({
            type: "confirm",
            message: "Would you like to continue?",
            name: "shouldContinue"
        })
        if("shouldContinue" in response && response.shouldContinue){
            return true
        }
        return false
    }
    // TODO: Come back and handle this when able to look at enquirer docs again.
    // ULLD_BUILD_PROCESS: Come back and resolve this when on wifi and able to look at the docs.
    async getSlotPreferences(slotConflicts: SlotConflict[]) {

    }
    async promptForPackageManager() {
        let response = await prompt({
            type: "select",
            name: "packageManager",
            message: "Which package manager are you using?",
            choices: [
                "npm",
                "pnpm",
                "yarn"
            ]
        })
        return "packageManager" in response ? response.packageManager : undefined
    }
    kBye(){
        console.log(`No worries. We can try this again later.`)
        process.exit(1)
    }
}
