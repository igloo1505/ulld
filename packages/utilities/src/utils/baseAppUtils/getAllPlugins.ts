import {  AppConfigSchemaOutput } from "@ulld/types";

export const getAllPlugins = (appConfig: AppConfigSchemaOutput) => { 
    let data: (
        | AppConfigSchemaOutput["plugins"][number]
        | AppConfigSchemaOutput["slots"]["UI"][number]
    )[] = appConfig.plugins;
    for (const k in appConfig.slots) {
        data = data.concat(appConfig.slots[k as keyof typeof appConfig.slots]);
    }
    return data
};
