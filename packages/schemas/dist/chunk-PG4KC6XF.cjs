"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY2S627AMcjs = require('./chunk-Y2S627AM.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema.ts
var _zod = require('zod');
var NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).optional(),
  in: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkY2S627AMcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkY2S627AMcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional()
}).strict();
var NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema;




exports.NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema = NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema; exports.NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-PG4KC6XF.cjs.map