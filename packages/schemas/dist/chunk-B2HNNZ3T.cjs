"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIJOH437Ucjs = require('./chunk-IJOH437U.cjs');


var _chunkKVAM6TUNcjs = require('./chunk-KVAM6TUN.cjs');


var _chunkQGGOYQUMcjs = require('./chunk-QGGOYQUM.cjs');


var _chunkI5EUBDIFcjs = require('./chunk-I5EUBDIF.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkFYSONMJHcjs = require('./chunk-FYSONMJH.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/outputTypeSchemas/CitationsGroupUpsertArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFYSONMJHcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupUpsertArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.CitationsGroupIncludeSchema.optional(),
  where: _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema,
  create: _zod.z.union([_chunkIJOH437Ucjs.CitationsGroupCreateInputSchema, _chunkKVAM6TUNcjs.CitationsGroupUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkQGGOYQUMcjs.CitationsGroupUpdateInputSchema, _chunkI5EUBDIFcjs.CitationsGroupUncheckedUpdateInputSchema])
}).strict();
var CitationsGroupUpsertArgsSchema_default = CitationsGroupUpsertArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupUpsertArgsSchema = CitationsGroupUpsertArgsSchema; exports.CitationsGroupUpsertArgsSchema_default = CitationsGroupUpsertArgsSchema_default;
//# sourceMappingURL=chunk-B2HNNZ3T.cjs.map