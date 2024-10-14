"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCNZLOQ5Xcjs = require('./chunk-CNZLOQ5X.cjs');

// src/database/inputTypeSchemas/KanBanListCreateWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListCreateWithoutKanbanInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  cards: _zod.z.lazy(() => _chunkCNZLOQ5Xcjs.KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
var KanBanListCreateWithoutKanbanInputSchema_default = KanBanListCreateWithoutKanbanInputSchema;




exports.KanBanListCreateWithoutKanbanInputSchema = KanBanListCreateWithoutKanbanInputSchema; exports.KanBanListCreateWithoutKanbanInputSchema_default = KanBanListCreateWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-W2Q2D26L.cjs.map