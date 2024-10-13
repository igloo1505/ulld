"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/KanbanCreateManyInputSchema.ts
var _zod = require('zod');
var KanbanCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional()
}).strict();
var KanbanCreateManyInputSchema_default = KanbanCreateManyInputSchema;




exports.KanbanCreateManyInputSchema = KanbanCreateManyInputSchema; exports.KanbanCreateManyInputSchema_default = KanbanCreateManyInputSchema_default;
//# sourceMappingURL=chunk-2UEMVSTC.cjs.map