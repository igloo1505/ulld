import { z } from "zod";
import { validIconNameList } from "@ulld/utilities/validIconNameList";
import {
    maxFooterSectionLinks,
    maxFooterSections,
    maxNavbarLinks,
} from "../staticSettingData";


const urlField = z.string().refine((s) => {
    return [
        "https://",
        "http://",
        "www.",
        "/",
        "#"
    ].some((l) => s.startsWith(l))
}, "Must be a valid url.")

export const navigationLinkSchema = z.object({
    label: z.string().max(12),
    href: urlField,
});

const navigationFormUtilityFields = z.object({
    footerSectionInput: z.string().default(""),
});

export const footerSectionSchema = z.object({
    label: z.string().max(15),
    items: navigationLinkSchema.array().max(maxFooterSectionLinks).default([]),
});


export const sidebarLinkSchema = z.object({
    icon: z.enum(validIconNameList),
    label: z.string(),
    fieldType: z.literal("url").or(z.literal("action")).default("url"),
    value: z.string()
});


export const navbarLinkSchema = z.object({
    label: z.string(),
    fieldType: z.literal("url").or(z.literal("action")).default("url"),
    value: z.string()
});

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


export interface NavbarLink {
    label: string
    fieldType: "url" | "action",
    value: string
} 


export type SidebarLink = NavbarLink & {
    icon: typeof validIconNameList[number]
}
