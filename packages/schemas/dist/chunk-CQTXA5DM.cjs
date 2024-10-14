"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUTWGBWPRcjs = require('./chunk-UTWGBWPR.cjs');


var _chunk7UD6JHCAcjs = require('./chunk-7UD6JHCA.cjs');




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkMZSXSRMGcjs = require('./chunk-MZSXSRMG.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/outputTypeSchemas/KanBanListUpdateArgsSchema.ts
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
var KanBanListUpdateArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanListIncludeSchema.optional(),
  data: _zod.z.union([_chunk7UD6JHCAcjs.KanBanListUpdateInputSchema, _chunkUTWGBWPRcjs.KanBanListUncheckedUpdateInputSchema]),
  where: _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema
}).strict();
var KanBanListUpdateArgsSchema_default = KanBanListUpdateArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListUpdateArgsSchema = KanBanListUpdateArgsSchema; exports.KanBanListUpdateArgsSchema_default = KanBanListUpdateArgsSchema_default;
//# sourceMappingURL=chunk-CQTXA5DM.cjs.map