"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGKE2DUT2cjs = require('./chunk-GKE2DUT2.cjs');


var _chunkKS3PTIH3cjs = require('./chunk-KS3PTIH3.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/IntWithAggregatesFilterSchema.ts
var _zod = require('zod');
var IntWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkGKE2DUT2cjs.NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional()
}).strict();
var IntWithAggregatesFilterSchema_default = IntWithAggregatesFilterSchema;




exports.IntWithAggregatesFilterSchema = IntWithAggregatesFilterSchema; exports.IntWithAggregatesFilterSchema_default = IntWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-YSVCS7P6.cjs.map