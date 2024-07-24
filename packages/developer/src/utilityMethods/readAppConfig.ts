import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import fs from "fs";
import path from "path";

export const readAppConfig = async () => {
    let res = await fs.promises.readFile(
        path.join(process.cwd(), "appConfig.ulld.json"),
        { encoding: "utf-8" },
    );
    return JSON.parse(res) as AppConfigSchemaOutput;
};
