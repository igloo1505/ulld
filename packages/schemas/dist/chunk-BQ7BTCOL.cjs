"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPG4KC6XFcjs = require('./chunk-PG4KC6XF.cjs');


var _chunkY2S627AMcjs = require('./chunk-Y2S627AM.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/EnumTERTIARY_TOGGLEWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumTERTIARY_TOGGLEWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).optional(),
  in: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkPG4KC6XFcjs.NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkY2S627AMcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkY2S627AMcjs.NestedEnumTERTIARY_TOGGLEFilterSchema).optional()
}).strict();
var EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = EnumTERTIARY_TOGGLEWithAggregatesFilterSchema;




exports.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema = EnumTERTIARY_TOGGLEWithAggregatesFilterSchema; exports.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-BQ7BTCOL.cjs.map