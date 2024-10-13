"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/KanBanListScalarWhereInputSchema.ts
var _zod = require('zod');
var KanBanListScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereInputSchema), _zod.z.lazy(() => KanBanListScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanListScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereInputSchema), _zod.z.lazy(() => KanBanListScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable()
}).strict();
var KanBanListScalarWhereInputSchema_default = KanBanListScalarWhereInputSchema;




exports.KanBanListScalarWhereInputSchema = KanBanListScalarWhereInputSchema; exports.KanBanListScalarWhereInputSchema_default = KanBanListScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-L2XG7MBS.cjs.map