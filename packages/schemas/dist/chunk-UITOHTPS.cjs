"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/MdxNoteCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var MdxNoteCountOutputTypeSelectSchema = _zod.z.object({
  topics: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  tags: _zod.z.boolean().optional(),
  citations: _zod.z.boolean().optional(),
  ReadingList: _zod.z.boolean().optional(),
  equations: _zod.z.boolean().optional(),
  definitions: _zod.z.boolean().optional(),
  toDo: _zod.z.boolean().optional()
}).strict();
var MdxNoteCountOutputTypeSelectSchema_default = MdxNoteCountOutputTypeSelectSchema;




exports.MdxNoteCountOutputTypeSelectSchema = MdxNoteCountOutputTypeSelectSchema; exports.MdxNoteCountOutputTypeSelectSchema_default = MdxNoteCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-UITOHTPS.cjs.map