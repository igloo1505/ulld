"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRGZZUMYGcjs = require('./chunk-RGZZUMYG.cjs');


var _chunkEGACULCYcjs = require('./chunk-EGACULCY.cjs');


var _chunkWKAU5QB7cjs = require('./chunk-WKAU5QB7.cjs');

// src/database/outputTypeSchemas/DJTAggregateArgsSchema.ts
var _zod = require('zod');
var DJTAggregateArgsSchema = _zod.z.object({
  where: _chunkWKAU5QB7cjs.DJTWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkRGZZUMYGcjs.DJTOrderByWithRelationInputSchema.array(), _chunkRGZZUMYGcjs.DJTOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkEGACULCYcjs.DJTWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DJTAggregateArgsSchema_default = DJTAggregateArgsSchema;




exports.DJTAggregateArgsSchema = DJTAggregateArgsSchema; exports.DJTAggregateArgsSchema_default = DJTAggregateArgsSchema_default;
//# sourceMappingURL=chunk-DW4SW2LR.cjs.map