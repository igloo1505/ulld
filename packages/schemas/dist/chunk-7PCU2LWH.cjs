"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOUELAW73cjs = require('./chunk-OUELAW73.cjs');


var _chunkDBPGGYSScjs = require('./chunk-DBPGGYSS.cjs');


var _chunk3BULYK7Bcjs = require('./chunk-3BULYK7B.cjs');


var _chunkOZ3ZYXFBcjs = require('./chunk-OZ3ZYXFB.cjs');


var _chunkEQYKEME4cjs = require('./chunk-EQYKEME4.cjs');

// src/database/outputTypeSchemas/QuoteUpsertArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteUpsertArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  where: _chunkEQYKEME4cjs.QuoteWhereUniqueInputSchema,
  create: _zod.z.union([_chunkOUELAW73cjs.QuoteCreateInputSchema, _chunkDBPGGYSScjs.QuoteUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkOZ3ZYXFBcjs.QuoteUpdateInputSchema, _chunk3BULYK7Bcjs.QuoteUncheckedUpdateInputSchema])
}).strict();
var QuoteUpsertArgsSchema_default = QuoteUpsertArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteUpsertArgsSchema = QuoteUpsertArgsSchema; exports.QuoteUpsertArgsSchema_default = QuoteUpsertArgsSchema_default;
//# sourceMappingURL=chunk-7PCU2LWH.cjs.map