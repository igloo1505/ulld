"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');

// src/database/outputTypeSchemas/DefinitionFindUniqueOrThrowArgsSchema.ts
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
var DefinitionFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.DefinitionIncludeSchema.optional(),
  where: _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema
}).strict();
var DefinitionFindUniqueOrThrowArgsSchema_default = DefinitionFindUniqueOrThrowArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionFindUniqueOrThrowArgsSchema = DefinitionFindUniqueOrThrowArgsSchema; exports.DefinitionFindUniqueOrThrowArgsSchema_default = DefinitionFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-BRQTMM72.cjs.map