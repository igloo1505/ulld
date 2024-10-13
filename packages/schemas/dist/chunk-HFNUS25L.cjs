"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBGOC6QGcjs = require('./chunk-VBGOC6QG.cjs');


var _chunkYN43BTNJcjs = require('./chunk-YN43BTNJ.cjs');


var _chunkFZVFNRNScjs = require('./chunk-FZVFNRNS.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/ServingGroupByArgsSchema.ts
var _zod = require('zod');
var ServingGroupByArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.ServingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkYN43BTNJcjs.ServingOrderByWithAggregationInputSchema.array(), _chunkYN43BTNJcjs.ServingOrderByWithAggregationInputSchema]).optional(),
  by: _chunkFZVFNRNScjs.ServingScalarFieldEnumSchema.array(),
  having: _chunkVBGOC6QGcjs.ServingScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ServingGroupByArgsSchema_default = ServingGroupByArgsSchema;




exports.ServingGroupByArgsSchema = ServingGroupByArgsSchema; exports.ServingGroupByArgsSchema_default = ServingGroupByArgsSchema_default;
//# sourceMappingURL=chunk-HFNUS25L.cjs.map