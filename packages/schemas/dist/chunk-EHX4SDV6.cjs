"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

// src/database/outputTypeSchemas/DefinitionFindUniqueArgsSchema.ts
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
var DefinitionFindUniqueArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.DefinitionIncludeSchema.optional(),
  where: _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema
}).strict();
var DefinitionFindUniqueArgsSchema_default = DefinitionFindUniqueArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionFindUniqueArgsSchema = DefinitionFindUniqueArgsSchema; exports.DefinitionFindUniqueArgsSchema_default = DefinitionFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-EHX4SDV6.cjs.map