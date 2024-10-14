"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/QuoteUncheckedCreateInputSchema.ts
var _zod = require('zod');
var QuoteUncheckedCreateInputSchema = _zod.z.object({
  body: _zod.z.string(),
  author: _zod.z.string(),
  source: _zod.z.string().optional().nullable(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var QuoteUncheckedCreateInputSchema_default = QuoteUncheckedCreateInputSchema;




exports.QuoteUncheckedCreateInputSchema = QuoteUncheckedCreateInputSchema; exports.QuoteUncheckedCreateInputSchema_default = QuoteUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-YNU4JDYI.cjs.map