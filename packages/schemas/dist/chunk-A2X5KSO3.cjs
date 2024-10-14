"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');


var _chunkGSBBLEWRcjs = require('./chunk-GSBBLEWR.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/ServingWhereUniqueInputSchema.ts
var _zod = require('zod');
var ServingWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.ServingWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.ServingWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkZGGHUMG7cjs.ServingWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.ServingWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.ServingWhereInputSchema).array()]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkGSBBLEWRcjs.EnumQUANTITY_GUESSNullableFilterSchema), _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema)]).optional().nullable(),
  item: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemRelationFilterSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema)]).optional()
}).strict());
var ServingWhereUniqueInputSchema_default = ServingWhereUniqueInputSchema;




exports.ServingWhereUniqueInputSchema = ServingWhereUniqueInputSchema; exports.ServingWhereUniqueInputSchema_default = ServingWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-A2X5KSO3.cjs.map