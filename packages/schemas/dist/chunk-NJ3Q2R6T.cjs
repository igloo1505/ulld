"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR6FT6PEEcjs = require('./chunk-R6FT6PEE.cjs');


var _chunkUMEFHZSZcjs = require('./chunk-UMEFHZSZ.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ReadingListAggregateArgsSchema.ts
var _zod = require('zod');
var ReadingListAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.ReadingListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkR6FT6PEEcjs.ReadingListOrderByWithRelationInputSchema.array(), _chunkR6FT6PEEcjs.ReadingListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkUMEFHZSZcjs.ReadingListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ReadingListAggregateArgsSchema_default = ReadingListAggregateArgsSchema;




exports.ReadingListAggregateArgsSchema = ReadingListAggregateArgsSchema; exports.ReadingListAggregateArgsSchema_default = ReadingListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-NJ3Q2R6T.cjs.map