"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/meta.ts
var _zod = require('zod');
var appMetaSchema = _zod.z.object({
  title: _zod.z.string().default("Uh Little Less Dum"),
  desc: _zod.z.string().optional()
}).default({});
var appMetaSchemaOutput = _zod.z.object({
  title: _zod.z.string(),
  desc: _zod.z.string().optional()
});




exports.appMetaSchema = appMetaSchema; exports.appMetaSchemaOutput = appMetaSchemaOutput;
//# sourceMappingURL=chunk-MBLNSF6D.cjs.map