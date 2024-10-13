"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkXHY77EXRcjs = require('./chunk-XHY77EXR.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');


var _chunkM7BJNGETcjs = require('./chunk-M7BJNGET.cjs');


var _chunkI5CQLM25cjs = require('./chunk-I5CQLM25.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanListFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var KanBanListSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  indexWithinBoard: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  boardId: _zod.z.boolean().optional(),
  cards: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanBanCardFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanbanArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXHY77EXRcjs.KanBanListCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanBanListFindFirstOrThrowArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanListIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.KanBanListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkM7BJNGETcjs.KanBanListOrderByWithRelationInputSchema.array(), _chunkM7BJNGETcjs.KanBanListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkI5CQLM25cjs.KanBanListScalarFieldEnumSchema, _chunkI5CQLM25cjs.KanBanListScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanListFindFirstOrThrowArgsSchema_default = KanBanListFindFirstOrThrowArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListFindFirstOrThrowArgsSchema = KanBanListFindFirstOrThrowArgsSchema; exports.KanBanListFindFirstOrThrowArgsSchema_default = KanBanListFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-YI6OD26J.cjs.map