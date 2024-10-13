"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanCardUncheckedCreateInputSchema.ts
var _zod = require('zod');
var KanBanCardUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  listId: _zod.z.number().int().optional().nullable(),
  indexWithinList: _zod.z.number().int(),
  label: _zod.z.string().optional().nullable(),
  details: _zod.z.string().optional().nullable()
}).strict();
var KanBanCardUncheckedCreateInputSchema_default = KanBanCardUncheckedCreateInputSchema;




exports.KanBanCardUncheckedCreateInputSchema = KanBanCardUncheckedCreateInputSchema; exports.KanBanCardUncheckedCreateInputSchema_default = KanBanCardUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-N65HZY3I.cjs.map