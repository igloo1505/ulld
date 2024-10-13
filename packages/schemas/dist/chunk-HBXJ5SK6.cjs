"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPJ6QHQINcjs = require('./chunk-PJ6QHQIN.cjs');


var _chunkZUTWKPLCcjs = require('./chunk-ZUTWKPLC.cjs');




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkXHY77EXRcjs = require('./chunk-XHY77EXR.cjs');

// src/database/outputTypeSchemas/KanBanListCreateArgsSchema.ts
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
var KanBanListCreateArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanListIncludeSchema.optional(),
  data: _zod.z.union([_chunkPJ6QHQINcjs.KanBanListCreateInputSchema, _chunkZUTWKPLCcjs.KanBanListUncheckedCreateInputSchema])
}).strict();
var KanBanListCreateArgsSchema_default = KanBanListCreateArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListCreateArgsSchema = KanBanListCreateArgsSchema; exports.KanBanListCreateArgsSchema_default = KanBanListCreateArgsSchema_default;
//# sourceMappingURL=chunk-HBXJ5SK6.cjs.map