import { z } from "zod";

export const navigationLinkSchema = z.object({
    label: z.string().max(12),
    href: z.string().url()
})

const navigationFormUtilityFields = z.object({
    footerSectionInput: z.string().default("")
})

export const footerSectionSchema = z.object({
    label: z.string().max(15),
    items: navigationLinkSchema.array().max(5).default([]),
})


export const navigationFormSettingSchema = z.object({
     footerSections: footerSectionSchema.array().max(3).default([])
})

export const navigationFormSchemaWithUtilities = navigationFormSettingSchema.merge(navigationFormUtilityFields)

export type NavigationFormSettingSchema = z.infer<typeof navigationFormSettingSchema>

export type NavigationFormWithUtilityFields = z.infer<typeof navigationFormSchemaWithUtilities>
