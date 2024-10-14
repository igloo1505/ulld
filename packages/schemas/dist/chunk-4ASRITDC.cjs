"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL4VLPL3Ccjs = require('./chunk-L4VLPL3C.cjs');


var _chunk665GVJ5Vcjs = require('./chunk-665GVJ5V.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/BoolWithAggregatesFilterSchema.ts
var _zod = require('zod');
var BoolWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.boolean().optional(),
  not: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkL4VLPL3Ccjs.NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunk665GVJ5Vcjs.NestedBoolFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunk665GVJ5Vcjs.NestedBoolFilterSchema).optional()
}).strict();
var BoolWithAggregatesFilterSchema_default = BoolWithAggregatesFilterSchema;




exports.BoolWithAggregatesFilterSchema = BoolWithAggregatesFilterSchema; exports.BoolWithAggregatesFilterSchema_default = BoolWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-4ASRITDC.cjs.map