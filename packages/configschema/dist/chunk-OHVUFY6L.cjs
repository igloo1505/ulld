"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkLFBBNVRXcjs = require('./chunk-LFBBNVRX.cjs');



var _chunkDPP2DGFKcjs = require('./chunk-DPP2DGFK.cjs');



var _chunk6JAVJVIZcjs = require('./chunk-6JAVJVIZ.cjs');



var _chunk6WYSQD2Ocjs = require('./chunk-6WYSQD2O.cjs');

// src/zod/ui/main.ts
var _zod = require('zod');
var _themeUtils = require('@ulld/tailwind/themeUtils');
var mainUIConfigSchema = _zod.z.object({
  table: _chunkDPP2DGFKcjs.tableUIConfigSchema,
  text: _chunkLFBBNVRXcjs.textConfigSchema,
  media: _chunk6JAVJVIZcjs.mediaConfigSchema,
  colors: _chunk6WYSQD2Ocjs.colorsConfigSchema,
  theme: _themeUtils.themeSchema.default("ulld"),
  autoApplyMdxTitles: _zod.z.boolean().default(true)
}).default({});
var mainUIConfigSchemaOutput = _zod.z.object({
  table: _chunkDPP2DGFKcjs.tableUIConfigSchemaOutput,
  text: _chunkLFBBNVRXcjs.textConfigSchemaOutput,
  media: _chunk6JAVJVIZcjs.mediaConfigSchemaOutput,
  colors: _chunk6WYSQD2Ocjs.colorConfigSchemaOutput,
  theme: _themeUtils.themeSchema,
  autoApplyMdxTitles: _zod.z.boolean()
});




exports.mainUIConfigSchema = mainUIConfigSchema; exports.mainUIConfigSchemaOutput = mainUIConfigSchemaOutput;
//# sourceMappingURL=chunk-OHVUFY6L.cjs.map