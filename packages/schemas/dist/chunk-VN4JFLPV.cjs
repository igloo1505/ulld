"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNWTJVV2Mcjs = require('./chunk-NWTJVV2M.cjs');


var _chunk4VZCZVTKcjs = require('./chunk-4VZCZVTK.cjs');


var _chunkH7ATQFXCcjs = require('./chunk-H7ATQFXC.cjs');

// src/database/outputTypeSchemas/RandomImageAggregateArgsSchema.ts
var _zod = require('zod');
var RandomImageAggregateArgsSchema = _zod.z.object({
  where: _chunkH7ATQFXCcjs.RandomImageWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNWTJVV2Mcjs.RandomImageOrderByWithRelationInputSchema.array(), _chunkNWTJVV2Mcjs.RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk4VZCZVTKcjs.RandomImageWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RandomImageAggregateArgsSchema_default = RandomImageAggregateArgsSchema;




exports.RandomImageAggregateArgsSchema = RandomImageAggregateArgsSchema; exports.RandomImageAggregateArgsSchema_default = RandomImageAggregateArgsSchema_default;
//# sourceMappingURL=chunk-VN4JFLPV.cjs.map