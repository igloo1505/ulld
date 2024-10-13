"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/KanBanListWhereUniqueInputSchema.ts
var _zod = require('zod');
var KanBanListWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema).array()]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanCardListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema)]).optional().nullable()
}).strict());
var KanBanListWhereUniqueInputSchema_default = KanBanListWhereUniqueInputSchema;




exports.KanBanListWhereUniqueInputSchema = KanBanListWhereUniqueInputSchema; exports.KanBanListWhereUniqueInputSchema_default = KanBanListWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-3UGQGYK7.cjs.map