"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSRA4KMY7cjs = require('./chunk-SRA4KMY7.cjs');


var _chunkQVGIBYYLcjs = require('./chunk-QVGIBYYL.cjs');


var _chunkTDZUUUZNcjs = require('./chunk-TDZUUUZN.cjs');

// src/database/inputTypeSchemas/BoolNullableWithAggregatesFilterSchema.ts
var _zod = require('zod');
var BoolNullableWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional().nullable(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSRA4KMY7cjs.NestedBoolNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: _zod.z.lazy(() => _chunkTDZUUUZNcjs.NestedIntNullableFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkQVGIBYYLcjs.NestedBoolNullableFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkQVGIBYYLcjs.NestedBoolNullableFilterSchema).optional()
}).strict();
var BoolNullableWithAggregatesFilterSchema_default = BoolNullableWithAggregatesFilterSchema;




exports.BoolNullableWithAggregatesFilterSchema = BoolNullableWithAggregatesFilterSchema; exports.BoolNullableWithAggregatesFilterSchema_default = BoolNullableWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-GJFWAU6H.cjs.map