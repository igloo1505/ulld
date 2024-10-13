import { appConfigDeepPartial, appConfigSchema } from "../main.js";

export const appConfigOnlyFSRequired = appConfigDeepPartial.required({
    fsRoot: true
})
