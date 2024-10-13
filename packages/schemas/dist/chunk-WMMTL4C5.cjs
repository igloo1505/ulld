"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/CitationsGroupScalarWhereInputSchema.ts
var _zod = require('zod');
var CitationsGroupScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => CitationsGroupScalarWhereInputSchema), _zod.z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => CitationsGroupScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => CitationsGroupScalarWhereInputSchema), _zod.z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var CitationsGroupScalarWhereInputSchema_default = CitationsGroupScalarWhereInputSchema;




exports.CitationsGroupScalarWhereInputSchema = CitationsGroupScalarWhereInputSchema; exports.CitationsGroupScalarWhereInputSchema_default = CitationsGroupScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-WMMTL4C5.cjs.map