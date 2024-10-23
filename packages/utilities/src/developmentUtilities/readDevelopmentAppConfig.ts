import fs from 'fs'
import path from 'path'
import type { AppConfigSchemaOutput } from "@ulld/types";

export const readDevelopmentAppConfig = (dirName: string): AppConfigSchemaOutput | undefined => {
    let _path = path.join(dirName, "appConfig.ulld.json")
    if(!fs.existsSync(_path)){
        if(process.env.ULLD_ADDITIONAL_SOURCES){
        const _envPath = path.join(process.env.ULLD_ADDITIONAL_SOURCES, "appConfig.ulld.json")
            if(fs.existsSync(_envPath)){
                _path = _envPath
            } else {
                return
            }
        } else {
            return
        }
    }
    return JSON.parse(fs.readFileSync(_path, { encoding: "utf-8" })) as AppConfigSchemaOutput
    }
