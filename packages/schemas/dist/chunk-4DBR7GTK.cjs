"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/PracticeExamCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var PracticeExamCountOutputTypeSelectSchema = _zod.z.object({
  topics: _zod.z.boolean().optional(),
  tags: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  questions: _zod.z.boolean().optional()
}).strict();
var PracticeExamCountOutputTypeSelectSchema_default = PracticeExamCountOutputTypeSelectSchema;




exports.PracticeExamCountOutputTypeSelectSchema = PracticeExamCountOutputTypeSelectSchema; exports.PracticeExamCountOutputTypeSelectSchema_default = PracticeExamCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-4DBR7GTK.cjs.map