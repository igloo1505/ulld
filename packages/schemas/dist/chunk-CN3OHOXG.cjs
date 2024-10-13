"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/inputTypeSchemas/NestedEnumTaskCategoryNullableFilterSchema.ts
var _zod = require('zod');
var NestedEnumTaskCategoryNullableFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema), _zod.z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedEnumTaskCategoryNullableFilterSchema_default = NestedEnumTaskCategoryNullableFilterSchema;




exports.NestedEnumTaskCategoryNullableFilterSchema = NestedEnumTaskCategoryNullableFilterSchema; exports.NestedEnumTaskCategoryNullableFilterSchema_default = NestedEnumTaskCategoryNullableFilterSchema_default;
//# sourceMappingURL=chunk-CN3OHOXG.cjs.map