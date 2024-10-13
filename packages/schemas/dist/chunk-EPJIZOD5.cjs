"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNX7XSJH7cjs = require('./chunk-NX7XSJH7.cjs');

// src/database/inputTypeSchemas/BoolFilterSchema.ts
var _zod = require('zod');
var BoolFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNX7XSJH7cjs.NestedBoolFilterSchema)]).optional()
}).strict();
var BoolFilterSchema_default = BoolFilterSchema;




exports.BoolFilterSchema = BoolFilterSchema; exports.BoolFilterSchema_default = BoolFilterSchema_default;
//# sourceMappingURL=chunk-EPJIZOD5.cjs.map