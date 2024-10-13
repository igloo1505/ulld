"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/KanBanCardScalarWhereInputSchema.ts
var _zod = require('zod');
var KanBanCardScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanCardScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var KanBanCardScalarWhereInputSchema_default = KanBanCardScalarWhereInputSchema;




exports.KanBanCardScalarWhereInputSchema = KanBanCardScalarWhereInputSchema; exports.KanBanCardScalarWhereInputSchema_default = KanBanCardScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-KRLUMOCV.cjs.map