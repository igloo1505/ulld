"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMYNYGRGBcjs = require('./chunk-MYNYGRGB.cjs');


var _chunkWCNA7J5Pcjs = require('./chunk-WCNA7J5P.cjs');


var _chunkUTWGBWPRcjs = require('./chunk-UTWGBWPR.cjs');


var _chunk7UD6JHCAcjs = require('./chunk-7UD6JHCA.cjs');




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkMZSXSRMGcjs = require('./chunk-MZSXSRMG.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/outputTypeSchemas/KanBanListUpsertArgsSchema.ts
var _zod = require('zod');
var KanBanListSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  indexWithinBoard: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  boardId: _zod.z.boolean().optional(),
  cards: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanCardFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanbanArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMZSXSRMGcjs.KanBanListCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanBanListUpsertArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanListIncludeSchema.optional(),
  where: _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema,
  create: _zod.z.union([_chunkMYNYGRGBcjs.KanBanListCreateInputSchema, _chunkWCNA7J5Pcjs.KanBanListUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk7UD6JHCAcjs.KanBanListUpdateInputSchema, _chunkUTWGBWPRcjs.KanBanListUncheckedUpdateInputSchema])
}).strict();
var KanBanListUpsertArgsSchema_default = KanBanListUpsertArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListUpsertArgsSchema = KanBanListUpsertArgsSchema; exports.KanBanListUpsertArgsSchema_default = KanBanListUpsertArgsSchema_default;
//# sourceMappingURL=chunk-4SLEWHYH.cjs.map