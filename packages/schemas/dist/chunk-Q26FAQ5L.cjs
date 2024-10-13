"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCN3OHOXGcjs = require('./chunk-CN3OHOXG.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/inputTypeSchemas/EnumTaskCategoryNullableFilterSchema.ts
var _zod = require('zod');
var EnumTaskCategoryNullableFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema), _zod.z.lazy(() => _chunkCN3OHOXGcjs.NestedEnumTaskCategoryNullableFilterSchema)]).optional().nullable()
}).strict();
var EnumTaskCategoryNullableFilterSchema_default = EnumTaskCategoryNullableFilterSchema;




exports.EnumTaskCategoryNullableFilterSchema = EnumTaskCategoryNullableFilterSchema; exports.EnumTaskCategoryNullableFilterSchema_default = EnumTaskCategoryNullableFilterSchema_default;
//# sourceMappingURL=chunk-Q26FAQ5L.cjs.map