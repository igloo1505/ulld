"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDHVF6QTNcjs = require('./chunk-DHVF6QTN.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');

// src/database/inputTypeSchemas/EnumTERTIARY_TOGGLEFilterSchema.ts
var _zod = require('zod');
var EnumTERTIARY_TOGGLEFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  in: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkDHVF6QTNcjs.NestedEnumTERTIARY_TOGGLEFilterSchema)]).optional()
}).strict();
var EnumTERTIARY_TOGGLEFilterSchema_default = EnumTERTIARY_TOGGLEFilterSchema;




exports.EnumTERTIARY_TOGGLEFilterSchema = EnumTERTIARY_TOGGLEFilterSchema; exports.EnumTERTIARY_TOGGLEFilterSchema_default = EnumTERTIARY_TOGGLEFilterSchema_default;
//# sourceMappingURL=chunk-FTLKOFHA.cjs.map