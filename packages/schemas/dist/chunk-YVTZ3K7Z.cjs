"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLZLCPW6Jcjs = require('./chunk-LZLCPW6J.cjs');

// src/database/inputTypeSchemas/KanBanListCreateWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListCreateWithoutCardsInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  Kanban: _zod.z.lazy(() => _chunkLZLCPW6Jcjs.KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();
var KanBanListCreateWithoutCardsInputSchema_default = KanBanListCreateWithoutCardsInputSchema;




exports.KanBanListCreateWithoutCardsInputSchema = KanBanListCreateWithoutCardsInputSchema; exports.KanBanListCreateWithoutCardsInputSchema_default = KanBanListCreateWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-YVTZ3K7Z.cjs.map