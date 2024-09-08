"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6S7UGUY6cjs = require('./chunk-6S7UGUY6.cjs');


var _chunkVTGYBXLVcjs = require('./chunk-VTGYBXLV.cjs');


var _chunkJ5ILOYTFcjs = require('./chunk-J5ILOYTF.cjs');


var _chunkLCA4ZF72cjs = require('./chunk-LCA4ZF72.cjs');

// src/zod/ui/main.ts
var _zod = require('zod');
var _themeUtils = require('@ulld/tailwind/themeUtils');
var mainUIConfigSchema = _zod.z.object({
  table: _chunkVTGYBXLVcjs.tableUIConfigSchema,
  text: _chunk6S7UGUY6cjs.textConfigSchema,
  media: _chunkJ5ILOYTFcjs.mediaConfigSchema,
  colors: _chunkLCA4ZF72cjs.colorsConfigSchema,
  theme: _themeUtils.themeSchema.default("ulld"),
  autoApplyMdxTitles: _zod.z.boolean().default(true)
}).default({});



exports.mainUIConfigSchema = mainUIConfigSchema;
//# sourceMappingURL=chunk-7K4IXJMC.cjs.map