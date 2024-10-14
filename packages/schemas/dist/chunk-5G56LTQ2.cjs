"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4GERZWTYcjs = require('./chunk-4GERZWTY.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/DefinitionAggregateArgsSchema.ts
var _zod = require('zod');
var DefinitionAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.DefinitionWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4GERZWTYcjs.DefinitionOrderByWithRelationInputSchema.array(), _chunk4GERZWTYcjs.DefinitionOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DefinitionAggregateArgsSchema_default = DefinitionAggregateArgsSchema;




exports.DefinitionAggregateArgsSchema = DefinitionAggregateArgsSchema; exports.DefinitionAggregateArgsSchema_default = DefinitionAggregateArgsSchema_default;
//# sourceMappingURL=chunk-5G56LTQ2.cjs.map