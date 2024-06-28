import { z } from "zod";
import { PluginEventsConfig } from "./types/pluginEventsConfig";

export const pluginEventsSchema: z.ZodType<PluginEventsConfig> = z.object({
    onBuild: z.string().optional().describe("The package.json export of a function that will run once during the build process. This can be used for copying files over to the public directory, but most other copying of files can be handled by setting up the pluginConfig appropriately."),
    onSync: z.string().optional().describe("The package.json export of a function that will run each time a user syncs their notes with their database."),
    onBackup: z.string().optional().describe("The package.json export of a function that will run each time a user backs up their notes to a json file. This function should return a single json object."),
    onRestore: z.string().optional().describe("The package.json export of a function that will be used to restore data from a previous backup. The argument will be an optional object of an identical type to what was stored using the onBackup event.")
})
