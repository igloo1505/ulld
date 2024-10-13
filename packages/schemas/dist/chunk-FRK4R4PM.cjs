"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/QuoteCreateManyInputSchema.ts
var _zod = require('zod');
var QuoteCreateManyInputSchema = _zod.z.object({
  body: _zod.z.string(),
  author: _zod.z.string(),
  source: _zod.z.string().optional().nullable(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var QuoteCreateManyInputSchema_default = QuoteCreateManyInputSchema;




exports.QuoteCreateManyInputSchema = QuoteCreateManyInputSchema; exports.QuoteCreateManyInputSchema_default = QuoteCreateManyInputSchema_default;
//# sourceMappingURL=chunk-FRK4R4PM.cjs.map