import {
  componentConfigSchema
} from "../chunk-JX2ADNSR.mjs";
import {
  pluginCommandPaletteSchema
} from "../chunk-43PW6ZEX.mjs";
import {
  additionalImportsConfigSchema
} from "../chunk-LGHVC4GE.mjs";
import {
  slotKeySchema
} from "../chunk-CUCXOTBK.mjs";
import {
  pluginSettingsSchema
} from "../chunk-2EX74ZCB.mjs";
import {
  pluginAdditionalPageSchema
} from "../chunk-EEL5XKJQ.mjs";
import {
  pluginEventsSchema
} from "../chunk-M6QZGRL4.mjs";
import {
  parserKeyList,
  pluginParserMap
} from "../chunk-OWYLDLQC.mjs";
import {
  navigationLinkSchema
} from "../chunk-FBSQUA72.mjs";
import "../chunk-CFDJDG42.mjs";
import {
  trpcConfigSchema
} from "../chunk-PAERU6NE.mjs";
import {
  tailwindPluginConfig
} from "../chunk-2IESWL2O.mjs";

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
  _developerConfigSchema,
  defaultPluginId,
  developerConfigSchema,
  internalBuildDeveloperConfigSchema,
  parserKeyList
};
//# sourceMappingURL=main.mjs.map