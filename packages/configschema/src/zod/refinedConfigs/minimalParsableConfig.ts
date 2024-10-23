import {z} from 'zod'
import { appConfigOutputDeepPartialSchema } from "./appConfigOutputSchemaDeepPartial.js";

export const minimalParsableAppConfig = appConfigOutputDeepPartialSchema.required({
    fsRoot: true,
    noteTypes: true
})


export type MinimalParsableAppConfig = z.input<typeof minimalParsableAppConfig>
export type MinimalParsableAppConfigOutput = z.output<typeof minimalParsableAppConfig>


export const appConfigDeepPartialWithNotetypes = appConfigOutputDeepPartialSchema.required({
    noteTypes: true
})

export type AppConfigSchemaDeepPartialOutputWithNoteTypes = z.output<typeof appConfigDeepPartialWithNotetypes>


export const appConfigDeepPartialWithFsRoot = appConfigOutputDeepPartialSchema.required({
    noteTypes: true
})


export type AppConfigSchemaDeepPartialOutputWithFsRoot = z.output<typeof appConfigDeepPartialWithFsRoot>
