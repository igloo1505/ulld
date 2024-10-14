"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DefinitionUncheckedCreateWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUncheckedCreateWithoutMdxNoteInputSchema = _zod.z.object({
  id: _zod.z.string(),
  label: _zod.z.string().optional().nullable(),
  content: _zod.z.string().optional().nullable(),
  alphabeticalLabel: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var DefinitionUncheckedCreateWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateWithoutMdxNoteInputSchema;




exports.DefinitionUncheckedCreateWithoutMdxNoteInputSchema = DefinitionUncheckedCreateWithoutMdxNoteInputSchema; exports.DefinitionUncheckedCreateWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-FRPCP2GV.cjs.map