"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRWYUID53cjs = require('./chunk-RWYUID53.cjs');


var _chunkQUBDYLJPcjs = require('./chunk-QUBDYLJP.cjs');


var _chunkGPDGG4H2cjs = require('./chunk-GPDGG4H2.cjs');


var _chunkLKRJO5IZcjs = require('./chunk-LKRJO5IZ.cjs');


var _chunkD6WJIHZScjs = require('./chunk-D6WJIHZS.cjs');


var _chunkK6EJQRDHcjs = require('./chunk-K6EJQRDH.cjs');


var _chunk4YLDBR2Icjs = require('./chunk-4YLDBR2I.cjs');


var _chunk7E5ND5RBcjs = require('./chunk-7E5ND5RB.cjs');


var _chunkWBUDMJRFcjs = require('./chunk-WBUDMJRF.cjs');


var _chunkDGZ3LR7Wcjs = require('./chunk-DGZ3LR7W.cjs');


var _chunkZDCYEFSGcjs = require('./chunk-ZDCYEFSG.cjs');

// src/developer/main.ts
var _zod = require('zod');
var _transformExportString = require('@ulld/utilities/transformExportString');
var defaultPluginId = "THIS IS AUTOMATICALLY GENERATED. Do not apply this key yourself. It will be overwritten.";
var _developerConfigSchema = _zod.z.object({
  pluginName: _zod.z.string(),
  label: _zod.z.string().describe(
    "For display purposes. Does not need to match npm the way pluginName does."
  ),
  pluginId: _zod.z.string().default(defaultPluginId),
  slot: _chunk4YLDBR2Icjs.slotKeySchema.optional(),
  components: _chunkD6WJIHZScjs.componentConfigSchema.array().default([]),
  parsers: _chunkGPDGG4H2cjs.pluginParserMap.default({}),
  additionalImports: _chunkRWYUID53cjs.additionalImportsConfigSchema.optional(),
  trpc: _chunkDGZ3LR7Wcjs.trpcConfigSchema.optional(),
  settings: _chunk7E5ND5RBcjs.pluginSettingsSchema.optional(),
  pages: _chunkWBUDMJRFcjs.pluginAdditionalPageSchema.array().default([]),
  events: _chunkQUBDYLJPcjs.pluginEventsSchema.default({}),
  navigationLinks: _chunkLKRJO5IZcjs.navigationLinkSchema.array().default([]),
  commandPalette: _chunkK6EJQRDHcjs.pluginCommandPaletteSchema.default([]),
  tailwind: _chunkZDCYEFSGcjs.tailwindPluginConfig.default({}),
  documentation: _zod.z.string().optional().describe("An optional export of an mdx file that describes the use of your plugin.").transform(_transformExportString.transformExportStringOptional),
  styles: _zod.z.object({
    root: _zod.z.string().optional().describe("Optional export of a scss file that should be imported to all pages."),
    mdx: _zod.z.string().optional().describe("Optional export of a scss file that should be imported to pages with mdx content only.")
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
    pluginId: _zod.z.string().refine((s) => s !== defaultPluginId)
  }
);






exports.defaultPluginId = defaultPluginId; exports._developerConfigSchema = _developerConfigSchema; exports.developerConfigSchema = developerConfigSchema; exports.internalBuildDeveloperConfigSchema = internalBuildDeveloperConfigSchema;
//# sourceMappingURL=chunk-7VYP3AV2.cjs.map