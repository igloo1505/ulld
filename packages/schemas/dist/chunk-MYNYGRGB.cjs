"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLZLCPW6Jcjs = require('./chunk-LZLCPW6J.cjs');


var _chunkCNZLOQ5Xcjs = require('./chunk-CNZLOQ5X.cjs');

// src/database/inputTypeSchemas/KanBanListCreateInputSchema.ts
var _zod = require('zod');
var KanBanListCreateInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  cards: _zod.z.lazy(() => _chunkCNZLOQ5Xcjs.KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkLZLCPW6Jcjs.KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();
var KanBanListCreateInputSchema_default = KanBanListCreateInputSchema;




exports.KanBanListCreateInputSchema = KanBanListCreateInputSchema; exports.KanBanListCreateInputSchema_default = KanBanListCreateInputSchema_default;
//# sourceMappingURL=chunk-MYNYGRGB.cjs.map