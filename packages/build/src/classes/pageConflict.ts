import { ConflictBaseClass } from "./baseClasses/conflict.js";
import { PluginPage } from "./page.js";

export class PageConflict extends ConflictBaseClass {
    constructor(public targetPath: string, public plugins: PluginPage[]){
        super()
    }

    getName(): string {
        return this.targetPath
    }

    getSurveyPromptData(): { type: "select"; name: string; message: string; choices: string[]; } {
        return {
            type: "select" as "select",
            name: this.surveyKey,
            message: `Path: ${this.targetPath}`,
            choices: this.plugins.map((p) => p.pluginName)
        }
    }

    resolveSlotConflict(acceptedValue: string): void {
        for (const k of this.plugins) {
            if(acceptedValue !== k.pluginName){
                k.cancel()
            }
        }
    }

}
