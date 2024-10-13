"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV367YNNKcjs = require('./chunk-V367YNNK.cjs');


var _chunkKQNGIYHYcjs = require('./chunk-KQNGIYHY.cjs');


var _chunkY4FY5MF3cjs = require('./chunk-Y4FY5MF3.cjs');

// src/database/inputTypeSchemas/BoolNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var BoolNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional().nullable(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkV367YNNKcjs.NestedBoolNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkY4FY5MF3cjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkKQNGIYHYcjs.NestedBoolNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkKQNGIYHYcjs.NestedBoolNullableFilterSchema).optional()
}).strict();
var BoolNullableWithAggregatesFilterSchema_default = BoolNullableWithAggregatesFilterSchema;




exports.BoolNullableWithAggregatesFilterSchema = BoolNullableWithAggregatesFilterSchema; exports.BoolNullableWithAggregatesFilterSchema_default = BoolNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-X46R3GXJ.cjs.map