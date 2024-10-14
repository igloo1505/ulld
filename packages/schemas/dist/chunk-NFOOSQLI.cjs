"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4B6MDZLUcjs = require('./chunk-4B6MDZLU.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanCardAggregateArgsSchema.ts
var _zod = require('zod');
var KanBanCardAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4B6MDZLUcjs.KanBanCardOrderByWithRelationInputSchema.array(), _chunk4B6MDZLUcjs.KanBanCardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanCardAggregateArgsSchema_default = KanBanCardAggregateArgsSchema;




exports.KanBanCardAggregateArgsSchema = KanBanCardAggregateArgsSchema; exports.KanBanCardAggregateArgsSchema_default = KanBanCardAggregateArgsSchema_default;
//# sourceMappingURL=chunk-NFOOSQLI.cjs.map