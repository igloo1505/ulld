import { appConfigSchema } from "../main.js";
import { z } from "zod";
import { slashesTransform } from "../transforms/general.js";
import { allParsableFileExtensionSchema } from "../secondaryConfigParse/getParsableExtensions.js";
import { documentTypeConfigSchemaOutputSchema } from "../documentConfigSchema.js";
import { dateParseConfigSchemaOutput } from "../dateParseConfig.js";
import { codeConfigSchemaOutput } from "../codeConfig.js";
import { mathConfigSchemaOutput } from "../math/main.js";
import { plotConfigSchemaOutput } from "../plot/main.js";
import { navigationConfigSchemaOutput } from "../navigationConfig.js";
import { mainUIConfigSchemaOutput } from "../ui/main.js";
import { databaseConfigSchemaOutput } from "../database/main.js";
import { jupyterConfigSchemaOutput } from "../jupyter/main.js";
import { credentialsConfigSchema } from "../redentials/main.js";

export const appConfigOutputSchema: z.ZodType<
    z.output<typeof appConfigSchema>
> = z.object({
    fsRoot: z
        .string()
        .transform(slashesTransform(true, false)),
    alwaysPreferFs: z
        .boolean()
        .default(false)
        ,
    ignoreFilepaths: z
        .string()
        .array()
        .default([])
        ,
    tempDir: z
        .string()
        
        .transform(slashesTransform(true, false)),
    generatedDir: z
        .string()
        
        .transform(slashesTransform(true, false)),
    ignorePreferFsExtensions: z
        .string()
        .array() 
        .default([]),
    fileTypePriority: allParsableFileExtensionSchema
        .array(),
    noteTypes: documentTypeConfigSchemaOutputSchema
        .array(),
    bibPath: z
        .string()
        .default("/citations.bib"),
    cslPath: z
        .string()
        .optional(),
    dateHandling: dateParseConfigSchemaOutput,
    autoTag: z
        .object({
            path: z.string().describe("The glob pattern to test paths against."),
            tag: z.string().max(15, "Tags must be no more than 15 characters long."),
        })
        .array(),
    autoTopic: z
        .object({
            path: z.string().describe("The glob pattern to test paths against."),
            topic: z
                .string()
                .max(50, "Topic must be no more than 50 characters long."),
        })
        .array(),
    autoSubject: z
        .object({
            path: z.string().describe("The glob pattern to test paths against."),
            subject: z
                .string()
                .max(50, "Subjects must be no more than 15 characters long."),
        })
        .array(),
    linkAliases: z
        .record(z.string(), z.string().url()), 
    // features: featuresConfigSchema,
    code: codeConfigSchemaOutput,
    math: mathConfigSchemaOutput,
    plotting: plotConfigSchemaOutput,
    navigation: navigationConfigSchemaOutput,
    UI: mainUIConfigSchemaOutput,
    database: databaseConfigSchemaOutput,
    jupyter: jupyterConfigSchemaOutput,
    credentials: credentialsConfigSchema, // RESUME: Finish the rest of this config output schema when back n the car. No need to spend valuable time on wifi and a power outlet messing with this.
    performance: performanceConfigSchema,
    terminal: terminalConfigSchema,
    slots: pluginSlotSchema.default({}),
    build: buildOnlySchema,
    meta: appMetaSchema,
    plugins: z
        .union([
            pluginItemSchema,
            pluginItemSchema.array(),
            z.string(),
            z.string().array(),
        ])
        .default(getDefaultPlugins())
        .transform((a = []) => {
            let items = Array.isArray(a) ? a : [a];
            let names: string[] = [];
            let newItems = items.map((s) => {
                names.push(typeof s === "string" ? s : s.name);
                return typeof s === "string" ? { name: s, version: "latest" } : s;
            });
            return newItems;
        }),
});
