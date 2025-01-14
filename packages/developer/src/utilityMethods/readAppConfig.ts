import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { IsNoConfigProps } from "@ulld/types";
import { isNoConfig } from "@ulld/utilities/isNoConfig";
import fs from "fs";
import path from "path";


const getConfigPath = () => { 
    return Boolean(
        process.env.USE_ULLD_TEST_APP_CONFIG && process.env.ULLD_ADDITIONAL_SOURCES
    )
        ? path.join(process.env.ULLD_ADDITIONAL_SOURCES!, "appConfig.ulld.json")
        : path.join(process.cwd(), "appConfig.ulld.json");
    }

export const readAppConfig = async (returnUndefinedIfNoConfig: boolean = true) => {
    if(returnUndefinedIfNoConfig && process.env.ULLD_NO_CONFIG === "true"){
        return undefined
    }
    console.trace("readAppConfig")
    let _path = getConfigPath()
    console.error("reached readAppConfig", process.env.ULLD_NO_CONFIG);
    try {
        let res = await fs.promises.readFile(_path, { encoding: "utf-8" });
        return JSON.parse(res) as AppConfigSchemaOutput;
    } catch (err) {
        console.error("Error in readAppConfig: ", err);
        throw new Error("Unable to read appConfig in readAppConfig method.")
    }
};


export const readAppConfigIfNotNoConfig = async <T extends IsNoConfigProps>(props?: T): Promise<AppConfigSchemaOutput | undefined> => {
    if(!isNoConfig(props)){
        return await readAppConfig()
    }
}


export const readDevelopmentAppConfig = () => {
      if(!process.env.ULLD_ADDITIONAL_SOURCES){
        throw new Error("Cannot read development config, as the ULLD_ADDITIONAL_SOURCES environment variable is not available.")
    }
    let _path = path.join(process.env.ULLD_ADDITIONAL_SOURCES, "appConfig.ulld.json")
    let res = fs.readFileSync(_path, {encoding: "utf-8"})
    return JSON.parse(res) as AppConfigSchemaOutput;
}



// TODO: Set this to false by default and clean up all of the places where this is called.
export const readAppConfigSync = (returnUndefinedIfNoConfig: boolean = true) => {
    if(returnUndefinedIfNoConfig && process.env.ULLD_NO_CONFIG === "true"){
        return undefined
    }
    console.trace("readAppConfigSync")
    console.error("reached readAppConfigSync", process.env.ULLD_NO_CONFIG);
    let _path = getConfigPath()
    try {
        let res = fs.readFileSync(_path, { encoding: "utf-8" });
        return JSON.parse(res) as AppConfigSchemaOutput;
    } catch (err) {
        console.error("Error in readAppConfigSync: ", err);
        throw new Error("Unable to read appConfig in readAppConfigSync method.")
    }
}
