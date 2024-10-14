"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/DefinitionWhereUniqueInputSchema.ts
var _zod = require('zod');
var DefinitionWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.string()
}).and(_zod.z.object({
  id: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.DefinitionWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.DefinitionWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.DefinitionWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.DefinitionWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.DefinitionWhereInputSchema).array()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  mdxNote: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema)]).optional().nullable()
}).strict());
var DefinitionWhereUniqueInputSchema_default = DefinitionWhereUniqueInputSchema;




exports.DefinitionWhereUniqueInputSchema = DefinitionWhereUniqueInputSchema; exports.DefinitionWhereUniqueInputSchema_default = DefinitionWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-GJHZIQRB.cjs.map