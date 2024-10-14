"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/KanbanCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var KanbanCountOutputTypeSelectSchema = _zod.z.object({
  lists: _zod.z.boolean().optional(),
  tags: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  topics: _zod.z.boolean().optional()
}).strict();
var KanbanCountOutputTypeSelectSchema_default = KanbanCountOutputTypeSelectSchema;




exports.KanbanCountOutputTypeSelectSchema = KanbanCountOutputTypeSelectSchema; exports.KanbanCountOutputTypeSelectSchema_default = KanbanCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-RSCZJAYJ.cjs.map