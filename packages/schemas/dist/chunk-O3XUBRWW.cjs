"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkNL2I3Y33cjs = require('./chunk-NL2I3Y33.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');


var _chunkCWX6BHAUcjs = require('./chunk-CWX6BHAU.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/DefinitionFindFirstArgsSchema.ts
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
var DefinitionFindFirstArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.DefinitionIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.DefinitionWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNL2I3Y33cjs.DefinitionOrderByWithRelationInputSchema.array(), _chunkNL2I3Y33cjs.DefinitionOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkCWX6BHAUcjs.DefinitionScalarFieldEnumSchema, _chunkCWX6BHAUcjs.DefinitionScalarFieldEnumSchema.array()]).optional()
}).strict();
var DefinitionFindFirstArgsSchema_default = DefinitionFindFirstArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionFindFirstArgsSchema = DefinitionFindFirstArgsSchema; exports.DefinitionFindFirstArgsSchema_default = DefinitionFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-O3XUBRWW.cjs.map