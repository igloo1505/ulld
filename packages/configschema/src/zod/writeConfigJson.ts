import { AppConfigSchemaInput, appConfigSchema } from "./main";
import fs from 'fs'

export const writeConfigJson = async (config: AppConfigSchemaInput, targetPath: string) => {
    let parsed = appConfigSchema.parse(config)
    return await fs.promises.writeFile(targetPath, JSON.stringify(parsed), {encoding: "utf-8"})
}
