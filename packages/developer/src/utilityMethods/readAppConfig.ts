import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import fs from "fs";
import path from "path";

export const readAppConfig = async () => {
    let _path = Boolean(
        process.env.USE_ULLD_TEST_APP_CONFIG && process.env.ULLD_ADDITIONAL_SOURCES,
    )
        ? path.join(process.env.ULLD_ADDITIONAL_SOURCES!, "appConfig.ulld.json")
        : path.join(process.cwd(), "appConfig.ulld.json");
    try {
        let res = await fs.promises.readFile(_path, { encoding: "utf-8" });
        return JSON.parse(res) as AppConfigSchemaOutput;
    } catch (err) {
        console.error("Error in readAppConfig: ", err);
        throw new Error("Unable to read appConfig in readAppConfig method.")
    }
};
