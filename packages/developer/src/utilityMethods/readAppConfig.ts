import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import fs from "fs";
import path from "path";


const getConfigPath = () => { 
    return Boolean(
        process.env.USE_ULLD_TEST_APP_CONFIG && process.env.ULLD_ADDITIONAL_SOURCES
    )
        ? path.join(process.env.ULLD_ADDITIONAL_SOURCES!, "appConfig.ulld.json")
        : path.join(process.cwd(), "appConfig.ulld.json");
    }

export const readAppConfig = async () => {
    let _path = getConfigPath()
    try {
        let res = await fs.promises.readFile(_path, { encoding: "utf-8" });
        return JSON.parse(res) as AppConfigSchemaOutput;
    } catch (err) {
        console.error("Error in readAppConfig: ", err);
        throw new Error("Unable to read appConfig in readAppConfig method.")
    }
};


export const readDevelopmentAppConfig = () => {
      if(!process.env.ULLD_ADDITIONAL_SOURCES){
        throw new Error("Cannot read development config, as the ULLD_ADDITIONAL_SOURCES environment variable is not available.")
    }
    let _path = path.join(process.env.ULLD_ADDITIONAL_SOURCES, "appConfig.ulld.json")
    let res = fs.readFileSync(_path, {encoding: "utf-8"})
    return JSON.parse(res) as AppConfigSchemaOutput;
}


export const readAppConfigSync = () => {
    let _path = getConfigPath()
    console.trace("readAppConfig")
    try {
        let res = fs.readFileSync(_path, { encoding: "utf-8" });
        return JSON.parse(res) as AppConfigSchemaOutput;
    } catch (err) {
        console.error("Error in readAppConfigSync: ", err);
        throw new Error("Unable to read appConfig in readAppConfig method.")
    }
}
