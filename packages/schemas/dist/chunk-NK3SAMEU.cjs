"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP2YOHZ4Lcjs = require('./chunk-P2YOHZ4L.cjs');


var _chunkWYZJEJYXcjs = require('./chunk-WYZJEJYX.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');

// src/database/outputTypeSchemas/DefinitionUpdateArgsSchema.ts
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
var DefinitionUpdateArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.DefinitionIncludeSchema.optional(),
  data: _zod.z.union([_chunkWYZJEJYXcjs.DefinitionUpdateInputSchema, _chunkP2YOHZ4Lcjs.DefinitionUncheckedUpdateInputSchema]),
  where: _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema
}).strict();
var DefinitionUpdateArgsSchema_default = DefinitionUpdateArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionUpdateArgsSchema = DefinitionUpdateArgsSchema; exports.DefinitionUpdateArgsSchema_default = DefinitionUpdateArgsSchema_default;
//# sourceMappingURL=chunk-NK3SAMEU.cjs.map