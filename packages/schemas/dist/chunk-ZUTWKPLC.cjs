"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2KYKOKMJcjs = require('./chunk-2KYKOKMJ.cjs');

// src/database/inputTypeSchemas/KanBanListUncheckedCreateInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  boardId: _zod.z.number().int().optional().nullable(),
  cards: _zod.z.lazy(() => _chunk2KYKOKMJcjs.KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
var KanBanListUncheckedCreateInputSchema_default = KanBanListUncheckedCreateInputSchema;




exports.KanBanListUncheckedCreateInputSchema = KanBanListUncheckedCreateInputSchema; exports.KanBanListUncheckedCreateInputSchema_default = KanBanListUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-ZUTWKPLC.cjs.map