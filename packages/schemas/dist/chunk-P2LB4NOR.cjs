"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');


var _chunkY2LT7T2Ocjs = require('./chunk-Y2LT7T2O.cjs');

// src/database/inputTypeSchemas/NestedBytesWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedBytesWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.instanceof(Buffer).optional(),
  in: _zod.z.instanceof(Buffer).array().optional(),
  notIn: _zod.z.instanceof(Buffer).array().optional(),
  not: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => NestedBytesWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkY2LT7T2Ocjs.NestedBytesFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkY2LT7T2Ocjs.NestedBytesFilterSchema).optional()
}).strict();
var NestedBytesWithAggregatesFilterSchema_default = NestedBytesWithAggregatesFilterSchema;




exports.NestedBytesWithAggregatesFilterSchema = NestedBytesWithAggregatesFilterSchema; exports.NestedBytesWithAggregatesFilterSchema_default = NestedBytesWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-P2LB4NOR.cjs.map