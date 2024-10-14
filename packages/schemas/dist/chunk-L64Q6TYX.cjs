"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/TopicCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var TopicCountOutputTypeSelectSchema = _zod.z.object({
  MdxNotes: _zod.z.boolean().optional(),
  ipynbNotes: _zod.z.boolean().optional(),
  QAPair: _zod.z.boolean().optional(),
  practiceExam: _zod.z.boolean().optional(),
  toDo: _zod.z.boolean().optional(),
  todoList: _zod.z.boolean().optional(),
  bibEntries: _zod.z.boolean().optional(),
  equations: _zod.z.boolean().optional()
}).strict();
var TopicCountOutputTypeSelectSchema_default = TopicCountOutputTypeSelectSchema;




exports.TopicCountOutputTypeSelectSchema = TopicCountOutputTypeSelectSchema; exports.TopicCountOutputTypeSelectSchema_default = TopicCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-L64Q6TYX.cjs.map