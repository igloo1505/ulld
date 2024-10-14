"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/KanBanListScalarWhereInputSchema.ts
var _zod = require('zod');
var KanBanListScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereInputSchema), _zod.z.lazy(() => KanBanListScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanListScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereInputSchema), _zod.z.lazy(() => KanBanListScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable()
}).strict();
var KanBanListScalarWhereInputSchema_default = KanBanListScalarWhereInputSchema;




exports.KanBanListScalarWhereInputSchema = KanBanListScalarWhereInputSchema; exports.KanBanListScalarWhereInputSchema_default = KanBanListScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-5IP7IA4K.cjs.map