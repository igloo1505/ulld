"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DefinitionCreateManyInputSchema.ts
var _zod = require('zod');
var DefinitionCreateManyInputSchema = _zod.z.object({
  id: _zod.z.string(),
  label: _zod.z.string().optional().nullable(),
  content: _zod.z.string().optional().nullable(),
  alphabeticalLabel: _zod.z.string().optional().nullable(),
  mdxNoteId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var DefinitionCreateManyInputSchema_default = DefinitionCreateManyInputSchema;




exports.DefinitionCreateManyInputSchema = DefinitionCreateManyInputSchema; exports.DefinitionCreateManyInputSchema_default = DefinitionCreateManyInputSchema_default;
//# sourceMappingURL=chunk-IX5ZGEPM.cjs.map