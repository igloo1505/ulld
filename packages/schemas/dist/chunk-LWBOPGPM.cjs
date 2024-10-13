"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/IpynbCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var IpynbCountOutputTypeSelectSchema = _zod.z.object({
  tags: _zod.z.boolean().optional(),
  topics: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  citations: _zod.z.boolean().optional(),
  readingList: _zod.z.boolean().optional()
}).strict();
var IpynbCountOutputTypeSelectSchema_default = IpynbCountOutputTypeSelectSchema;




exports.IpynbCountOutputTypeSelectSchema = IpynbCountOutputTypeSelectSchema; exports.IpynbCountOutputTypeSelectSchema_default = IpynbCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-LWBOPGPM.cjs.map