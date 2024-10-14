"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');

// src/database/inputTypeSchemas/CitationsGroupWhereUniqueInputSchema.ts
var _zod = require('zod');
var CitationsGroupWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema).array()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  entries: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryListRelationFilterSchema).optional()
}).strict());
var CitationsGroupWhereUniqueInputSchema_default = CitationsGroupWhereUniqueInputSchema;




exports.CitationsGroupWhereUniqueInputSchema = CitationsGroupWhereUniqueInputSchema; exports.CitationsGroupWhereUniqueInputSchema_default = CitationsGroupWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-6O57SVSS.cjs.map