"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk4GERZWTYcjs = require('./chunk-4GERZWTY.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');


var _chunkNZQATWHZcjs = require('./chunk-NZQATWHZ.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/DefinitionFindFirstOrThrowArgsSchema.ts
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
var DefinitionFindFirstOrThrowArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.DefinitionIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.DefinitionWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4GERZWTYcjs.DefinitionOrderByWithRelationInputSchema.array(), _chunk4GERZWTYcjs.DefinitionOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkNZQATWHZcjs.DefinitionScalarFieldEnumSchema, _chunkNZQATWHZcjs.DefinitionScalarFieldEnumSchema.array()]).optional()
}).strict();
var DefinitionFindFirstOrThrowArgsSchema_default = DefinitionFindFirstOrThrowArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionFindFirstOrThrowArgsSchema = DefinitionFindFirstOrThrowArgsSchema; exports.DefinitionFindFirstOrThrowArgsSchema_default = DefinitionFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-WATIWCDI.cjs.map