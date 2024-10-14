"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk56XSTTZ7cjs = require('./chunk-56XSTTZ7.cjs');


var _chunkJPSKAE2Gcjs = require('./chunk-JPSKAE2G.cjs');


var _chunkAQYQLGYPcjs = require('./chunk-AQYQLGYP.cjs');


var _chunkZOSYZ5FXcjs = require('./chunk-ZOSYZ5FX.cjs');

// src/database/outputTypeSchemas/RandomImageGroupByArgsSchema.ts
var _zod = require('zod');
var RandomImageGroupByArgsSchema = _zod.z.object({
  where: _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkJPSKAE2Gcjs.RandomImageOrderByWithAggregationInputSchema.array(), _chunkJPSKAE2Gcjs.RandomImageOrderByWithAggregationInputSchema]).optional(),
  by: _chunkAQYQLGYPcjs.RandomImageScalarFieldEnumSchema.array(),
  having: _chunk56XSTTZ7cjs.RandomImageScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RandomImageGroupByArgsSchema_default = RandomImageGroupByArgsSchema;




exports.RandomImageGroupByArgsSchema = RandomImageGroupByArgsSchema; exports.RandomImageGroupByArgsSchema_default = RandomImageGroupByArgsSchema_default;
//# sourceMappingURL=chunk-6GDMLBBX.cjs.map