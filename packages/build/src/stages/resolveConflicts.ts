import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build";

export const resolveConflicts = async (build: UlldBuildProcess, options: OptionValues) => {
        await build.resolveSlotConflicts(); // beta
        await build.resolvePageConflicts(); // beta
}
