"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6ZSKOP5Vcjs = require('./chunk-6ZSKOP5V.cjs');

// src/database/inputTypeSchemas/KanBanListCreateWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListCreateWithoutKanbanInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  cards: _zod.z.lazy(() => _chunk6ZSKOP5Vcjs.KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
var KanBanListCreateWithoutKanbanInputSchema_default = KanBanListCreateWithoutKanbanInputSchema;




exports.KanBanListCreateWithoutKanbanInputSchema = KanBanListCreateWithoutKanbanInputSchema; exports.KanBanListCreateWithoutKanbanInputSchema_default = KanBanListCreateWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-5I6ZZEFL.cjs.map