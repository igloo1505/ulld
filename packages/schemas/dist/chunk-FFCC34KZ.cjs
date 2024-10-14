"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH2X7TT7Scjs = require('./chunk-H2X7TT7S.cjs');


var _chunkKKNC77BZcjs = require('./chunk-KKNC77BZ.cjs');


var _chunkACGIK4FVcjs = require('./chunk-ACGIK4FV.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/ServingGroupByArgsSchema.ts
var _zod = require('zod');
var ServingGroupByArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.ServingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkKKNC77BZcjs.ServingOrderByWithAggregationInputSchema.array(), _chunkKKNC77BZcjs.ServingOrderByWithAggregationInputSchema]).optional(),
  by: _chunkACGIK4FVcjs.ServingScalarFieldEnumSchema.array(),
  having: _chunkH2X7TT7Scjs.ServingScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ServingGroupByArgsSchema_default = ServingGroupByArgsSchema;




exports.ServingGroupByArgsSchema = ServingGroupByArgsSchema; exports.ServingGroupByArgsSchema_default = ServingGroupByArgsSchema_default;
//# sourceMappingURL=chunk-FFCC34KZ.cjs.map