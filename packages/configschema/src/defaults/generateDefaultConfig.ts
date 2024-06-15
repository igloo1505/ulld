import { AppConfigSchemaInput, appConfigSchema } from "../zod/main";
import fs from "fs";
import path from "path";

const targetPath = path.join(__dirname, "/generatedDefaultConfigs/base.json");

const dummyConfig: AppConfigSchemaInput = {
    fsRoot: "/Users/bigsexy/notes",
};

const parsedBaseConfig = appConfigSchema.parse(dummyConfig);


if (parsedBaseConfig) {
    let exists = fs.existsSync(targetPath);
    if (!exists) {
        throw new Error(
            `parsedBaseConfig targetPath does not exist at ${targetPath}`,
        );
    }
    fs.writeFileSync(targetPath, JSON.stringify(parsedBaseConfig, null, 4), {
        encoding: "utf-8",
    });
    console.log(`Wrote default config to ${targetPath}`)
}
