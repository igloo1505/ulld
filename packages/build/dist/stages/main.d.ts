export declare const stages: {
    verifyDirectory: (opts: import("../utils/options.js").BuildOptionsType, branch?: string) => Promise<import("../classes/build.js").UlldBuildProcess>;
    createBaseProject: (build: import("../classes/build.js").UlldBuildProcess, options: import("commander").OptionValues) => Promise<boolean>;
    gatherAppConfig: (build: import("../classes/build.js").UlldBuildProcess, options: import("commander").OptionValues) => Promise<void>;
    installDependencies: (build: import("../classes/build.js").UlldBuildProcess, options: import("commander").OptionValues) => Promise<void>;
    resolveConflicts: (build: import("../classes/build.js").UlldBuildProcess, options: import("commander").OptionValues) => Promise<void>;
    cleanAfterConflictResolution: (build: import("../classes/build.js").UlldBuildProcess, options: import("commander").OptionValues) => Promise<void>;
    prepareToGenerate: (build: import("../classes/build.js").UlldBuildProcess, options: import("commander").OptionValues) => Promise<void>;
    generate: (build: import("../classes/build.js").UlldBuildProcess, options: import("commander").OptionValues) => Promise<import("../classes/baseApp/baseApp.js").BaseApp>;
};
