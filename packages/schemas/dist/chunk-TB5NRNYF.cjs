"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DefinitionCreateManyMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionCreateManyMdxNoteInputSchema = _zod.z.object({
  id: _zod.z.string(),
  label: _zod.z.string().optional().nullable(),
  content: _zod.z.string().optional().nullable(),
  alphabeticalLabel: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var DefinitionCreateManyMdxNoteInputSchema_default = DefinitionCreateManyMdxNoteInputSchema;




exports.DefinitionCreateManyMdxNoteInputSchema = DefinitionCreateManyMdxNoteInputSchema; exports.DefinitionCreateManyMdxNoteInputSchema_default = DefinitionCreateManyMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-TB5NRNYF.cjs.map