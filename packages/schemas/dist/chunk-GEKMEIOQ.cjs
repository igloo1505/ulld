"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCN3OHOXGcjs = require('./chunk-CN3OHOXG.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

// src/database/inputTypeSchemas/NestedEnumTaskCategoryNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedEnumTaskCategoryNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema), _zod.z.lazy(() => NestedEnumTaskCategoryNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkCN3OHOXGcjs.NestedEnumTaskCategoryNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkCN3OHOXGcjs.NestedEnumTaskCategoryNullableFilterSchema).optional()
}).strict();
var NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default = NestedEnumTaskCategoryNullableWithAggregatesFilterSchema;




exports.NestedEnumTaskCategoryNullableWithAggregatesFilterSchema = NestedEnumTaskCategoryNullableWithAggregatesFilterSchema; exports.NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default = NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-GEKMEIOQ.cjs.map