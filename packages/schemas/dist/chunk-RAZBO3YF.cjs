"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TagCreateManyKanbanInputSchema.ts
var _zod = require('zod');
var TagCreateManyKanbanInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var TagCreateManyKanbanInputSchema_default = TagCreateManyKanbanInputSchema;




exports.TagCreateManyKanbanInputSchema = TagCreateManyKanbanInputSchema; exports.TagCreateManyKanbanInputSchema_default = TagCreateManyKanbanInputSchema_default;
//# sourceMappingURL=chunk-RAZBO3YF.cjs.map