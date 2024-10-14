"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDHVF6QTNcjs = require('./chunk-DHVF6QTN.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  in: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkDHVF6QTNcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkDHVF6QTNcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional()
}).strict();
var NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema;




exports.NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema = NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema; exports.NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-46S7CAXY.cjs.map