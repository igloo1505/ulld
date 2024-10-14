"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DefinitionUncheckedCreateInputSchema.ts
var _zod = require('zod');
var DefinitionUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  label: _zod.z.string().optional().nullable(),
  content: _zod.z.string().optional().nullable(),
  alphabeticalLabel: _zod.z.string().optional().nullable(),
  mdxNoteId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var DefinitionUncheckedCreateInputSchema_default = DefinitionUncheckedCreateInputSchema;




exports.DefinitionUncheckedCreateInputSchema = DefinitionUncheckedCreateInputSchema; exports.DefinitionUncheckedCreateInputSchema_default = DefinitionUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-DOTDUDP6.cjs.map