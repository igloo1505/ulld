import { z } from "zod";
import { faker } from "@faker-js/faker";
import { validIconNameList } from "@ulld/utilities/validIconNameList";
import {
    maxFooterSectionLinks,
    maxFooterSections,
    maxNavbarLinks,
    maxSidebarLinks,
} from "../staticSettingData";

export const navigationLinkSchema = z.object({
    label: z.string().max(12),
    href: z.string().url(),
});

const navigationFormUtilityFields = z.object({
    footerSectionInput: z.string().default(""),
});

export const footerSectionSchema = z.object({
    label: z.string().max(15),
    items: navigationLinkSchema.array().max(maxFooterSectionLinks).default([]),
});

const urlFieldSchema = z.object({
    url: z.string().transform((x) => (x.startsWith("/") ? x : `/${x}`)),
});

/* TODO: Move this to an enum. */
const actionFieldSchema = z.object({
    action: z.string(),
});

const sidebarLinkSchemaBase = z.object({
    icon: z.enum(validIconNameList),
    label: z.string(),
    fieldType: z.literal("url").or(z.literal("action")).default("url")
});

export const sidebarLinkSchema = z.union([
    sidebarLinkSchemaBase.merge(urlFieldSchema),
    sidebarLinkSchemaBase.merge(actionFieldSchema),
]);

export const navbarLinkSchema = z.union([
    sidebarLinkSchemaBase.omit({ icon: true }).merge(urlFieldSchema),
    sidebarLinkSchemaBase.omit({ icon: true }).merge(actionFieldSchema),
]);

export const navigationFormSettingSchema = z.object({
    footerSections: footerSectionSchema
        .array()
        .max(maxFooterSections)
        .default([]),
    sidebarLinks: sidebarLinkSchema.array().default([]),
    navbarLinks: navbarLinkSchema.array().max(maxNavbarLinks).default([]),
});

export const navigationFormSchemaWithUtilities =
    navigationFormSettingSchema.merge(navigationFormUtilityFields);

export type NavigationFormSettingSchema = z.infer<
    typeof navigationFormSettingSchema
>;

export type NavigationFormWithUtilityFields = z.infer<
    typeof navigationFormSchemaWithUtilities
>;

export type SidebarLink = z.infer<typeof sidebarLinkSchema>;

export const developmentDefaultValues: NavigationFormWithUtilityFields = {
    footerSectionInput: "",
    footerSections: Array(3)
        .fill(0)
        .map(() => {
            return {
                label: faker.lorem.words({ min: 1, max: 3 }),
                items: Array(Math.ceil(Math.random() * 5))
                    .fill(0)
                    .map(() => {
                        return {
                            label: faker.lorem.words({ min: 1, max: 2 }),
                            href: faker.internet.url(),
                        };
                    }),
            };
        }),
    sidebarLinks: Array(faker.number.int({min: 2, max: maxSidebarLinks}))
        .fill(0)
        .map(() => {
            return {
                label: faker.lorem.words({ min: 1, max: 2 }),
                url: `/somePath${Math.random().toString().slice(1, 5)}`,
                icon: faker.helpers.arrayElement(validIconNameList),
            };
        }),
    navbarLinks: Array(4)
        .fill(0)
        .map(() => {
            return {
                label: faker.lorem.words({ min: 1, max: 2 }),
                url: faker.internet.url(),
            };
        }),
};
