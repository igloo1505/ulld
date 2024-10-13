"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOUELAW73cjs = require('./chunk-OUELAW73.cjs');


var _chunkDBPGGYSScjs = require('./chunk-DBPGGYSS.cjs');

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
  data: _zod.z.union([_chunkOUELAW73cjs.QuoteCreateInputSchema, _chunkDBPGGYSScjs.QuoteUncheckedCreateInputSchema])
}).strict();
var QuoteCreateArgsSchema_default = QuoteCreateArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteCreateArgsSchema = QuoteCreateArgsSchema; exports.QuoteCreateArgsSchema_default = QuoteCreateArgsSchema_default;
//# sourceMappingURL=chunk-LVHERALN.cjs.map