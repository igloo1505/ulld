import { cleanAfterConflictResolution } from "./cleanAfterConflictResolution.js";
import { createBaseProject } from "./createBaseProject.js";
import { gatherAppConfig } from "./gatherConfig.js";
import { generate } from "./generate.js";
import { installDependencies } from "./preModuleInstall.js";
import { prepareToGenerate } from "./prepareToGenerate.js";
import { resolveConflicts } from "./resolveConflicts.js";
import { verifyDirectory } from "./verifyDirectory.js";
export const stages = {
    verifyDirectory,
    createBaseProject,
    gatherAppConfig,
    installDependencies,
    resolveConflicts,
    cleanAfterConflictResolution,
    prepareToGenerate,
    generate
};
