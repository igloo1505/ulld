import { zodToJsonSchema } from "zod-to-json-schema";
import { appConfigSchema } from "../zod/main";
import fs from "fs";
import path from "path";

const configJsonSchema = zodToJsonSchema(appConfigSchema, "ULLDConfig");

fs.writeFileSync(
    path.join(
        import.meta.dirname || __dirname,
        "../../../developer-schemas/src/static/ulldConfig.json",
    ),
    JSON.stringify(configJsonSchema, null, 4),
);

fs.writeFileSync(
    "/Users/bigsexy/dev-utils/jsonSchemas/src/schemas/json/ulldConfig.json",
    JSON.stringify(configJsonSchema, null, 4),
);
