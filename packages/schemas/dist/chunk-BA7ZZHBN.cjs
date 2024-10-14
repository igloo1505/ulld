"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanCardCreateManyKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyKanBanListInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  indexWithinList: _zod.z.number().int(),
  label: _zod.z.string().optional().nullable(),
  details: _zod.z.string().optional().nullable()
}).strict();
var KanBanCardCreateManyKanBanListInputSchema_default = KanBanCardCreateManyKanBanListInputSchema;




exports.KanBanCardCreateManyKanBanListInputSchema = KanBanCardCreateManyKanBanListInputSchema; exports.KanBanCardCreateManyKanBanListInputSchema_default = KanBanCardCreateManyKanBanListInputSchema_default;
//# sourceMappingURL=chunk-BA7ZZHBN.cjs.map