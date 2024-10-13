"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFIPD7SS3cjs = require('./chunk-FIPD7SS3.cjs');


var _chunkRV3UDFLDcjs = require('./chunk-RV3UDFLD.cjs');




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkXHY77EXRcjs = require('./chunk-XHY77EXR.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/outputTypeSchemas/KanBanListUpdateArgsSchema.ts
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
var KanBanListUpdateArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanListIncludeSchema.optional(),
  data: _zod.z.union([_chunkRV3UDFLDcjs.KanBanListUpdateInputSchema, _chunkFIPD7SS3cjs.KanBanListUncheckedUpdateInputSchema]),
  where: _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema
}).strict();
var KanBanListUpdateArgsSchema_default = KanBanListUpdateArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListUpdateArgsSchema = KanBanListUpdateArgsSchema; exports.KanBanListUpdateArgsSchema_default = KanBanListUpdateArgsSchema_default;
//# sourceMappingURL=chunk-KVDDC43Z.cjs.map