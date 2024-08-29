import { ConflictBaseClass } from "./baseClasses/conflict.js";
export class PageConflict extends ConflictBaseClass {
    constructor(targetPath, plugins) {
        super();
        this.targetPath = targetPath;
        this.plugins = plugins;
    }
    getName() {
        return this.targetPath;
    }
    getSurveyPromptData() {
        return {
            type: "select",
            name: this.surveyKey,
            message: `Path: ${this.targetPath}`,
            choices: this.plugins.map((p) => p.pluginName)
        };
    }
    resolveSlotConflict(acceptedValue) {
        for (const k of this.plugins) {
            if (acceptedValue !== k.pluginName) {
                k.cancel();
            }
        }
    }
}
