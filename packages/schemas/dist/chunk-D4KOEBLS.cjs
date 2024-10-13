"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkSIUQQM7Dcjs = require('./chunk-SIUQQM7D.cjs');


var _chunkQUF2NMPAcjs = require('./chunk-QUF2NMPA.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');


var _chunk72MVN45Vcjs = require('./chunk-72MVN45V.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/CitationsGroupFindFirstArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSIUQQM7Dcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindFirstArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.CitationsGroupIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQUF2NMPAcjs.CitationsGroupOrderByWithRelationInputSchema.array(), _chunkQUF2NMPAcjs.CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk72MVN45Vcjs.CitationsGroupScalarFieldEnumSchema, _chunk72MVN45Vcjs.CitationsGroupScalarFieldEnumSchema.array()]).optional()
}).strict();
var CitationsGroupFindFirstArgsSchema_default = CitationsGroupFindFirstArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupFindFirstArgsSchema = CitationsGroupFindFirstArgsSchema; exports.CitationsGroupFindFirstArgsSchema_default = CitationsGroupFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-D4KOEBLS.cjs.map