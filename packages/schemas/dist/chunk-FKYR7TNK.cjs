"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2KYKOKMJcjs = require('./chunk-2KYKOKMJ.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedCreateWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedCreateWithoutKanbanInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  cards: _zod.z.lazy(() => _chunk2KYKOKMJcjs.KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
var KanBanListUncheckedCreateWithoutKanbanInputSchema_default = KanBanListUncheckedCreateWithoutKanbanInputSchema;




exports.KanBanListUncheckedCreateWithoutKanbanInputSchema = KanBanListUncheckedCreateWithoutKanbanInputSchema; exports.KanBanListUncheckedCreateWithoutKanbanInputSchema_default = KanBanListUncheckedCreateWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-FKYR7TNK.cjs.map