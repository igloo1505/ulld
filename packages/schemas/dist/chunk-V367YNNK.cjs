"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKQNGIYHYcjs = require('./chunk-KQNGIYHY.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

// src/database/inputTypeSchemas/NestedBoolNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedBoolNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional().nullable(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkKQNGIYHYcjs.NestedBoolNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkKQNGIYHYcjs.NestedBoolNullableFilterSchema).optional()
}).strict();
var NestedBoolNullableWithAggregatesFilterSchema_default = NestedBoolNullableWithAggregatesFilterSchema;




exports.NestedBoolNullableWithAggregatesFilterSchema = NestedBoolNullableWithAggregatesFilterSchema; exports.NestedBoolNullableWithAggregatesFilterSchema_default = NestedBoolNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-V367YNNK.cjs.map