import { z } from "zod";
import { validIconNameList } from "@ulld/utilities/validIconNameList";
export const actionLabelMap = {};
export const defaultQuickLinkLabel = "Quick Links";
export const defaultCopyrightText = `© Uh Little Less Dum ${new Date().getFullYear()} - All rights reserved, but do your thang`;
export const maxFooterSectionLinks = 5;
export const maxFooterSections = 3;
export const maxNavbarLinks = 5;
export const maxSidebarLinks = 6;
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
const iconField = z.enum(validIconNameList);
export const quickLinkSchema = z.object({
    icon: iconField,
    url: z.string()
});
export const sidebarLinkSchema = z.object({
    icon: iconField,
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
    quickLinks: quickLinkSchema.array().default([])
});
export const navigationFormSchemaWithUtilities = navigationFormSettingSchema.merge(navigationFormUtilityFields);
export const defaultFormValues = {
    footerSections: [],
    footerSectionInput: "",
    sidebarLinks: [],
    navbarLinks: [],
    quickLinks: [],
    quickLinkLabel: defaultQuickLinkLabel,
    copyrightText: defaultCopyrightText,
};
