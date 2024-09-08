import { ConflictBaseClass } from "./baseClasses/conflict.js";
import { PluginPage } from "./page.js";
export declare class PageConflict extends ConflictBaseClass {
    targetPath: string;
    plugins: PluginPage[];
    constructor(targetPath: string, plugins: PluginPage[]);
    getName(): string;
    getSurveyPromptData(): {
        type: "select";
        name: string;
        message: string;
        choices: string[];
    };
    resolveSlotConflict(acceptedValue: string): void;
}
