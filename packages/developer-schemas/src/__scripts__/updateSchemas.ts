import { zodToJsonSchema } from "zod-to-json-schema";
import fs from "fs";
import path from "path";
import { ulldCompletePackageJsonSchema } from "../packageJson";
import { pluginConfigSchema } from "../pluginConfigSchema";

const packageJsonSchema = zodToJsonSchema(
    ulldCompletePackageJsonSchema,
    "ULLDPackageJson",
);

const onLocalMachine = fs.existsSync(
    "/Users/bigsexy/dev-utils/jsonSchemas/src/schemas/json/",
);

fs.writeFileSync(
    path.join(import.meta.dirname, "../static/ulldPackageJson.schema.json"),
    JSON.stringify(packageJsonSchema, null, 4),
);

const pluginConfigJsonSchema = zodToJsonSchema(
    pluginConfigSchema,
    "ULLDPluginConfig",
);

fs.writeFileSync(
    path.join(import.meta.dirname, "../static/ulldPluginConfig.schema.json"),
    JSON.stringify(pluginConfigJsonSchema, null, 4),
);

if (onLocalMachine) {
    fs.writeFileSync(
        "/Users/bigsexy/dev-utils/jsonSchemas/src/schemas/json/ulldPackageJson.json",
        JSON.stringify(packageJsonSchema, null, 4),
    );
    fs.writeFileSync(
        "/Users/bigsexy/dev-utils/jsonSchemas/src/schemas/json/ulldPluginConfig.json",
        JSON.stringify(pluginConfigJsonSchema, null, 4),
    );
}
