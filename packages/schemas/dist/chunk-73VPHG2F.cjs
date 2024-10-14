"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKS3PTIH3cjs = require('./chunk-KS3PTIH3.cjs');

// src/database/inputTypeSchemas/FloatFilterSchema.ts
var _zod = require('zod');
var FloatFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkKS3PTIH3cjs.NestedFloatFilterSchema)]).optional()
}).strict();
var FloatFilterSchema_default = FloatFilterSchema;




exports.FloatFilterSchema = FloatFilterSchema; exports.FloatFilterSchema_default = FloatFilterSchema_default;
//# sourceMappingURL=chunk-73VPHG2F.cjs.map