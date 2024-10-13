"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP2LB4NORcjs = require('./chunk-P2LB4NOR.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');


var _chunkY2LT7T2Ocjs = require('./chunk-Y2LT7T2O.cjs');

// src/database/inputTypeSchemas/BytesWithAggregatesFilterSchema.ts
var _zod = require('zod');
var BytesWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.instanceof(Buffer).optional(),
  in: _zod.z.instanceof(Buffer).array().optional(),
  notIn: _zod.z.instanceof(Buffer).array().optional(),
  not: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkP2LB4NORcjs.NestedBytesWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkY2LT7T2Ocjs.NestedBytesFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkY2LT7T2Ocjs.NestedBytesFilterSchema).optional()
}).strict();
var BytesWithAggregatesFilterSchema_default = BytesWithAggregatesFilterSchema;




exports.BytesWithAggregatesFilterSchema = BytesWithAggregatesFilterSchema; exports.BytesWithAggregatesFilterSchema_default = BytesWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-TDJCCTB6.cjs.map