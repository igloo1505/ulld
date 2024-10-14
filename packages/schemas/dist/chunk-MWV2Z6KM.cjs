"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TopicCreateManyKanbanInputSchema.ts
var _zod = require('zod');
var TopicCreateManyKanbanInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var TopicCreateManyKanbanInputSchema_default = TopicCreateManyKanbanInputSchema;




exports.TopicCreateManyKanbanInputSchema = TopicCreateManyKanbanInputSchema; exports.TopicCreateManyKanbanInputSchema_default = TopicCreateManyKanbanInputSchema_default;
//# sourceMappingURL=chunk-MWV2Z6KM.cjs.map