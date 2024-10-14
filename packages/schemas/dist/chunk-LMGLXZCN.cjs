"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/CitationsGroupScalarWhereInputSchema.ts
var _zod = require('zod');
var CitationsGroupScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => CitationsGroupScalarWhereInputSchema), _zod.z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => CitationsGroupScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => CitationsGroupScalarWhereInputSchema), _zod.z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var CitationsGroupScalarWhereInputSchema_default = CitationsGroupScalarWhereInputSchema;




exports.CitationsGroupScalarWhereInputSchema = CitationsGroupScalarWhereInputSchema; exports.CitationsGroupScalarWhereInputSchema_default = CitationsGroupScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-LMGLXZCN.cjs.map