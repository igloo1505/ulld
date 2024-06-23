import { AppConfigSchemaInput, appConfigSchema } from "./main";
import fs from 'fs'
import path from 'path'
import { zodToJsonSchema } from "zod-to-json-schema";


export const writeConfigJson = async (config: AppConfigSchemaInput, targetDirectory: string) => {
    let parsed = appConfigSchema.parse(config)
    const jsonSchema = zodToJsonSchema(appConfigSchema, {
        name: "UlldAppConfig",
        "$refStrategy": "relative",
        "basePath": [ targetDirectory ]
    })
    await fs.promises.writeFile(path.join(targetDirectory, "appConfig.ulld.json"), JSON.stringify(parsed), {encoding: "utf-8"})
    return await fs.promises.writeFile(path.join(targetDirectory, "jsonSchema.ulld.json"), JSON.stringify(jsonSchema), {encoding: "utf-8"})
}
