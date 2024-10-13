"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');


var _chunkL4HT4IEBcjs = require('./chunk-L4HT4IEB.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/DietaryItemAggregateArgsSchema.ts
var _zod = require('zod');
var DietaryItemAggregateArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkL4HT4IEBcjs.DietaryItemOrderByWithRelationInputSchema.array(), _chunkL4HT4IEBcjs.DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietaryItemAggregateArgsSchema_default = DietaryItemAggregateArgsSchema;




exports.DietaryItemAggregateArgsSchema = DietaryItemAggregateArgsSchema; exports.DietaryItemAggregateArgsSchema_default = DietaryItemAggregateArgsSchema_default;
//# sourceMappingURL=chunk-DWEFSK3V.cjs.map