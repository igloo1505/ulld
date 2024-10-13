"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/BibEntryCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var BibEntryCountOutputTypeSelectSchema = _zod.z.object({
  citationGroups: _zod.z.boolean().optional(),
  tags: _zod.z.boolean().optional(),
  topics: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.boolean().optional(),
  ipynbNotes: _zod.z.boolean().optional(),
  readingList: _zod.z.boolean().optional()
}).strict();
var BibEntryCountOutputTypeSelectSchema_default = BibEntryCountOutputTypeSelectSchema;




exports.BibEntryCountOutputTypeSelectSchema = BibEntryCountOutputTypeSelectSchema; exports.BibEntryCountOutputTypeSelectSchema_default = BibEntryCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-YH4S4PLF.cjs.map