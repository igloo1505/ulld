import { cleanAfterConflictResolution } from "./cleanAfterConflictResolution";
import { createBaseProject } from "./createBaseProject";
import { gatherAppConfig } from "./gatherConfig";
import { generate } from "./generate";
import { installDependencies } from "./preModuleInstall";
import { prepareToGenerate } from "./prepareToGenerate";
import { resolveConflicts } from "./resolveConflicts";
import { verifyDirectory } from "./verifyDirectory";

export const stages = {
    verifyDirectory,
    createBaseProject,
    gatherAppConfig,
    installDependencies,
    resolveConflicts,
    cleanAfterConflictResolution,
    prepareToGenerate,
    generate
}
