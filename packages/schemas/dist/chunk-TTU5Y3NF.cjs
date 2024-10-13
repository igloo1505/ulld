"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXP6UKEQKcjs = require('./chunk-XP6UKEQK.cjs');


var _chunkWMC4G3BIcjs = require('./chunk-WMC4G3BI.cjs');


var _chunk72MVN45Vcjs = require('./chunk-72MVN45V.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/CitationsGroupGroupByArgsSchema.ts
var _zod = require('zod');
var CitationsGroupGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXP6UKEQKcjs.CitationsGroupOrderByWithAggregationInputSchema.array(), _chunkXP6UKEQKcjs.CitationsGroupOrderByWithAggregationInputSchema]).optional(),
  by: _chunk72MVN45Vcjs.CitationsGroupScalarFieldEnumSchema.array(),
  having: _chunkWMC4G3BIcjs.CitationsGroupScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var CitationsGroupGroupByArgsSchema_default = CitationsGroupGroupByArgsSchema;




exports.CitationsGroupGroupByArgsSchema = CitationsGroupGroupByArgsSchema; exports.CitationsGroupGroupByArgsSchema_default = CitationsGroupGroupByArgsSchema_default;
//# sourceMappingURL=chunk-TTU5Y3NF.cjs.map