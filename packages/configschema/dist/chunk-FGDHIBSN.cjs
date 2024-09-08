"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6LXZO67Tcjs = require('./chunk-6LXZO67T.cjs');


var _chunkHIZJVV3Ccjs = require('./chunk-HIZJVV3C.cjs');


var _chunkO5CTXNDNcjs = require('./chunk-O5CTXNDN.cjs');


var _chunkO5HV2BYWcjs = require('./chunk-O5HV2BYW.cjs');

// src/zod/ui/main.ts
var _zod = require('zod');
var _themeUtils = require('@ulld/tailwind/themeUtils');
var mainUIConfigSchema = _zod.z.object({
  table: _chunkHIZJVV3Ccjs.tableUIConfigSchema,
  text: _chunk6LXZO67Tcjs.textConfigSchema,
  media: _chunkO5CTXNDNcjs.mediaConfigSchema,
  colors: _chunkO5HV2BYWcjs.colorsConfigSchema,
  theme: _themeUtils.themeSchema.default("ulld"),
  autoApplyMdxTitles: _zod.z.boolean().default(true)
}).default({});



exports.mainUIConfigSchema = mainUIConfigSchema;
//# sourceMappingURL=chunk-FGDHIBSN.cjs.map