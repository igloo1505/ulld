"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/QuoteSchema.ts
var _zod = require('zod');
var QuoteSchema = _zod.z.object({
  body: _zod.z.string(),
  author: _zod.z.string(),
  source: _zod.z.string().nullable(),
  pinned: _zod.z.boolean(),
  createdAt: _zod.z.coerce.date()
});
var QuotePartialSchema = QuoteSchema.partial();
var QuoteSchema_default = QuoteSchema;





exports.QuoteSchema = QuoteSchema; exports.QuotePartialSchema = QuotePartialSchema; exports.QuoteSchema_default = QuoteSchema_default;
//# sourceMappingURL=chunk-6VKOZL3E.cjs.map