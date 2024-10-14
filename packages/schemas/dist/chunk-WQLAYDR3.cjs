"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQY3MROPDcjs = require('./chunk-QY3MROPD.cjs');


var _chunk4Y4CVS22cjs = require('./chunk-4Y4CVS22.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

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
  mdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteArgsSchema)]).optional()
}).strict();
var DefinitionUpdateArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.DefinitionIncludeSchema.optional(),
  data: _zod.z.union([_chunk4Y4CVS22cjs.DefinitionUpdateInputSchema, _chunkQY3MROPDcjs.DefinitionUncheckedUpdateInputSchema]),
  where: _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema
}).strict();
var DefinitionUpdateArgsSchema_default = DefinitionUpdateArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionUpdateArgsSchema = DefinitionUpdateArgsSchema; exports.DefinitionUpdateArgsSchema_default = DefinitionUpdateArgsSchema_default;
//# sourceMappingURL=chunk-WQLAYDR3.cjs.map