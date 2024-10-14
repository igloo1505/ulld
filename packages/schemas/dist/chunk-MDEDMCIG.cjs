"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMYNYGRGBcjs = require('./chunk-MYNYGRGB.cjs');


var _chunkWCNA7J5Pcjs = require('./chunk-WCNA7J5P.cjs');




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkMZSXSRMGcjs = require('./chunk-MZSXSRMG.cjs');

// src/database/outputTypeSchemas/KanBanListCreateArgsSchema.ts
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
var KanBanListCreateArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanListIncludeSchema.optional(),
  data: _zod.z.union([_chunkMYNYGRGBcjs.KanBanListCreateInputSchema, _chunkWCNA7J5Pcjs.KanBanListUncheckedCreateInputSchema])
}).strict();
var KanBanListCreateArgsSchema_default = KanBanListCreateArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListCreateArgsSchema = KanBanListCreateArgsSchema; exports.KanBanListCreateArgsSchema_default = KanBanListCreateArgsSchema_default;
//# sourceMappingURL=chunk-MDEDMCIG.cjs.map