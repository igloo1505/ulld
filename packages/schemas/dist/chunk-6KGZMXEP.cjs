"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWRWYOQXXcjs = require('./chunk-WRWYOQXX.cjs');


var _chunkEQYKEME4cjs = require('./chunk-EQYKEME4.cjs');


var _chunkS2SKAEFOcjs = require('./chunk-S2SKAEFO.cjs');

// src/database/outputTypeSchemas/QuoteAggregateArgsSchema.ts
var _zod = require('zod');
var QuoteAggregateArgsSchema = _zod.z.object({
  where: _chunkS2SKAEFOcjs.QuoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkWRWYOQXXcjs.QuoteOrderByWithRelationInputSchema.array(), _chunkWRWYOQXXcjs.QuoteOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkEQYKEME4cjs.QuoteWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QuoteAggregateArgsSchema_default = QuoteAggregateArgsSchema;




exports.QuoteAggregateArgsSchema = QuoteAggregateArgsSchema; exports.QuoteAggregateArgsSchema_default = QuoteAggregateArgsSchema_default;
//# sourceMappingURL=chunk-6KGZMXEP.cjs.map