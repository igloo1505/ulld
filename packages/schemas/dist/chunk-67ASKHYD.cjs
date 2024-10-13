"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/KanBanCardWhereUniqueInputSchema.ts
var _zod = require('zod');
var KanBanCardWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema).array()]).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  KanBanList: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema)]).optional().nullable()
}).strict());
var KanBanCardWhereUniqueInputSchema_default = KanBanCardWhereUniqueInputSchema;




exports.KanBanCardWhereUniqueInputSchema = KanBanCardWhereUniqueInputSchema; exports.KanBanCardWhereUniqueInputSchema_default = KanBanCardWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-67ASKHYD.cjs.map