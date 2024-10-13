"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY2S627AMcjs = require('./chunk-Y2S627AM.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');

// src/database/inputTypeSchemas/EnumTERTIARY_TOGGLEFilterSchema.ts
var _zod = require('zod');
var EnumTERTIARY_TOGGLEFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).optional(),
  in: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkY2S627AMcjs.NestedEnumTERTIARY_TOGGLEFilterSchema)]).optional()
}).strict();
var EnumTERTIARY_TOGGLEFilterSchema_default = EnumTERTIARY_TOGGLEFilterSchema;




exports.EnumTERTIARY_TOGGLEFilterSchema = EnumTERTIARY_TOGGLEFilterSchema; exports.EnumTERTIARY_TOGGLEFilterSchema_default = EnumTERTIARY_TOGGLEFilterSchema_default;
//# sourceMappingURL=chunk-QEE4LDK6.cjs.map