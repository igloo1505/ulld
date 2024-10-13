"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');

// src/database/inputTypeSchemas/CitationsGroupWhereUniqueInputSchema.ts
var _zod = require('zod');
var CitationsGroupWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema).array()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  entries: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibEntryListRelationFilterSchema).optional()
}).strict());
var CitationsGroupWhereUniqueInputSchema_default = CitationsGroupWhereUniqueInputSchema;




exports.CitationsGroupWhereUniqueInputSchema = CitationsGroupWhereUniqueInputSchema; exports.CitationsGroupWhereUniqueInputSchema_default = CitationsGroupWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-WOQ3TZDJ.cjs.map