"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/DefinitionWhereUniqueInputSchema.ts
var _zod = require('zod');
var DefinitionWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.string()
}).and(_zod.z.object({
  id: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.DefinitionWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.DefinitionWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.DefinitionWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.DefinitionWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.DefinitionWhereInputSchema).array()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  mdxNote: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema)]).optional().nullable()
}).strict());
var DefinitionWhereUniqueInputSchema_default = DefinitionWhereUniqueInputSchema;




exports.DefinitionWhereUniqueInputSchema = DefinitionWhereUniqueInputSchema; exports.DefinitionWhereUniqueInputSchema_default = DefinitionWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-ZW5RHHVU.cjs.map