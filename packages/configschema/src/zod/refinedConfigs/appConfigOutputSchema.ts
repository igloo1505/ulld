import { appConfigSchema } from "../main.js";
import { z } from "zod";
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
import { credentialsConfigSchemaOutput } from "../credentials/main.js";
import {  performanceConfigSchemaOutput } from "../performanceConfig.js";
import {  terminalConfigSchemaOutput } from "../terminalConfig.js";
import {  pluginSlotSchemaOutput } from "../../developer/slotsSchema.js";
import { buildOnlySchemaOutput } from "../build/main.js";
import {  appMetaSchemaOutput } from "../meta.js";
import { pluginsConfigSchemaOutput } from "../pluginsConfig.js";
import { ZodOutputSchema } from "../../types.js";


export const appConfigOutputSchema = z.object({
    fsRoot: z
        .string(),
    alwaysPreferFs: z
        .boolean(),
    ignoreFilepaths: z
        .string()
        .array(),
    tempDir: z
        .string(),
    generatedDir: z
        .string(),
    ignorePreferFsExtensions: z
        .string()
        .array() ,
    fileTypePriority: allParsableFileExtensionSchema
        .array(),
    noteTypes: documentTypeConfigSchemaOutputSchema
        .array(),
    bibPath: z
        .string(),
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
    code: codeConfigSchemaOutput,
    math: mathConfigSchemaOutput,
    plotting: plotConfigSchemaOutput,
    navigation: navigationConfigSchemaOutput,
    UI: mainUIConfigSchemaOutput,
    database: databaseConfigSchemaOutput,
    jupyter: jupyterConfigSchemaOutput,
    credentials: credentialsConfigSchemaOutput,
    performance: performanceConfigSchemaOutput,
    terminal: terminalConfigSchemaOutput,
    slots: pluginSlotSchemaOutput,
    build: buildOnlySchemaOutput,
    meta: appMetaSchemaOutput,
    plugins: pluginsConfigSchemaOutput,
}) satisfies ZodOutputSchema<typeof appConfigSchema>
