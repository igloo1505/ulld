import { UlldPlugin } from "./plugin.js";
import { SlotConflict } from "./slotConflict.js";
import { PageConflict } from "./pageConflict.js";
import { GitManager } from "./baseClasses/gitManager.js";
import { BranchValue } from "../utils/options.js";
export declare class Prompter extends GitManager {
    constructor(targetDirectory: string, gitBranch: BranchValue);
    confirmContinueWithInvalidPlugins(invalidPlugins: UlldPlugin[]): Promise<boolean>;
    getPagePreferences(pageConflicts: PageConflict[]): Promise<void>;
    getSlotPreferences(slotConflicts: SlotConflict[]): Promise<void>;
    promptForPackageManager(): Promise<unknown>;
    kBye(): void;
}
