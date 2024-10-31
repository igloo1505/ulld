"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/internalPlugins/pluginSettings/navigation.ts
var _zod = require('zod');
var _validIconNameList = require('@ulld/utilities/validIconNameList');
var actionLabelMap = {};
var defaultQuickLinkLabel = "Quick Links";
var defaultCopyrightText = `\xA9 Uh Little Less Dum ${(/* @__PURE__ */ new Date()).getFullYear()} - All rights reserved, but do your thang`;
var maxFooterSectionLinks = 5;
var maxFooterSections = 3;
var maxNavbarLinks = 5;
var maxSidebarLinks = 6;
var urlField = _zod.z.string().refine((s) => {
  return ["https://", "http://", "www.", "/", "#"].some((l) => s.startsWith(l));
}, "Must be a valid url.");
var navigationLinkSchema = _zod.z.object({
  label: _zod.z.string().max(12),
  href: urlField
});
var navigationFormUtilityFields = _zod.z.object({
  footerSectionInput: _zod.z.string().default("")
});
var footerSectionSchema = _zod.z.object({
  label: _zod.z.string().max(15),
  items: navigationLinkSchema.array().max(maxFooterSectionLinks).default([])
});
var iconField = _zod.z.enum(_validIconNameList.validIconNameList);
var quickLinkSchema = _zod.z.object({
  icon: iconField,
  url: _zod.z.string()
});
var sidebarLinkSchema = _zod.z.object({
  icon: iconField,
  label: _zod.z.string(),
  fieldType: _zod.z.literal("url").or(_zod.z.literal("action")).default("url"),
  value: _zod.z.string(),
  position: _zod.z.union([_zod.z.literal("top"), _zod.z.literal("bottom")]).default("top")
});
var navbarLinkSchema = _zod.z.object({
  label: _zod.z.string(),
  fieldType: _zod.z.literal("url").or(_zod.z.literal("action")).default("url"),
  value: _zod.z.string()
});
var navigationFormSettingSchema = _zod.z.object({
  footerSections: footerSectionSchema.array().max(maxFooterSections).default([]),
  sidebarLinks: sidebarLinkSchema.array().default([]),
  navbarLinks: navbarLinkSchema.array().max(maxNavbarLinks).default([]),
  quickLinkLabel: _zod.z.string().default(defaultQuickLinkLabel),
  copyrightText: _zod.z.string().default(defaultCopyrightText),
  quickLinks: quickLinkSchema.array().default([])
});
var navigationFormSchemaWithUtilities = navigationFormSettingSchema.merge(navigationFormUtilityFields);
var defaultFormValues = {
  footerSections: [],
  footerSectionInput: "",
  sidebarLinks: [],
  navbarLinks: [],
  quickLinks: [],
  quickLinkLabel: defaultQuickLinkLabel,
  copyrightText: defaultCopyrightText
};
















exports.actionLabelMap = actionLabelMap; exports.defaultCopyrightText = defaultCopyrightText; exports.defaultFormValues = defaultFormValues; exports.defaultQuickLinkLabel = defaultQuickLinkLabel; exports.footerSectionSchema = footerSectionSchema; exports.maxFooterSectionLinks = maxFooterSectionLinks; exports.maxFooterSections = maxFooterSections; exports.maxNavbarLinks = maxNavbarLinks; exports.maxSidebarLinks = maxSidebarLinks; exports.navbarLinkSchema = navbarLinkSchema; exports.navigationFormSchemaWithUtilities = navigationFormSchemaWithUtilities; exports.navigationFormSettingSchema = navigationFormSettingSchema; exports.navigationLinkSchema = navigationLinkSchema; exports.quickLinkSchema = quickLinkSchema; exports.sidebarLinkSchema = sidebarLinkSchema;
//# sourceMappingURL=navigation.cjs.map