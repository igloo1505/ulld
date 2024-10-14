"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanCardCreateWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateWithoutKanBanListInputSchema = _zod.z.object({
  indexWithinList: _zod.z.number().int(),
  label: _zod.z.string().optional().nullable(),
  details: _zod.z.string().optional().nullable()
}).strict();
var KanBanCardCreateWithoutKanBanListInputSchema_default = KanBanCardCreateWithoutKanBanListInputSchema;




exports.KanBanCardCreateWithoutKanBanListInputSchema = KanBanCardCreateWithoutKanBanListInputSchema; exports.KanBanCardCreateWithoutKanBanListInputSchema_default = KanBanCardCreateWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-R4BX55A7.cjs.map