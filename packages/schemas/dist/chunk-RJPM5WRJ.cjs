"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkF2KOFIOBcjs = require('./chunk-F2KOFIOB.cjs');


var _chunkGQ2HA4TXcjs = require('./chunk-GQ2HA4TX.cjs');

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
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema).array()]).optional(),
  input: _zod.z.lazy(() => _chunkF2KOFIOBcjs.JsonFilterSchema).optional(),
  output: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  equations: _zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationListRelationFilterSchema).optional()
}).strict());
var RelatedValuesWhereUniqueInputSchema_default = RelatedValuesWhereUniqueInputSchema;




exports.RelatedValuesWhereUniqueInputSchema = RelatedValuesWhereUniqueInputSchema; exports.RelatedValuesWhereUniqueInputSchema_default = RelatedValuesWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-RJPM5WRJ.cjs.map