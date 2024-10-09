import { z } from "zod";
import { faker } from "@faker-js/faker";
import { validIconNameList } from "@ulld/utilities/validIconNameList";


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

export const sidebarLinkSchema = z.object({
    url: z.string().transform((x) => x.startsWith("/") ? x : `/${x}`),
    icon: z.enum(validIconNameList),
    label: z.string()
})


export const navigationFormSettingSchema = z.object({
     footerSections: footerSectionSchema.array().max(3).default([]),
    sidebarLinks: sidebarLinkSchema.array().default([])
})

export const navigationFormSchemaWithUtilities = navigationFormSettingSchema.merge(navigationFormUtilityFields)

export type NavigationFormSettingSchema = z.infer<typeof navigationFormSettingSchema>

export type NavigationFormWithUtilityFields = z.infer<typeof navigationFormSchemaWithUtilities>

export type SidebarLink = z.infer<typeof sidebarLinkSchema>



export const developmentDefaultValues: NavigationFormWithUtilityFields = {
    footerSectionInput: "",
    footerSections: [
        {
            label: faker.lorem.words({min: 1, max: 3}),
            items: [
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },

                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },
            ],
        },
        {
            label: faker.lorem.words({min: 1, max: 3}),
            items: [
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },

                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },
            ],
        },
        {
            label: faker.lorem.words({min: 1, max: 3}),
            items: [
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },

                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },
                {
                    label: faker.lorem.words({min: 1, max: 2}),
                    href: faker.internet.url(),
                },
            ],
        },
    ],
    sidebarLinks: Array(2).fill(0).map(() => {
        return {
            label: faker.lorem.words({min: 1, max: 2}),
            url: `/somePath${Math.random().toString().slice(1, 5)}`,
            icon: faker.helpers.arrayElement(validIconNameList)
        }
    })
}
