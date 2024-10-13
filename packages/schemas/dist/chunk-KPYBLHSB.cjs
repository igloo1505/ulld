"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR2GMKW2Wcjs = require('./chunk-R2GMKW2W.cjs');

// src/database/inputTypeSchemas/EnumDIETARY_GOALNullableListFilterSchema.ts
var _zod = require('zod');
var EnumDIETARY_GOALNullableListFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array().optional().nullable(),
  has: _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).optional().nullable(),
  hasEvery: _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array().optional(),
  hasSome: _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array().optional(),
  isEmpty: _zod.z.boolean().optional()
}).strict();
var EnumDIETARY_GOALNullableListFilterSchema_default = EnumDIETARY_GOALNullableListFilterSchema;




exports.EnumDIETARY_GOALNullableListFilterSchema = EnumDIETARY_GOALNullableListFilterSchema; exports.EnumDIETARY_GOALNullableListFilterSchema_default = EnumDIETARY_GOALNullableListFilterSchema_default;
//# sourceMappingURL=chunk-KPYBLHSB.cjs.map