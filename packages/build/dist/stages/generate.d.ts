import { OptionValues } from "commander";
import { BaseApp } from "../classes/baseApp/baseApp.js";
import { UlldBuildProcess } from "../classes/build.js";
export declare const generate: (build: UlldBuildProcess, options: OptionValues) => Promise<BaseApp>;
