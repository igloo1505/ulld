"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVATSOMNFcjs = require('./chunk-VATSOMNF.cjs');


var _chunkKS3PTIH3cjs = require('./chunk-KS3PTIH3.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/FloatWithAggregatesFilterSchema.ts
var _zod = require('zod');
var FloatWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkVATSOMNFcjs.NestedFloatWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema).optional()
}).strict();
var FloatWithAggregatesFilterSchema_default = FloatWithAggregatesFilterSchema;




exports.FloatWithAggregatesFilterSchema = FloatWithAggregatesFilterSchema; exports.FloatWithAggregatesFilterSchema_default = FloatWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-DZMYDVTO.cjs.map