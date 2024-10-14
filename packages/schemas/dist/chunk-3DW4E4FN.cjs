"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQVIEZ2GDcjs = require('./chunk-QVIEZ2GD.cjs');


var _chunkDOTDUDP6cjs = require('./chunk-DOTDUDP6.cjs');


var _chunkQY3MROPDcjs = require('./chunk-QY3MROPD.cjs');


var _chunk4Y4CVS22cjs = require('./chunk-4Y4CVS22.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

// src/database/outputTypeSchemas/DefinitionUpsertArgsSchema.ts
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
var DefinitionUpsertArgsSchema = _zod.z.object({
  select: DefinitionSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.DefinitionIncludeSchema.optional(),
  where: _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema,
  create: _zod.z.union([_chunkQVIEZ2GDcjs.DefinitionCreateInputSchema, _chunkDOTDUDP6cjs.DefinitionUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk4Y4CVS22cjs.DefinitionUpdateInputSchema, _chunkQY3MROPDcjs.DefinitionUncheckedUpdateInputSchema])
}).strict();
var DefinitionUpsertArgsSchema_default = DefinitionUpsertArgsSchema;





exports.DefinitionSelectSchema = DefinitionSelectSchema; exports.DefinitionUpsertArgsSchema = DefinitionUpsertArgsSchema; exports.DefinitionUpsertArgsSchema_default = DefinitionUpsertArgsSchema_default;
//# sourceMappingURL=chunk-3DW4E4FN.cjs.map