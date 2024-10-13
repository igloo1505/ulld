"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanListCreateManyInputSchema.ts
var _zod = require('zod');
var KanBanListCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable(),
  boardId: _zod.z.number().int().optional().nullable()
}).strict();
var KanBanListCreateManyInputSchema_default = KanBanListCreateManyInputSchema;




exports.KanBanListCreateManyInputSchema = KanBanListCreateManyInputSchema; exports.KanBanListCreateManyInputSchema_default = KanBanListCreateManyInputSchema_default;
//# sourceMappingURL=chunk-ZNYZBKFD.cjs.map