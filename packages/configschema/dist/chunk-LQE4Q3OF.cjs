"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/meta.ts
var _zod = require('zod');
var appMetaSchema = _zod.z.object({
  title: _zod.z.string().default("Uh Little Less Dum"),
  desc: _zod.z.string().optional()
}).default({});



exports.appMetaSchema = appMetaSchema;
//# sourceMappingURL=chunk-LQE4Q3OF.cjs.map