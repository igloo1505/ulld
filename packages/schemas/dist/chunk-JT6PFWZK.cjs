"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');


var _chunk7CPS7QVLcjs = require('./chunk-7CPS7QVL.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/DietAggregateArgsSchema.ts
var _zod = require('zod');
var DietAggregateArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.DietWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk7CPS7QVLcjs.DietOrderByWithRelationInputSchema.array(), _chunk7CPS7QVLcjs.DietOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkELJLHOYBcjs.DietWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietAggregateArgsSchema_default = DietAggregateArgsSchema;




exports.DietAggregateArgsSchema = DietAggregateArgsSchema; exports.DietAggregateArgsSchema_default = DietAggregateArgsSchema_default;
//# sourceMappingURL=chunk-JT6PFWZK.cjs.map