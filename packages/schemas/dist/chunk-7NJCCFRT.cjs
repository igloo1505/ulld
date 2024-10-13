"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEWPH3EBUcjs = require('./chunk-EWPH3EBU.cjs');


var _chunkUYFIWA5Bcjs = require('./chunk-UYFIWA5B.cjs');

// src/database/inputTypeSchemas/StringFilterSchema.ts
var _zod = require('zod');
var StringFilterSchema = _zod.z.object({
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
  mode: _zod.z.lazy(() => _chunkUYFIWA5Bcjs.QueryModeSchema).optional(),
  not: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkEWPH3EBUcjs.NestedStringFilterSchema)]).optional()
}).strict();
var StringFilterSchema_default = StringFilterSchema;




exports.StringFilterSchema = StringFilterSchema; exports.StringFilterSchema_default = StringFilterSchema_default;
//# sourceMappingURL=chunk-7NJCCFRT.cjs.map