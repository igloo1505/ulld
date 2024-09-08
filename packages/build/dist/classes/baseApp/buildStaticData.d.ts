import { BuildStaticDataInput, BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { UlldBuildProcess } from "../build.js";
import { TargetPaths } from "../paths.js";
type HasSetKey = "settingsData";
type HasSetBuildStaticData = Record<HasSetKey, boolean>;
export declare class BuildStaticData {
    paths: TargetPaths;
    build: UlldBuildProcess;
    settingPageData: BuildStaticDataOutput["settingPages"];
    transpilePackages: string[];
    hasSet: HasSetBuildStaticData;
    constructor(paths: TargetPaths, build: UlldBuildProcess);
    setHasSetData(k: HasSetKey, value?: boolean): void;
    hasSetAll(): boolean;
    getData(): BuildStaticDataInput;
    writeOutput(): void;
}
export {};
