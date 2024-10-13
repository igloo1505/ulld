"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKQNGIYHYcjs = require('./chunk-KQNGIYHY.cjs');

// src/database/inputTypeSchemas/BoolNullableFilterSchema.ts
var _zod = require('zod');
var BoolNullableFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional().nullable(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkKQNGIYHYcjs.NestedBoolNullableFilterSchema)]).optional().nullable()
}).strict();
var BoolNullableFilterSchema_default = BoolNullableFilterSchema;




exports.BoolNullableFilterSchema = BoolNullableFilterSchema; exports.BoolNullableFilterSchema_default = BoolNullableFilterSchema_default;
//# sourceMappingURL=chunk-A2J5Q2K6.cjs.map