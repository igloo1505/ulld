"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkXHY77EXRcjs = require('./chunk-XHY77EXR.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/outputTypeSchemas/KanBanListFindUniqueOrThrowArgsSchema.ts
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
var KanBanListFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanListIncludeSchema.optional(),
  where: _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema
}).strict();
var KanBanListFindUniqueOrThrowArgsSchema_default = KanBanListFindUniqueOrThrowArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListFindUniqueOrThrowArgsSchema = KanBanListFindUniqueOrThrowArgsSchema; exports.KanBanListFindUniqueOrThrowArgsSchema_default = KanBanListFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-4BQKQVU5.cjs.map