"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/SubjectCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var SubjectCountOutputTypeSelectSchema = _zod.z.object({
  MdxNotes: _zod.z.boolean().optional(),
  IpynbNotes: _zod.z.boolean().optional(),
  QaPair: _zod.z.boolean().optional(),
  practiceExam: _zod.z.boolean().optional(),
  todoList: _zod.z.boolean().optional(),
  toDo: _zod.z.boolean().optional(),
  bibEntries: _zod.z.boolean().optional(),
  equations: _zod.z.boolean().optional()
}).strict();
var SubjectCountOutputTypeSelectSchema_default = SubjectCountOutputTypeSelectSchema;




exports.SubjectCountOutputTypeSelectSchema = SubjectCountOutputTypeSelectSchema; exports.SubjectCountOutputTypeSelectSchema_default = SubjectCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-KIVHTVDY.cjs.map