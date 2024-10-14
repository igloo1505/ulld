"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUIHPGEI2cjs = require('./chunk-UIHPGEI2.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/NestedEnumTaskCategoryNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedEnumTaskCategoryNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema), _zod.z.lazy(() => NestedEnumTaskCategoryNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUIHPGEI2cjs.NestedEnumTaskCategoryNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkUIHPGEI2cjs.NestedEnumTaskCategoryNullableFilterSchema).optional()
}).strict();
var NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default = NestedEnumTaskCategoryNullableWithAggregatesFilterSchema;




exports.NestedEnumTaskCategoryNullableWithAggregatesFilterSchema = NestedEnumTaskCategoryNullableWithAggregatesFilterSchema; exports.NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default = NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-WP777X6O.cjs.map