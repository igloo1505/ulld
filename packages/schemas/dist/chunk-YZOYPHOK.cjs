"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO6H4XQHFcjs = require('./chunk-O6H4XQHF.cjs');


var _chunk3H7II5AUcjs = require('./chunk-3H7II5AU.cjs');


var _chunkJ3XWPE7Ncjs = require('./chunk-J3XWPE7N.cjs');


var _chunkWKAU5QB7cjs = require('./chunk-WKAU5QB7.cjs');

// src/database/outputTypeSchemas/DJTGroupByArgsSchema.ts
var _zod = require('zod');
var DJTGroupByArgsSchema = _zod.z.object({
  where: _chunkWKAU5QB7cjs.DJTWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkO6H4XQHFcjs.DJTOrderByWithAggregationInputSchema.array(), _chunkO6H4XQHFcjs.DJTOrderByWithAggregationInputSchema]).optional(),
  by: _chunkJ3XWPE7Ncjs.DJTScalarFieldEnumSchema.array(),
  having: _chunk3H7II5AUcjs.DJTScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DJTGroupByArgsSchema_default = DJTGroupByArgsSchema;




exports.DJTGroupByArgsSchema = DJTGroupByArgsSchema; exports.DJTGroupByArgsSchema_default = DJTGroupByArgsSchema_default;
//# sourceMappingURL=chunk-YZOYPHOK.cjs.map