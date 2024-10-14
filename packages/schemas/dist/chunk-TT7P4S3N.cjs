"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/EquationCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var EquationCountOutputTypeSelectSchema = _zod.z.object({
  relatedValues: _zod.z.boolean().optional(),
  tags: _zod.z.boolean().optional(),
  topics: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  mdxNotes: _zod.z.boolean().optional()
}).strict();
var EquationCountOutputTypeSelectSchema_default = EquationCountOutputTypeSelectSchema;




exports.EquationCountOutputTypeSelectSchema = EquationCountOutputTypeSelectSchema; exports.EquationCountOutputTypeSelectSchema_default = EquationCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-TT7P4S3N.cjs.map