import {
  additionalImportsConfigSchema
} from "./chunk-Q4CON2WH.js";
import {
  pluginEventsSchema
} from "./chunk-X7LEJG3L.js";
import {
  pluginParserMap
} from "./chunk-EVFCGTTV.js";
import {
  navigationLinkSchema
} from "./chunk-HWZMF7B2.js";
import {
  componentConfigSchema
} from "./chunk-CFWZGS6F.js";
import {
  pluginCommandPaletteSchema
} from "./chunk-KXLUK7UA.js";
import {
  slotKeySchema
} from "./chunk-MGU6YS2N.js";
import {
  pluginSettingsSchema
} from "./chunk-3DBXBDVW.js";
import {
  pluginAdditionalPageSchema
} from "./chunk-FPGXMUNM.js";
import {
  trpcConfigSchema
} from "./chunk-4WGUYJHO.js";
import {
  tailwindPluginConfig
} from "./chunk-DWAFWNH2.js";

// src/developer/main.ts
import { z } from "zod";
import { transformExportStringOptional } from "@ulld/utilities/transformExportString";
var defaultPluginId = "THIS IS AUTOMATICALLY GENERATED. Do not apply this key yourself. It will be overwritten.";
var _developerConfigSchema = z.object({
  pluginName: z.string(),
  label: z.string().describe(
    "For display purposes. Does not need to match npm the way pluginName does."
  ),
  pluginId: z.string().default(defaultPluginId),
  slot: slotKeySchema.optional(),
  components: componentConfigSchema.array().default([]),
  parsers: pluginParserMap.default({}),
  additionalImports: additionalImportsConfigSchema.optional(),
  trpc: trpcConfigSchema.optional(),
  settings: pluginSettingsSchema.optional(),
  pages: pluginAdditionalPageSchema.array().default([]),
  events: pluginEventsSchema.default({}),
  navigationLinks: navigationLinkSchema.array().default([]),
  commandPalette: pluginCommandPaletteSchema.default([]),
  tailwind: tailwindPluginConfig.default({}),
  documentation: z.string().optional().describe("An optional export of an mdx file that describes the use of your plugin.").transform(transformExportStringOptional),
  styles: z.object({
    root: z.string().optional().describe("Optional export of a scss file that should be imported to all pages."),
    mdx: z.string().optional().describe("Optional export of a scss file that should be imported to pages with mdx content only.")
  }).default({})
});
var developerConfigSchema = _developerConfigSchema.transform(
  (data) => {
    if (data.settings && !data.settings.title) {
      data.settings.title = data.pluginName;
    }
    return data;
  }
);
var internalBuildDeveloperConfigSchema = _developerConfigSchema.extend(
  {
    pluginId: z.string().refine((s) => s !== defaultPluginId)
  }
);

export {
  defaultPluginId,
  _developerConfigSchema,
  developerConfigSchema,
  internalBuildDeveloperConfigSchema
};
//# sourceMappingURL=chunk-WW6X32RK.js.map