// src/internalPlugins/pluginSettings/navigation.ts
import { z } from "zod";
import { validIconNameList } from "@ulld/utilities/validIconNameList";
var actionLabelMap = {};
var defaultQuickLinkLabel = "Quick Links";
var defaultCopyrightText = `\xA9 Uh Little Less Dum ${(/* @__PURE__ */ new Date()).getFullYear()} - All rights reserved, but do your thang`;
var maxFooterSectionLinks = 5;
var maxFooterSections = 3;
var maxNavbarLinks = 5;
var maxSidebarLinks = 6;
var urlField = z.string().refine((s) => {
  return ["https://", "http://", "www.", "/", "#"].some((l) => s.startsWith(l));
}, "Must be a valid url.");
var navigationLinkSchema = z.object({
  label: z.string().max(12),
  href: urlField
});
var navigationFormUtilityFields = z.object({
  footerSectionInput: z.string().default("")
});
var footerSectionSchema = z.object({
  label: z.string().max(15),
  items: navigationLinkSchema.array().max(maxFooterSectionLinks).default([])
});
var sidebarLinkSchema = z.object({
  icon: z.enum(validIconNameList),
  label: z.string(),
  fieldType: z.literal("url").or(z.literal("action")).default("url"),
  value: z.string(),
  position: z.union([
    z.literal("top"),
    z.literal("bottom")
  ]).default("top")
});
var navbarLinkSchema = z.object({
  label: z.string(),
  fieldType: z.literal("url").or(z.literal("action")).default("url"),
  value: z.string()
});
var navigationFormSettingSchema = z.object({
  footerSections: footerSectionSchema.array().max(maxFooterSections).default([]),
  sidebarLinks: sidebarLinkSchema.array().default([]),
  navbarLinks: navbarLinkSchema.array().max(maxNavbarLinks).default([]),
  quickLinkLabel: z.string().default(defaultQuickLinkLabel),
  copyrightText: z.string().default(defaultCopyrightText)
});
var navigationFormSchemaWithUtilities = navigationFormSettingSchema.merge(navigationFormUtilityFields);
var defaultFormValues = {
  footerSections: [],
  footerSectionInput: "",
  sidebarLinks: [],
  navbarLinks: [],
  quickLinkLabel: defaultQuickLinkLabel,
  copyrightText: defaultCopyrightText
};
export {
  actionLabelMap,
  defaultCopyrightText,
  defaultFormValues,
  defaultQuickLinkLabel,
  footerSectionSchema,
  maxFooterSectionLinks,
  maxFooterSections,
  maxNavbarLinks,
  maxSidebarLinks,
  navbarLinkSchema,
  navigationFormSchemaWithUtilities,
  navigationFormSettingSchema,
  navigationLinkSchema,
  sidebarLinkSchema
};
//# sourceMappingURL=navigation.mjs.map