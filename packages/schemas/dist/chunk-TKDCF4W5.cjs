"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWFCJHTJMcjs = require('./chunk-WFCJHTJM.cjs');

// src/database/inputTypeSchemas/DefinitionCreateInputSchema.ts
var _zod = require('zod');
var DefinitionCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  label: _zod.z.string().optional().nullable(),
  content: _zod.z.string().optional().nullable(),
  alphabeticalLabel: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  mdxNote: _zod.z.lazy(() => _chunkWFCJHTJMcjs.MdxNoteCreateNestedOneWithoutDefinitionsInputSchema).optional()
}).strict();
var DefinitionCreateInputSchema_default = DefinitionCreateInputSchema;




exports.DefinitionCreateInputSchema = DefinitionCreateInputSchema; exports.DefinitionCreateInputSchema_default = DefinitionCreateInputSchema_default;
//# sourceMappingURL=chunk-TKDCF4W5.cjs.map