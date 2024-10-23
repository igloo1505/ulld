import { z } from "zod";
import { performanceConfigSchema } from "./performanceConfig.js";
import { terminalConfigSchema } from "./terminalConfig.js";
import { documentTypeConfigSchema } from "./documentConfigSchema.js";
import { dateParseConfigSchema } from "./dateParseConfig.js";
import { codeConfigSchema } from "./codeConfig.js";
import { navigationConfigSchema } from "./navigationConfig.js";
import { mainUIConfigSchema } from "./ui/main.js";
import { databaseConfigSchema } from "./database/main.js";
import { mathConfigSchema } from "./math/main.js";
import { jupyterConfigSchema } from "./jupyter/main.js";
import { plotConfigSchema } from "./plot/main.js";
import { credentialsConfigSchema } from "./credentials/main.js";
import { defaultIgnoreFilePaths } from "./defaults/general.js";
import { slashesTransform } from "./transforms/general.js";
import { allParsableFileExtensionSchema } from "./secondaryConfigParse/getParsableExtensions.js";
import {
    withForwardSlash,
    withForwardSlashOptional,
} from "@ulld/utilities/fsUtils";
import { buildOnlySchema } from "./build/main.js";
import { appMetaSchema } from "./meta.js";
import { defaultNoteTypes } from "./defaults/defaultNoteTypes.js";
import { WithRequired } from "@ulld/utilities/types";
import { pluginSlotSchema } from "../developer/slotsSchema.js";
import { pluginsConfigSchema } from "./pluginsConfig.js";

export const zodRegexField = z
    .union([
        z.instanceof(RegExp),
        z.string(),
        z.object({
            original: z.string(),
            regex: z.string().or(z.instanceof(RegExp)).transform((x) => x instanceof RegExp ? x : new RegExp(x))
        }),
    ])
    .array();


export const parsedZodRegexField = z.string().array().default([]);


export const zodRegexFieldTransform = (b: z.input<typeof zodRegexField> = []) => {
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
        if(typeof a === "object" && "original" in a && "regex" in a){
            return a
        }
        return a;
    });
};

export const globInputToString = (b: z.input<typeof zodRegexField> = []): string[] => {
    return b.map((a) => {
        if (a instanceof RegExp) {
            return a.source
        }
        if(typeof a === "object" && "original" in a && "regex" in a){
            return a.original as string
        }
        return a as unknown as string
    })
}

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
        .transform(globInputToString),
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
    ignorePreferFsExtensions: zodRegexField
        .describe(
            "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings.",
        )
        .transform(globInputToString)
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
        .default(defaultNoteTypes)
        .transform((x) => {
            let ids = x.map((l) => l.id);
            let data = x;
            for (const defaultNoteType of defaultNoteTypes) {
                if (!ids.includes(defaultNoteType.id!)) {
                    data.push(documentTypeConfigSchema.parse(defaultNoteType));
                }
            }
            return data;
        })
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
    // features: featuresConfigSchema,
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
    plugins: pluginsConfigSchema
});

export const appConfigSchemaTransform = (
    data: z.infer<typeof appConfigSchema>,
) => {
    if (data.cslPath?.includes(data.fsRoot)) {
        data.cslPath = data.cslPath.replace(data.fsRoot, "");
    }
    if (data.bibPath?.includes(data.fsRoot)) {
        data.bibPath = data.bibPath.replace(data.fsRoot, "");
    }
    return data;
};

export const appConfigDeepPartial = appConfigSchema.deepPartial()

export type AppConfigSchemaInput = z.input<typeof appConfigSchema>;
export type AppConfigSchemaOutput = z.output<typeof appConfigSchema>;
export type AppConfigSchemaType = z.infer<typeof appConfigSchema>;
export type AppConfigSchemaDeepPartial = z.input<typeof appConfigDeepPartial>
export type AppConfigSchemaDeepPartialOutput = z.output<typeof appConfigDeepPartial>
export type AppConfigPartialWithRequired<J extends keyof AppConfigSchemaOutput> = WithRequired<AppConfigSchemaDeepPartialOutput, J>

export type SupportedDatabaseType =
    AppConfigSchemaOutput["build"]["database"]["type"];
