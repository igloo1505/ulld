"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTKDCF4W5cjs = require('./chunk-TKDCF4W5.cjs');


var _chunkTFTJUM67cjs = require('./chunk-TFTJUM67.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

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
  mdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteArgsSchema)]).optional()
}).strict();
var DefinitionCreateArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.DefinitionIncludeSchema.optional(),
  data: _zod.z.union([_chunkTKDCF4W5cjs.DefinitionCreateInputSchema, _chunkTFTJUM67cjs.DefinitionUncheckedCreateInputSchema])
}).strict();
var DefinitionCreateArgsSchema_default = DefinitionCreateArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionCreateArgsSchema = DefinitionCreateArgsSchema; exports.DefinitionCreateArgsSchema_default = DefinitionCreateArgsSchema_default;
//# sourceMappingURL=chunk-UZUMVYJW.cjs.map