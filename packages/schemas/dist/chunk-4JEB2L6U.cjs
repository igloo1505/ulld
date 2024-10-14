"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanBanListCreateManyKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListCreateManyKanbanInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().optional().nullable()
}).strict();
var KanBanListCreateManyKanbanInputSchema_default = KanBanListCreateManyKanbanInputSchema;




exports.KanBanListCreateManyKanbanInputSchema = KanBanListCreateManyKanbanInputSchema; exports.KanBanListCreateManyKanbanInputSchema_default = KanBanListCreateManyKanbanInputSchema_default;
//# sourceMappingURL=chunk-4JEB2L6U.cjs.map