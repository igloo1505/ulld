"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk46S7CAXYcjs = require('./chunk-46S7CAXY.cjs');


var _chunkDHVF6QTNcjs = require('./chunk-DHVF6QTN.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/EnumTERTIARY_TOGGLEWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumTERTIARY_TOGGLEWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  in: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunk46S7CAXYcjs.NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkDHVF6QTNcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkDHVF6QTNcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional()
}).strict();
var EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = EnumTERTIARY_TOGGLEWithAggregatesFilterSchema;




exports.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema = EnumTERTIARY_TOGGLEWithAggregatesFilterSchema; exports.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-Y6SMTQXA.cjs.map