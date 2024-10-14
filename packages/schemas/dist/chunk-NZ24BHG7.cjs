"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkL7ZRMRIIcjs = require('./chunk-L7ZRMRII.cjs');


var _chunk73VPHG2Fcjs = require('./chunk-73VPHG2F.cjs');

// src/database/inputTypeSchemas/RelatedValuesWhereUniqueInputSchema.ts
var _zod = require('zod');
var RelatedValuesWhereUniqueInputSchema = _zod.z.union([
  _zod.z.object({
    id: _zod.z.number().int(),
    equationId: _zod.z.number().int().array()
  }),
  _zod.z.object({
    id: _zod.z.number().int()
  }),
  _zod.z.object({
    equationId: _zod.z.number().int().array()
  })
]).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  equationId: _zod.z.number().int().array().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema).array()]).optional(),
  input: _zod.z.lazy(() => _chunkL7ZRMRIIcjs.JsonFilterSchema).optional(),
  output: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  equations: _zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationListRelationFilterSchema).optional()
}).strict());
var RelatedValuesWhereUniqueInputSchema_default = RelatedValuesWhereUniqueInputSchema;




exports.RelatedValuesWhereUniqueInputSchema = RelatedValuesWhereUniqueInputSchema; exports.RelatedValuesWhereUniqueInputSchema_default = RelatedValuesWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-NZ24BHG7.cjs.map