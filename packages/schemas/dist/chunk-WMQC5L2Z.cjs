"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/KanBanListWhereUniqueInputSchema.ts
var _zod = require('zod');
var KanBanListWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema).array()]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanCardListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema)]).optional().nullable()
}).strict());
var KanBanListWhereUniqueInputSchema_default = KanBanListWhereUniqueInputSchema;




exports.KanBanListWhereUniqueInputSchema = KanBanListWhereUniqueInputSchema; exports.KanBanListWhereUniqueInputSchema_default = KanBanListWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-WMQC5L2Z.cjs.map