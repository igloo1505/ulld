"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6YH3CNGOcjs = require('./chunk-6YH3CNGO.cjs');


var _chunkOZJCQIEYcjs = require('./chunk-OZJCQIEY.cjs');


var _chunk3JZW2F3Ycjs = require('./chunk-3JZW2F3Y.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/DietGroupByArgsSchema.ts
var _zod = require('zod');
var DietGroupByArgsSchema = _zod.z.object({
  where: _chunkZGGHUMG7cjs.DietWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOZJCQIEYcjs.DietOrderByWithAggregationInputSchema.array(), _chunkOZJCQIEYcjs.DietOrderByWithAggregationInputSchema]).optional(),
  by: _chunk3JZW2F3Ycjs.DietScalarFieldEnumSchema.array(),
  having: _chunk6YH3CNGOcjs.DietScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietGroupByArgsSchema_default = DietGroupByArgsSchema;




exports.DietGroupByArgsSchema = DietGroupByArgsSchema; exports.DietGroupByArgsSchema_default = DietGroupByArgsSchema_default;
//# sourceMappingURL=chunk-CQUDCBO4.cjs.map