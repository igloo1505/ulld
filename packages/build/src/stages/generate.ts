import { OptionValues } from "commander";
import { BaseApp } from "../classes/baseApp/baseApp.js";
import { UlldBuildProcess } from "../classes/build.js";

export const generate = async (
    build: UlldBuildProcess,
    options: OptionValues,
) => {
    let baseApp = new BaseApp(build, options);
    baseApp.generate();
    return baseApp;
};
