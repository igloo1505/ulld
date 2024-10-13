"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/SequentialNoteListCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var SequentialNoteListCountOutputTypeSelectSchema = _zod.z.object({
  MdxNote: _zod.z.boolean().optional(),
  Ipynb: _zod.z.boolean().optional()
}).strict();
var SequentialNoteListCountOutputTypeSelectSchema_default = SequentialNoteListCountOutputTypeSelectSchema;




exports.SequentialNoteListCountOutputTypeSelectSchema = SequentialNoteListCountOutputTypeSelectSchema; exports.SequentialNoteListCountOutputTypeSelectSchema_default = SequentialNoteListCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-MZHHLWNP.cjs.map