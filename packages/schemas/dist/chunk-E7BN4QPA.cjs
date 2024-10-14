"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/IntFilterSchema.ts
var _zod = require('zod');
var IntFilterSchema = _zod.z.object({
  equals: _zod.z.number().optional(),
  in: _zod.z.number().array().optional(),
  notIn: _zod.z.number().array().optional(),
  lt: _zod.z.number().optional(),
  lte: _zod.z.number().optional(),
  gt: _zod.z.number().optional(),
  gte: _zod.z.number().optional(),
  not: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema)]).optional()
}).strict();
var IntFilterSchema_default = IntFilterSchema;




exports.IntFilterSchema = IntFilterSchema; exports.IntFilterSchema_default = IntFilterSchema_default;
//# sourceMappingURL=chunk-E7BN4QPA.cjs.map