"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW3NIJSL3cjs = require('./chunk-W3NIJSL3.cjs');


var _chunk6EBO7IP4cjs = require('./chunk-6EBO7IP4.cjs');


var _chunkKPOVJN7Dcjs = require('./chunk-KPOVJN7D.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ReadingListGroupByArgsSchema.ts
var _zod = require('zod');
var ReadingListGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.ReadingListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6EBO7IP4cjs.ReadingListOrderByWithAggregationInputSchema.array(), _chunk6EBO7IP4cjs.ReadingListOrderByWithAggregationInputSchema]).optional(),
  by: _chunkKPOVJN7Dcjs.ReadingListScalarFieldEnumSchema.array(),
  having: _chunkW3NIJSL3cjs.ReadingListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ReadingListGroupByArgsSchema_default = ReadingListGroupByArgsSchema;




exports.ReadingListGroupByArgsSchema = ReadingListGroupByArgsSchema; exports.ReadingListGroupByArgsSchema_default = ReadingListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-RXP32WER.cjs.map