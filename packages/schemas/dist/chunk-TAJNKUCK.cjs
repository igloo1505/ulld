"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanCardUncheckedCreateWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUncheckedCreateWithoutKanBanListInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  indexWithinList: _zod.z.number().int(),
  label: _zod.z.string().optional().nullable(),
  details: _zod.z.string().optional().nullable()
}).strict();
var KanBanCardUncheckedCreateWithoutKanBanListInputSchema_default = KanBanCardUncheckedCreateWithoutKanBanListInputSchema;




exports.KanBanCardUncheckedCreateWithoutKanBanListInputSchema = KanBanCardUncheckedCreateWithoutKanBanListInputSchema; exports.KanBanCardUncheckedCreateWithoutKanBanListInputSchema_default = KanBanCardUncheckedCreateWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-TAJNKUCK.cjs.map