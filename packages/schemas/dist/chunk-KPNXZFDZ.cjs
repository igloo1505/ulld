"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO6FELH33cjs = require('./chunk-O6FELH33.cjs');


var _chunkYNU4JDYIcjs = require('./chunk-YNU4JDYI.cjs');

// src/database/outputTypeSchemas/QuoteCreateArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteCreateArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  data: _zod.z.union([_chunkO6FELH33cjs.QuoteCreateInputSchema, _chunkYNU4JDYIcjs.QuoteUncheckedCreateInputSchema])
}).strict();
var QuoteCreateArgsSchema_default = QuoteCreateArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteCreateArgsSchema = QuoteCreateArgsSchema; exports.QuoteCreateArgsSchema_default = QuoteCreateArgsSchema_default;
//# sourceMappingURL=chunk-KPNXZFDZ.cjs.map