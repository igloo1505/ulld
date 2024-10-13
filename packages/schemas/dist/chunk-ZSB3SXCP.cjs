"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGEKMEIOQcjs = require('./chunk-GEKMEIOQ.cjs');


var _chunkCN3OHOXGcjs = require('./chunk-CN3OHOXG.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

// src/database/inputTypeSchemas/EnumTaskCategoryNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumTaskCategoryNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema), _zod.z.lazy(() => _chunkGEKMEIOQcjs.NestedEnumTaskCategoryNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkCN3OHOXGcjs.NestedEnumTaskCategoryNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkCN3OHOXGcjs.NestedEnumTaskCategoryNullableFilterSchema).optional()
}).strict();
var EnumTaskCategoryNullableWithAggregatesFilterSchema_default = EnumTaskCategoryNullableWithAggregatesFilterSchema;




exports.EnumTaskCategoryNullableWithAggregatesFilterSchema = EnumTaskCategoryNullableWithAggregatesFilterSchema; exports.EnumTaskCategoryNullableWithAggregatesFilterSchema_default = EnumTaskCategoryNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-ZSB3SXCP.cjs.map