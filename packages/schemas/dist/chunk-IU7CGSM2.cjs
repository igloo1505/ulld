"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUIHPGEI2cjs = require('./chunk-UIHPGEI2.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');

// src/database/inputTypeSchemas/EnumTaskCategoryNullableFilterSchema.ts
var _zod = require('zod');
var EnumTaskCategoryNullableFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).optional().nullable(),
  in: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).array().optional().nullable(),
  notIn: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).array().optional().nullable(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema), _zod.z.lazy(() => _chunkUIHPGEI2cjs.NestedEnumTaskCategoryNullableFilterSchema)]).optional().nullable()
}).strict();
var EnumTaskCategoryNullableFilterSchema_default = EnumTaskCategoryNullableFilterSchema;




exports.EnumTaskCategoryNullableFilterSchema = EnumTaskCategoryNullableFilterSchema; exports.EnumTaskCategoryNullableFilterSchema_default = EnumTaskCategoryNullableFilterSchema_default;
//# sourceMappingURL=chunk-IU7CGSM2.cjs.map