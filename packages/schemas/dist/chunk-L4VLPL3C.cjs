"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk665GVJ5Vcjs = require('./chunk-665GVJ5V.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/NestedBoolWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedBoolWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunk665GVJ5Vcjs.NestedBoolFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunk665GVJ5Vcjs.NestedBoolFilterSchema).optional()
}).strict();
var NestedBoolWithAggregatesFilterSchema_default = NestedBoolWithAggregatesFilterSchema;




exports.NestedBoolWithAggregatesFilterSchema = NestedBoolWithAggregatesFilterSchema; exports.NestedBoolWithAggregatesFilterSchema_default = NestedBoolWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-L4VLPL3C.cjs.map