"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/ReadingListCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var ReadingListCountOutputTypeSelectSchema = _zod.z.object({
  bibEntries: _zod.z.boolean().optional(),
  mdxNotes: _zod.z.boolean().optional(),
  ipynbNotes: _zod.z.boolean().optional()
}).strict();
var ReadingListCountOutputTypeSelectSchema_default = ReadingListCountOutputTypeSelectSchema;




exports.ReadingListCountOutputTypeSelectSchema = ReadingListCountOutputTypeSelectSchema; exports.ReadingListCountOutputTypeSelectSchema_default = ReadingListCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-V22ZS6UA.cjs.map