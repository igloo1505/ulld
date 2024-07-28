import { ImageAlignment } from "@ulld/database"
import { z } from "zod"

const dateToString = z.union([
    z.string(),
    z.date()
]).optional().transform((a) => a instanceof Date ? a.toISOString() : a)

export const settingSchema = z.object({
    id: z.number().int().default(1),
    tooltips: z.boolean().default(true),
    title: z.string().default("Uh Little Less Dum"),
    summary_showCitations: z.boolean().default(true),
    summary_showTags: z.boolean().default(true),
    landingImageAlign: z.nativeEnum(ImageAlignment).default("center"),
    lockedLandingImage: z.string().nullish(),
    cleanOnSync: z.boolean().default(false),
    firstSync: dateToString,
    lastSync: dateToString,
})

export type ParsedSettings = z.output<typeof settingSchema>
export type AppSettings = z.output<typeof settingSchema>
export type ParseSettingsInput = z.input<typeof settingSchema>

