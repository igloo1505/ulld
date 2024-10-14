"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkG7P6QCYOcjs = require('./chunk-G7P6QCYO.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');


var _chunk4R6ZXXTAcjs = require('./chunk-4R6ZXXTA.cjs');


var _chunkX5MAVCUYcjs = require('./chunk-X5MAVCUY.cjs');

// src/database/inputTypeSchemas/StringWithAggregatesFilterSchema.ts
var _zod = require('zod');
var StringWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.string().optional(),
  in: _zod.z.string().array().optional(),
  notIn: _zod.z.string().array().optional(),
  lt: _zod.z.string().optional(),
  lte: _zod.z.string().optional(),
  gt: _zod.z.string().optional(),
  gte: _zod.z.string().optional(),
  contains: _zod.z.string().optional(),
  startsWith: _zod.z.string().optional(),
  endsWith: _zod.z.string().optional(),
  search: _zod.z.string().optional(),
  mode: _zod.z.lazy(() => _chunkX5MAVCUYcjs.QueryModeSchema).optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkG7P6QCYOcjs.NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunk4R6ZXXTAcjs.NestedStringFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunk4R6ZXXTAcjs.NestedStringFilterSchema).optional()
}).strict();
var StringWithAggregatesFilterSchema_default = StringWithAggregatesFilterSchema;




exports.StringWithAggregatesFilterSchema = StringWithAggregatesFilterSchema; exports.StringWithAggregatesFilterSchema_default = StringWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-JNWYIEVV.cjs.map