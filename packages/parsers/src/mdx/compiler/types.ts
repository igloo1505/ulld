import { mathOptions } from "@ulld/utilities/defaults/markdownUniversalOptions"
import { z } from 'zod'
import { appConfigSchema, AppConfigSchemaDeepPartialOutput } from "@ulld/configschema/zod/main"

export interface ParseMdxStringOptions {
    mathLabels?: typeof mathOptions["tex"]["tags"]
}

export const parseMdxStringOptionsSchema = z.object({
    mathLabels: z.union([
        z.literal("all"),
        z.literal("ams"),
        z.literal("none"),
    ]).default("all")
})

export const parseMdxStringParamSchema = z.object({
    content: z.string(),
    appConfig: appConfigSchema.optional(),
    opts: parseMdxStringOptionsSchema.default({})
})


export const parseMdxStringParamTRPCSchema = parseMdxStringParamSchema.pick({
    // Should be everything except appConfig as that will be gathered on the server.
    content: true,
    opts: true
})

export interface ParseMdxStringParams {
    content: string
    appConfig?: AppConfigSchemaDeepPartialOutput
    opts?: ParseMdxStringOptions
}
