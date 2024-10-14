"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk577I4H4Mcjs = require('./chunk-577I4H4M.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');


var _chunkWM65OPNIcjs = require('./chunk-WM65OPNI.cjs');

// src/database/inputTypeSchemas/BytesWithAggregatesFilterSchema.ts
var _zod = require('zod');
var BytesWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.instanceof(Buffer).optional(),
  in: _zod.z.instanceof(Buffer).array().optional(),
  notIn: _zod.z.instanceof(Buffer).array().optional(),
  not: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunk577I4H4Mcjs.NestedBytesWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkWM65OPNIcjs.NestedBytesFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkWM65OPNIcjs.NestedBytesFilterSchema).optional()
}).strict();
var BytesWithAggregatesFilterSchema_default = BytesWithAggregatesFilterSchema;




exports.BytesWithAggregatesFilterSchema = BytesWithAggregatesFilterSchema; exports.BytesWithAggregatesFilterSchema_default = BytesWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-2UTLPTAS.cjs.map