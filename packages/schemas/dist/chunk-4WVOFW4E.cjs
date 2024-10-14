"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkFYSONMJHcjs = require('./chunk-FYSONMJH.cjs');


var _chunkJJVL6ZMBcjs = require('./chunk-JJVL6ZMB.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');


var _chunk7T63UVAVcjs = require('./chunk-7T63UVAV.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/CitationsGroupFindFirstArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFYSONMJHcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindFirstArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.CitationsGroupIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkJJVL6ZMBcjs.CitationsGroupOrderByWithRelationInputSchema.array(), _chunkJJVL6ZMBcjs.CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk7T63UVAVcjs.CitationsGroupScalarFieldEnumSchema, _chunk7T63UVAVcjs.CitationsGroupScalarFieldEnumSchema.array()]).optional()
}).strict();
var CitationsGroupFindFirstArgsSchema_default = CitationsGroupFindFirstArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupFindFirstArgsSchema = CitationsGroupFindFirstArgsSchema; exports.CitationsGroupFindFirstArgsSchema_default = CitationsGroupFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-4WVOFW4E.cjs.map