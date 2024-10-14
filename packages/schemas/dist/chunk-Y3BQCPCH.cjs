"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');


var _chunk73VPHG2Fcjs = require('./chunk-73VPHG2F.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/DietaryItemWhereUniqueInputSchema.ts
var _zod = require('zod');
var DietaryItemWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  glutenFree: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  minimalFructose: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  natural: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  organic: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  impactScore: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  Diet: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietListRelationFilterSchema).optional(),
  Serving: _zod.z.lazy(() => _chunkZGGHUMG7cjs.ServingListRelationFilterSchema).optional()
}).strict());
var DietaryItemWhereUniqueInputSchema_default = DietaryItemWhereUniqueInputSchema;




exports.DietaryItemWhereUniqueInputSchema = DietaryItemWhereUniqueInputSchema; exports.DietaryItemWhereUniqueInputSchema_default = DietaryItemWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-Y3BQCPCH.cjs.map