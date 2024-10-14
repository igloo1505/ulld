"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWP777X6Ocjs = require('./chunk-WP777X6O.cjs');


var _chunkUIHPGEI2cjs = require('./chunk-UIHPGEI2.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/EnumTaskCategoryNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumTaskCategoryNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema), _zod.z.lazy(() => _chunkWP777X6Ocjs.NestedEnumTaskCategoryNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUIHPGEI2cjs.NestedEnumTaskCategoryNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkUIHPGEI2cjs.NestedEnumTaskCategoryNullableFilterSchema).optional()
}).strict();
var EnumTaskCategoryNullableWithAggregatesFilterSchema_default = EnumTaskCategoryNullableWithAggregatesFilterSchema;




exports.EnumTaskCategoryNullableWithAggregatesFilterSchema = EnumTaskCategoryNullableWithAggregatesFilterSchema; exports.EnumTaskCategoryNullableWithAggregatesFilterSchema_default = EnumTaskCategoryNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-GGHOOBQ7.cjs.map