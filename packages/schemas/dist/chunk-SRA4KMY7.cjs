"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQVGIBYYLcjs = require('./chunk-QVGIBYYL.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/NestedBoolNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedBoolNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional().nullable(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkQVGIBYYLcjs.NestedBoolNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkQVGIBYYLcjs.NestedBoolNullableFilterSchema).optional()
}).strict();
var NestedBoolNullableWithAggregatesFilterSchema_default = NestedBoolNullableWithAggregatesFilterSchema;




exports.NestedBoolNullableWithAggregatesFilterSchema = NestedBoolNullableWithAggregatesFilterSchema; exports.NestedBoolNullableWithAggregatesFilterSchema_default = NestedBoolNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-SRA4KMY7.cjs.map