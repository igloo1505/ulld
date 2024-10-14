"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');

// src/database/inputTypeSchemas/NestedEnumTERTIARY_TOGGLEFilterSchema.ts
var _zod = require('zod');
var NestedEnumTERTIARY_TOGGLEFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  in: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema)]).optional()
}).strict();
var NestedEnumTERTIARY_TOGGLEFilterSchema_default = NestedEnumTERTIARY_TOGGLEFilterSchema;




exports.NestedEnumTERTIARY_TOGGLEFilterSchema = NestedEnumTERTIARY_TOGGLEFilterSchema; exports.NestedEnumTERTIARY_TOGGLEFilterSchema_default = NestedEnumTERTIARY_TOGGLEFilterSchema_default;
//# sourceMappingURL=chunk-DHVF6QTN.cjs.map