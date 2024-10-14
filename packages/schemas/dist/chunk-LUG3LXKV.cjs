"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6LJC2FE4cjs = require('./chunk-6LJC2FE4.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/EquationAggregateArgsSchema.ts
var _zod = require('zod');
var EquationAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.EquationWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6LJC2FE4cjs.EquationOrderByWithRelationInputSchema.array(), _chunk6LJC2FE4cjs.EquationOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var EquationAggregateArgsSchema_default = EquationAggregateArgsSchema;




exports.EquationAggregateArgsSchema = EquationAggregateArgsSchema; exports.EquationAggregateArgsSchema_default = EquationAggregateArgsSchema_default;
//# sourceMappingURL=chunk-LUG3LXKV.cjs.map