import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import fs from 'fs'
import path from 'path'

export const writePluginConfig = (config: DeveloperConfigOutput, directory: string) => {
    console.log("config: ", config)
    return fs.writeFileSync(path.join(directory, "pluginConfig.ulld.json"), JSON.stringify(config, null, 4), {encoding: "utf-8"})
}
