"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6QGRCBK3cjs = require('./chunk-6QGRCBK3.cjs');


var _chunkL6PAM4FLcjs = require('./chunk-L6PAM4FL.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ReadingListAggregateArgsSchema.ts
var _zod = require('zod');
var ReadingListAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.ReadingListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6QGRCBK3cjs.ReadingListOrderByWithRelationInputSchema.array(), _chunk6QGRCBK3cjs.ReadingListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkL6PAM4FLcjs.ReadingListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ReadingListAggregateArgsSchema_default = ReadingListAggregateArgsSchema;




exports.ReadingListAggregateArgsSchema = ReadingListAggregateArgsSchema; exports.ReadingListAggregateArgsSchema_default = ReadingListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-5M6JCN2B.cjs.map