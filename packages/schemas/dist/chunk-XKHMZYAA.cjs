"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/KanBanCardScalarWhereInputSchema.ts
var _zod = require('zod');
var KanBanCardScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanCardScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var KanBanCardScalarWhereInputSchema_default = KanBanCardScalarWhereInputSchema;




exports.KanBanCardScalarWhereInputSchema = KanBanCardScalarWhereInputSchema; exports.KanBanCardScalarWhereInputSchema_default = KanBanCardScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-XKHMZYAA.cjs.map