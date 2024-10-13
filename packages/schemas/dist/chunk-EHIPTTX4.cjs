"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanListUncheckedCreateWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListUncheckedCreateWithoutCardsInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  boardId: _zod.z.number().int().optional().nullable()
}).strict();
var KanBanListUncheckedCreateWithoutCardsInputSchema_default = KanBanListUncheckedCreateWithoutCardsInputSchema;




exports.KanBanListUncheckedCreateWithoutCardsInputSchema = KanBanListUncheckedCreateWithoutCardsInputSchema; exports.KanBanListUncheckedCreateWithoutCardsInputSchema_default = KanBanListUncheckedCreateWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-EHIPTTX4.cjs.map