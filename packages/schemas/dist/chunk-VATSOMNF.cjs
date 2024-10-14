"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKS3PTIH3cjs = require('./chunk-KS3PTIH3.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/NestedFloatWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedFloatWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => NestedFloatWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional()
}).strict();
var NestedFloatWithAggregatesFilterSchema_default = NestedFloatWithAggregatesFilterSchema;




exports.NestedFloatWithAggregatesFilterSchema = NestedFloatWithAggregatesFilterSchema; exports.NestedFloatWithAggregatesFilterSchema_default = NestedFloatWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-VATSOMNF.cjs.map