"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DefinitionCreateWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionCreateWithoutMdxNoteInputSchema = _zod.z.object({
  id: _zod.z.string(),
  label: _zod.z.string().optional().nullable(),
  content: _zod.z.string().optional().nullable(),
  alphabeticalLabel: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var DefinitionCreateWithoutMdxNoteInputSchema_default = DefinitionCreateWithoutMdxNoteInputSchema;




exports.DefinitionCreateWithoutMdxNoteInputSchema = DefinitionCreateWithoutMdxNoteInputSchema; exports.DefinitionCreateWithoutMdxNoteInputSchema_default = DefinitionCreateWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-RDIU6AYA.cjs.map