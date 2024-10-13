"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/QuoteSelectSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteSelectSchema_default = QuoteSelectSchema;



exports.QuoteSelectSchema = QuoteSelectSchema; exports.default = QuoteSelectSchema_default;
//# sourceMappingURL=QuoteSelectSchema.cjs.map