import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build.js";

export const resolveConflicts = async (build: UlldBuildProcess, options: OptionValues) => {
        await build.resolveSlotConflicts(); // beta
        await build.resolvePageConflicts(); // beta
}
