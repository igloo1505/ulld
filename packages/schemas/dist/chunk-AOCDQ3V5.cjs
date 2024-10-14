"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/inputTypeSchemas/DefinitionSelectSchema.ts
var _zod = require('zod');
var DefinitionSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  alphabeticalLabel: _zod.z.boolean().optional(),
  mdxNoteId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  mdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteArgsSchema)]).optional()
}).strict();
var DefinitionSelectSchema_default = DefinitionSelectSchema;




exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionSelectSchema_default = DefinitionSelectSchema_default;
//# sourceMappingURL=chunk-AOCDQ3V5.cjs.map