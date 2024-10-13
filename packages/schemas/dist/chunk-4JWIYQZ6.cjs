"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4J2PARXYcjs = require('./chunk-4J2PARXY.cjs');


var _chunkNX7XSJH7cjs = require('./chunk-NX7XSJH7.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/BoolWithAggregatesFilterSchema.ts
var _zod = require('zod');
var BoolWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4J2PARXYcjs.NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkNX7XSJH7cjs.NestedBoolFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkNX7XSJH7cjs.NestedBoolFilterSchema).optional()
}).strict();
var BoolWithAggregatesFilterSchema_default = BoolWithAggregatesFilterSchema;




exports.BoolWithAggregatesFilterSchema = BoolWithAggregatesFilterSchema; exports.BoolWithAggregatesFilterSchema_default = BoolWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-4JWIYQZ6.cjs.map