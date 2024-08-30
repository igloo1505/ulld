import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { appConfigSchema } from "../zod/main";
import { developerConfigSchema } from "../developer/main";
import { buildStaticDataSchema } from "../buildStaticData/main";
import fs from 'fs'
import path from 'path'

const appConfigJsonSchema = zodToJsonSchema(appConfigSchema, "ulldAppConfig");

const pluginConfigJsonSchema = zodToJsonSchema(developerConfigSchema, "ulldPluginConfig");


const buildStaticDataJsonSchema = zodToJsonSchema(buildStaticDataSchema, "ulldBuildStaticData");

let items = [
    {
        schema: buildStaticDataJsonSchema,
        file: "buildStaticDataJsonSchema.json"
    },
    {
        schema: pluginConfigJsonSchema,
        file: "pluginConfigJsonSchema.json"
    },
    {
        schema: appConfigJsonSchema,
        file: "appConfigJsonSchema.json"
    },
]

for (const f of items) {
    fs.writeFileSync(path.join(import.meta.dirname, `../jsonSchemas/${f.file}`), JSON.stringify(f.schema, null, 2))
    fs.writeFileSync(path.join(import.meta.dirname, `../../../build/src/configJsonSchemas/${f.file}`), JSON.stringify(f.schema, null, 2))
}
