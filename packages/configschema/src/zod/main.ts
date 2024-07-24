import { z } from "zod";
import { performanceConfigSchema } from "./performanceConfig";
import { terminalConfigSchema } from "./terminalConfig";
import { documentTypeConfigSchema } from "./documentConfigSchema";
import { zodPathGlobTransform } from "./configUtilitySchemas";
import { dateParseConfigSchema } from "./dateParseConfig";
import { codeConfigSchema } from "./codeConfig";
import { navigationConfigSchema } from "./navigationConfig";
import { mainUIConfigSchema } from "./ui/main";
import { databaseConfigSchema } from "./database/main";
import { mathConfigSchema } from "./math/main";
import { jupyterConfigSchema } from "./jupyter/main";
import { plotConfigSchema } from "./plot/main";
import { credentialsConfigSchema } from "./credentials/main";
import { defaultIgnoreFilePaths } from "./defaults/general";
import { slashesTransform } from "./transforms/general";
import { allParsableFileExtensionSchema } from "./secondaryConfigParse/getParsableExtensions";
import { featuresConfigSchema } from "./features/main";
import { pluginSlotSchema } from "@ulld/configschema/slotsSchema";
import {
    withForwardSlash,
    withForwardSlashOptional,
} from "@ulld/utilities/fsUtils";
import { buildOnlySchema } from "./build/main";
import { appMetaSchema } from "./meta";

export const zodRegexField = z
    .union([
        z.instanceof(RegExp),
        z.string(),
        z.object({
            original: z.string(),
            regex: z.instanceof(RegExp),
        }),
    ])
    .array();

const pluginItemSchema = z.object({
    name: z.string(),
    version: z.string().default("latest"),
    parserIndex: z.number().min(0).default(50),
});

export const zodRegexFieldTransform = (b: z.input<typeof zodRegexField>) => {
    return b.map((a) => {
        if (typeof a === "string") {
            return {
                original: a,
                regex: new RegExp(a),
            };
        }
        if (a instanceof RegExp) {
            return {
                original: a.source,
                regex: a,
            };
        }
        return a;
    });
};

export const appConfigSchema = z.object({
    fsRoot: z
        .string()
        .describe("The path to the root of the folder which holds your notes.")
        .transform(slashesTransform(true, false)),
    alwaysPreferFs: z
        .boolean()
        .default(false)
        .describe(
            "Always read directly from the file system, except in cases where use of a database is required. This will negatively impact performance and portability, but might be necessary for specific use cases.",
        ),
    ignoreFilepaths: zodRegexField
        .describe(
            "File paths within the root directory which should be completely ignored by ULLD.",
        )
        .default(defaultIgnoreFilePaths)
        .transform(zodRegexFieldTransform)
        .default([]),
    tempDir: z
        .string()
        .default("__temp__")
        .describe(
            "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value.",
        )
        .transform(slashesTransform(true, false)),
    generatedDir: z
        .string()
        .default("/generated")
        .describe(
            "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value.",
        )
        .transform(slashesTransform(true, false)),
    ignorePreferFsExtensions: z
        .union([z.string(), z.instanceof(RegExp)])
        .describe(
            "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings.",
        )
        .transform(zodPathGlobTransform)
        .array()
        .default([]),
    fileTypePriority: allParsableFileExtensionSchema
        .array()
        .describe(
            "An ordered list of different parsable file types. This is only required when a file name exists with multiple parsable file extensions in the same directory. In most cases the default is adequate.",
        )
        .default([
            ".mdx",
            ".md",
            ".ipynb",
            ".pdf",
            ".json",
            ".csv",
            ".tsv",
            ".excel",
            ".tex",
            ".db",
            ".html",
        ]),
    noteTypes: documentTypeConfigSchema
        .array()
        .default([])
        .describe(
            "This is the main location to describe the structure of your notes. Break up your note directory into as many categories as you like, but this app is designed to allow for increasingly refined searching and filtering. Categories of 'math', 'physics' and 'chemistry' would likely fit most users better than 'calc1', 'calc2', 'linearAlgebra', etc. For use cases such as those, please look at the 'autoTag', 'autoSubject', and 'autoTopic' feature.",
        ),
    bibPath: z
        .string()
        .default("/citations.bib")
        .transform(withForwardSlash)
        .describe(
            "The root relative path to the .bib file to be integrated within your app.",
        ),
    cslPath: z
        .string()
        .optional()
        .transform(withForwardSlashOptional)
        .describe(
            "The root relative path to the .csl file to be used for styling citations. An incredibly robust repo of different csl styles can be found at https://github.com/citation-style-language/styles",
        ),
    dateHandling: dateParseConfigSchema,
    autoTag: z
        .object({
            path: z.string().describe("The glob pattern to test paths against."),
            tag: z.string().max(15, "Tags must be no more than 15 characters long."),
        })
        .array()
        .default([]),
    autoTopic: z
        .object({
            path: z.string().describe("The glob pattern to test paths against."),
            topic: z
                .string()
                .max(50, "Topic must be no more than 50 characters long."),
        })
        .array()
        .default([]),
    autoSubject: z
        .object({
            path: z.string().describe("The glob pattern to test paths against."),
            subject: z
                .string()
                .max(50, "Subjects must be no more than 15 characters long."),
        })
        .array()
        .default([]),
    linkAliases: z
        .record(z.string(), z.string().url())
        .describe("A map of key value pairs of commonly referenced urls.")
        .default({}),
    features: featuresConfigSchema,
    code: codeConfigSchema,
    math: mathConfigSchema,
    plotting: plotConfigSchema,
    navigation: navigationConfigSchema,
    UI: mainUIConfigSchema,
    database: databaseConfigSchema,
    jupyter: jupyterConfigSchema.default({}),
    credentials: credentialsConfigSchema,
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
        .transform((a) => {
            let items = Array.isArray(a) ? a : [a];
            let names: string[] = [];
            let newItems = items.map((s) => {
                names.push(typeof s === "string" ? s : s.name);
                return typeof s === "string" ? { name: s, version: "latest" } : s;
            });
            if (!names.includes("@ulld/api")) {
                newItems.push({
                    name: "@ulld/api",
                    version: "latest",
                });
            }
            return newItems;
        })
        .default([
            {
                name: "@ulld/api",
                parserIndex: 0,
                version: "latest",
            },
        ]),
});

export type AppConfigSchemaInput = z.input<typeof appConfigSchema>;
export type AppConfigSchemaOutput = z.output<typeof appConfigSchema>;
export type AppConfigSchemaType = z.infer<typeof appConfigSchema>;
