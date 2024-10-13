"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ4ZK3YLIcjs = require('./chunk-Z4ZK3YLI.cjs');


var _chunk54YXIVZCcjs = require('./chunk-54YXIVZC.cjs');


var _chunk3OJB4J3Xcjs = require('./chunk-3OJB4J3X.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/DietaryItemGroupByArgsSchema.ts
var _zod = require('zod');
var DietaryItemGroupByArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk54YXIVZCcjs.DietaryItemOrderByWithAggregationInputSchema.array(), _chunk54YXIVZCcjs.DietaryItemOrderByWithAggregationInputSchema]).optional(),
  by: _chunk3OJB4J3Xcjs.DietaryItemScalarFieldEnumSchema.array(),
  having: _chunkZ4ZK3YLIcjs.DietaryItemScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietaryItemGroupByArgsSchema_default = DietaryItemGroupByArgsSchema;




exports.DietaryItemGroupByArgsSchema = DietaryItemGroupByArgsSchema; exports.DietaryItemGroupByArgsSchema_default = DietaryItemGroupByArgsSchema_default;
//# sourceMappingURL=chunk-ZRAMROMX.cjs.map