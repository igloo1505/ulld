"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SubjectCreateManyKanbanInputSchema.ts
var _zod = require('zod');
var SubjectCreateManyKanbanInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var SubjectCreateManyKanbanInputSchema_default = SubjectCreateManyKanbanInputSchema;




exports.SubjectCreateManyKanbanInputSchema = SubjectCreateManyKanbanInputSchema; exports.SubjectCreateManyKanbanInputSchema_default = SubjectCreateManyKanbanInputSchema_default;
//# sourceMappingURL=chunk-BOACU25R.cjs.map