import { appConfigDeepPartial } from "../main.js";
import {z} from 'zod'

export const minimalParsableAppConfig = appConfigDeepPartial.required({
    fsRoot: true,
    noteTypes: true
})


export type MinimalParsableAppConfig = z.input<typeof minimalParsableAppConfig>
export type MinimalParsableAppConfigOutput = z.output<typeof minimalParsableAppConfig>


export const appConfigDeepPartialWithNotetypes = appConfigDeepPartial.required({
    noteTypes: true
})

export type AppConfigSchemaDeepPartialOutputWithNoteTypes = z.output<typeof appConfigDeepPartialWithNotetypes>


export const appConfigDeepPartialWithFsRoot = appConfigDeepPartial.required({
    noteTypes: true
})


export type AppConfigSchemaDeepPartialOutputWithFsRoot = z.output<typeof appConfigDeepPartialWithFsRoot>
