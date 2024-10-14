"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanCardCreateManyInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  listId: _zod.z.number().int().optional().nullable(),
  indexWithinList: _zod.z.number().int(),
  label: _zod.z.string().optional().nullable(),
  details: _zod.z.string().optional().nullable()
}).strict();
var KanBanCardCreateManyInputSchema_default = KanBanCardCreateManyInputSchema;




exports.KanBanCardCreateManyInputSchema = KanBanCardCreateManyInputSchema; exports.KanBanCardCreateManyInputSchema_default = KanBanCardCreateManyInputSchema_default;
//# sourceMappingURL=chunk-OHZRU3WO.cjs.map