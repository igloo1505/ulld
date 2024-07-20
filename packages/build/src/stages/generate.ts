import { OptionValues } from "commander";
import { BaseApp } from "../classes/baseApp/baseApp";
import { UlldBuildProcess } from "../classes/build";

export const generate = async (
    build: UlldBuildProcess,
    options: OptionValues,
) => {
    let baseApp = new BaseApp(build);
    baseApp.generate();
    return baseApp;
};
