"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/QuoteCreateInputSchema.ts
var _zod = require('zod');
var QuoteCreateInputSchema = _zod.z.object({
  body: _zod.z.string(),
  author: _zod.z.string(),
  source: _zod.z.string().optional().nullable(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var QuoteCreateInputSchema_default = QuoteCreateInputSchema;




exports.QuoteCreateInputSchema = QuoteCreateInputSchema; exports.QuoteCreateInputSchema_default = QuoteCreateInputSchema_default;
//# sourceMappingURL=chunk-O6FELH33.cjs.map