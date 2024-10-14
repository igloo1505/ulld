"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/KanBanCardWhereUniqueInputSchema.ts
var _zod = require('zod');
var KanBanCardWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema).array()]).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  KanBanList: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema)]).optional().nullable()
}).strict());
var KanBanCardWhereUniqueInputSchema_default = KanBanCardWhereUniqueInputSchema;




exports.KanBanCardWhereUniqueInputSchema = KanBanCardWhereUniqueInputSchema; exports.KanBanCardWhereUniqueInputSchema_default = KanBanCardWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-GADYTP7K.cjs.map