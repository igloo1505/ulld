import { z } from "zod";
import { faker } from "@faker-js/faker";


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



export const developmentDefaultValues: NavigationFormWithUtilityFields = {

    footerSectionInput: "",
    footerSections: [
        {
            label: faker.lorem.words({min: 1, max: 3}),
            items: [
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },

                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },
            ],
        },
        {
            label: faker.lorem.words({min: 1, max: 3}),
            items: [
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },

                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },
            ],
        },
        {
            label: faker.lorem.words({min: 1, max: 3}),
            items: [
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },

                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: "https://google.com",
                },
            ],
        },
    ],
}
