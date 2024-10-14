"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQGGOYQUMcjs = require('./chunk-QGGOYQUM.cjs');


var _chunkI5EUBDIFcjs = require('./chunk-I5EUBDIF.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkFYSONMJHcjs = require('./chunk-FYSONMJH.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/outputTypeSchemas/CitationsGroupUpdateArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFYSONMJHcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupUpdateArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.CitationsGroupIncludeSchema.optional(),
  data: _zod.z.union([_chunkQGGOYQUMcjs.CitationsGroupUpdateInputSchema, _chunkI5EUBDIFcjs.CitationsGroupUncheckedUpdateInputSchema]),
  where: _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema
}).strict();
var CitationsGroupUpdateArgsSchema_default = CitationsGroupUpdateArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupUpdateArgsSchema = CitationsGroupUpdateArgsSchema; exports.CitationsGroupUpdateArgsSchema_default = CitationsGroupUpdateArgsSchema_default;
//# sourceMappingURL=chunk-HPFWKBGM.cjs.map