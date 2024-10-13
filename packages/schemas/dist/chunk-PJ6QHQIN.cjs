"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMYJZXZUTcjs = require('./chunk-MYJZXZUT.cjs');


var _chunk6ZSKOP5Vcjs = require('./chunk-6ZSKOP5V.cjs');

// src/database/inputTypeSchemas/KanBanListCreateInputSchema.ts
var _zod = require('zod');
var KanBanListCreateInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  cards: _zod.z.lazy(() => _chunk6ZSKOP5Vcjs.KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkMYJZXZUTcjs.KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();
var KanBanListCreateInputSchema_default = KanBanListCreateInputSchema;




exports.KanBanListCreateInputSchema = KanBanListCreateInputSchema; exports.KanBanListCreateInputSchema_default = KanBanListCreateInputSchema_default;
//# sourceMappingURL=chunk-PJ6QHQIN.cjs.map