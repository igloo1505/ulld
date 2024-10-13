"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/TagCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var TagCountOutputTypeSelectSchema = _zod.z.object({
  MdxNotes: _zod.z.boolean().optional(),
  bibEntries: _zod.z.boolean().optional(),
  ipynbNotes: _zod.z.boolean().optional(),
  QAPair: _zod.z.boolean().optional(),
  practiceExam: _zod.z.boolean().optional(),
  equations: _zod.z.boolean().optional(),
  toDo: _zod.z.boolean().optional(),
  todoList: _zod.z.boolean().optional()
}).strict();
var TagCountOutputTypeSelectSchema_default = TagCountOutputTypeSelectSchema;




exports.TagCountOutputTypeSelectSchema = TagCountOutputTypeSelectSchema; exports.TagCountOutputTypeSelectSchema_default = TagCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-2RRBYOOD.cjs.map