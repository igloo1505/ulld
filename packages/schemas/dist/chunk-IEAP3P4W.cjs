"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkFYSONMJHcjs = require('./chunk-FYSONMJH.cjs');


var _chunkJJVL6ZMBcjs = require('./chunk-JJVL6ZMB.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');


var _chunk7T63UVAVcjs = require('./chunk-7T63UVAV.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/CitationsGroupFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFYSONMJHcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindFirstOrThrowArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.CitationsGroupIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkJJVL6ZMBcjs.CitationsGroupOrderByWithRelationInputSchema.array(), _chunkJJVL6ZMBcjs.CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk7T63UVAVcjs.CitationsGroupScalarFieldEnumSchema, _chunk7T63UVAVcjs.CitationsGroupScalarFieldEnumSchema.array()]).optional()
}).strict();
var CitationsGroupFindFirstOrThrowArgsSchema_default = CitationsGroupFindFirstOrThrowArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupFindFirstOrThrowArgsSchema = CitationsGroupFindFirstOrThrowArgsSchema; exports.CitationsGroupFindFirstOrThrowArgsSchema_default = CitationsGroupFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-IEAP3P4W.cjs.map