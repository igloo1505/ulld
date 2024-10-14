"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQVIEZ2GDcjs = require('./chunk-QVIEZ2GD.cjs');


var _chunkDOTDUDP6cjs = require('./chunk-DOTDUDP6.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/DefinitionCreateArgsSchema.ts
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
var DefinitionCreateArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.DefinitionIncludeSchema.optional(),
  data: _zod.z.union([_chunkQVIEZ2GDcjs.DefinitionCreateInputSchema, _chunkDOTDUDP6cjs.DefinitionUncheckedCreateInputSchema])
}).strict();
var DefinitionCreateArgsSchema_default = DefinitionCreateArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionCreateArgsSchema = DefinitionCreateArgsSchema; exports.DefinitionCreateArgsSchema_default = DefinitionCreateArgsSchema_default;
//# sourceMappingURL=chunk-X6S5RHZ2.cjs.map