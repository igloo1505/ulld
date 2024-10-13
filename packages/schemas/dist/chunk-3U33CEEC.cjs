"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');


var _chunk5MHLGRUAcjs = require('./chunk-5MHLGRUA.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/DietAggregateArgsSchema.ts
var _zod = require('zod');
var DietAggregateArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.DietWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema.array(), _chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietAggregateArgsSchema_default = DietAggregateArgsSchema;




exports.DietAggregateArgsSchema = DietAggregateArgsSchema; exports.DietAggregateArgsSchema_default = DietAggregateArgsSchema_default;
//# sourceMappingURL=chunk-3U33CEEC.cjs.map