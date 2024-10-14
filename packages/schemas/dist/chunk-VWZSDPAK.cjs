"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/RandomImageSchema.ts
var _zod = require('zod');
var RandomImageSchema = _zod.z.object({
  path: _zod.z.string(),
  createdAt: _zod.z.coerce.date()
});
var RandomImagePartialSchema = RandomImageSchema.partial();
var RandomImageSchema_default = RandomImageSchema;





exports.RandomImageSchema = RandomImageSchema; exports.RandomImagePartialSchema = RandomImagePartialSchema; exports.RandomImageSchema_default = RandomImageSchema_default;
//# sourceMappingURL=chunk-VWZSDPAK.cjs.map