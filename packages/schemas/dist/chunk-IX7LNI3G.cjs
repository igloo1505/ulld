"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU2D6LPEOcjs = require('./chunk-U2D6LPEO.cjs');

// src/database/inputTypeSchemas/EnumDIETARY_GOALNullableListFilterSchema.ts
var _zod = require('zod');
var EnumDIETARY_GOALNullableListFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array().optional().nullable(),
  has: _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).optional().nullable(),
  hasEvery: _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array().optional(),
  hasSome: _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array().optional(),
  isEmpty: _zod.z.boolean().optional()
}).strict();
var EnumDIETARY_GOALNullableListFilterSchema_default = EnumDIETARY_GOALNullableListFilterSchema;




exports.EnumDIETARY_GOALNullableListFilterSchema = EnumDIETARY_GOALNullableListFilterSchema; exports.EnumDIETARY_GOALNullableListFilterSchema_default = EnumDIETARY_GOALNullableListFilterSchema_default;
//# sourceMappingURL=chunk-IX7LNI3G.cjs.map