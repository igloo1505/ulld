"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQQZKNDAYcjs = require('./chunk-QQZKNDAY.cjs');


var _chunk7R7APSEVcjs = require('./chunk-7R7APSEV.cjs');


var _chunkRBHNELMPcjs = require('./chunk-RBHNELMP.cjs');


var _chunkQBRICRY5cjs = require('./chunk-QBRICRY5.cjs');


var _chunkHX5FCJZJcjs = require('./chunk-HX5FCJZJ.cjs');

// src/database/outputTypeSchemas/FeatureRequestUpsertArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestUpsertArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: _chunkHX5FCJZJcjs.FeatureRequestWhereUniqueInputSchema,
  create: _zod.z.union([_chunkQQZKNDAYcjs.FeatureRequestCreateInputSchema, _chunk7R7APSEVcjs.FeatureRequestUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkRBHNELMPcjs.FeatureRequestUpdateInputSchema, _chunkQBRICRY5cjs.FeatureRequestUncheckedUpdateInputSchema])
}).strict();
var FeatureRequestUpsertArgsSchema_default = FeatureRequestUpsertArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestUpsertArgsSchema = FeatureRequestUpsertArgsSchema; exports.FeatureRequestUpsertArgsSchema_default = FeatureRequestUpsertArgsSchema_default;
//# sourceMappingURL=chunk-Q447Y5D3.cjs.map