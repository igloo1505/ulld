import { zodToJsonSchema } from "zod-to-json-schema";
import { appConfigSchema } from "../zod/main";
import { developerConfigSchema } from "../developer/main";
import { buildStaticDataSchema } from "../buildStaticData/main";
import { ulldCliConfigSchema } from "../cliConfig/main";
import fs from "fs";
import path from "path";
import {
    quicktype,
    InputData,
    JSONSchemaInput,
    FetchingJSONSchemaStore,
} from "quicktype-core";

interface Item {
    schema: typeof buildStaticDataJsonSchema;
    file: string;
    go?: {
        /** Variable name. */
        var: string;
        /** Path relative to $ULLD_CLI_DEVROOT */
        path: string;
    };
}

const appConfigJsonSchema = zodToJsonSchema(appConfigSchema, "ulldAppConfig");

const pluginConfigJsonSchema = zodToJsonSchema(
    developerConfigSchema,
    "ulldPluginConfig",
);

const buildStaticDataJsonSchema = zodToJsonSchema(
    buildStaticDataSchema,
    "ulldBuildStaticData",
);

const cliConfigSchema = zodToJsonSchema(ulldCliConfigSchema, "ulldCliConfig");

async function jsonSchemaToGoStruct(x: Item & { go: Required<Item["go"]> }) {
    const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

    await schemaInput.addSource({
        name: x.go.var,
        schema: JSON.stringify(x.schema, null, 2),
    });

    const inputData = new InputData();
    inputData.addInput(schemaInput);

    const cliRoot = process.env.ULLD_CLI_DEVROOT;
    if (!cliRoot) {
        throw new Error(
            `Cannot generate go structs. The ULLD_CLI_DEVROOT variable was not found.`,
        );
    }

    const outputFilename = path.join(cliRoot, x.go.path);

    const res = await quicktype({
        inputData,
        lang: "go",
        alphabetizeProperties: true,
        outputFilename,
    });

    await fs.promises.writeFile(outputFilename, res.lines.join("\n"), {
        encoding: "utf-8",
    });
}

let items: Item[] = [
    {
        schema: buildStaticDataJsonSchema,
        file: "buildStaticDataJsonSchema.json",
    },
    {
        schema: pluginConfigJsonSchema,
        file: "pluginConfigJsonSchema.json",
    },
    {
        schema: appConfigJsonSchema,
        file: "appConfigJsonSchema.json",
    },
    {
        schema: cliConfigSchema,
        file: "cliConfigSchema.json",
        go: {
            path: "internal/schemastructs/cliconfig.go",
            var: "CliConfig",
        },
    },
];

const generateSchemas = async (): Promise<void> => {
    for (const f of items) {
        fs.writeFileSync(
            path.join(import.meta.dirname, `../jsonSchemas/${f.file}`),
            JSON.stringify(f.schema, null, 2),
        );
        fs.writeFileSync(
            path.join(
                import.meta.dirname,
                `../../../build/src/configJsonSchemas/${f.file}`,
            ),
            JSON.stringify(f.schema, null, 2),
        );
        if (f.go) {
            await jsonSchemaToGoStruct(
                f as Parameters<typeof jsonSchemaToGoStruct>[0],
            );
        }
    }

    console.log(`Successfully wrote json schemas to: 

${items.map((i) => `- ${i.file}`).join("\n")}\n`);
};

generateSchemas();
