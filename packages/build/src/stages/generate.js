import { BaseApp } from "../classes/baseApp/baseApp.js";
export const generate = async (build, options) => {
    let baseApp = new BaseApp(build, options);
    baseApp.generate();
    return baseApp;
};
