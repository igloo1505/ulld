"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGSBBLEWRcjs = require('./chunk-GSBBLEWR.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/ServingScalarWhereInputSchema.ts
var _zod = require('zod');
var ServingScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereInputSchema), _zod.z.lazy(() => ServingScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ServingScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereInputSchema), _zod.z.lazy(() => ServingScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkGSBBLEWRcjs.EnumQUANTITY_GUESSNullableFilterSchema), _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema)]).optional().nullable()
}).strict();
var ServingScalarWhereInputSchema_default = ServingScalarWhereInputSchema;




exports.ServingScalarWhereInputSchema = ServingScalarWhereInputSchema; exports.ServingScalarWhereInputSchema_default = ServingScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-JNKFOIDE.cjs.map