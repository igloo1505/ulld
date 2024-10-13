"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SubjectCreateManyInputSchema.ts
var _zod = require('zod');
var SubjectCreateManyInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var SubjectCreateManyInputSchema_default = SubjectCreateManyInputSchema;




exports.SubjectCreateManyInputSchema = SubjectCreateManyInputSchema; exports.SubjectCreateManyInputSchema_default = SubjectCreateManyInputSchema_default;
//# sourceMappingURL=chunk-UCNHQRTG.cjs.map