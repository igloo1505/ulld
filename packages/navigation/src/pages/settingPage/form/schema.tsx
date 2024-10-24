import { z } from "zod";
import { validIconNameList } from "@ulld/utilities/validIconNameList";
import type { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";
import {
    defaultCopyrightText,
    defaultQuickLinkLabel,
    maxFooterSectionLinks,
    maxFooterSections,
    maxNavbarLinks,
} from "../staticSettingData";

const urlField = z.string().refine((s) => {
    return ["https://", "http://", "www.", "/", "#"].some((l) => s.startsWith(l));
}, "Must be a valid url.");

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
    value: z.string(),
    position: z.union([
        z.literal("top"),
        z.literal("bottom")
    ]).default("top")
});

export const navbarLinkSchema = z.object({
    label: z.string(),
    fieldType: z.literal("url").or(z.literal("action")).default("url"),
    value: z.string(),
});

export const navigationFormSettingSchema = z.object({
    footerSections: footerSectionSchema
        .array()
        .max(maxFooterSections)
        .default([]),
    sidebarLinks: sidebarLinkSchema.array().default([]),
    navbarLinks: navbarLinkSchema.array().max(maxNavbarLinks).default([]),
    quickLinkLabel: z.string().default(defaultQuickLinkLabel),
    copyrightText: z.string().default(defaultCopyrightText),
});

export const navigationFormSchemaWithUtilities =
    navigationFormSettingSchema.merge(navigationFormUtilityFields);

export type NavbarLink<T extends "url" | "action" = "url" | "action"> = {
    label: string;
    fieldType: T
} & (T extends "url" ? {
    fieldType: "url";
    value: string;
} : {
    fieldType: "action";
    value: InternalGlobalActionIds
})

export type SidebarLink<T extends "url" | "action" = "url" | "action"> = NavbarLink<T> & {
    icon: (typeof validIconNameList)[number];
    position: "top" | "bottom"
};

export type NavigationFormSettingSchema =Omit<z.infer<
    typeof navigationFormSettingSchema
>, "sidebarLinks" | "navbarLinks"> & {
    sidebarLinks: SidebarLink[]
    navbarLinks: NavbarLink[]
}

export type NavigationFormWithUtilityFields = NavigationFormSettingSchema & z.infer<typeof navigationFormUtilityFields>

export const defaultFormValues: NavigationFormWithUtilityFields = {
    footerSections: [],
    footerSectionInput: "",
    sidebarLinks: [],
    navbarLinks: [],
    quickLinkLabel: defaultQuickLinkLabel,
    copyrightText: defaultCopyrightText,
};
