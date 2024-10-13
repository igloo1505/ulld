"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkSIUQQM7Dcjs = require('./chunk-SIUQQM7D.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');

// src/database/outputTypeSchemas/CitationsGroupFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSIUQQM7Dcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.CitationsGroupIncludeSchema.optional(),
  where: _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema
}).strict();
var CitationsGroupFindUniqueOrThrowArgsSchema_default = CitationsGroupFindUniqueOrThrowArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupFindUniqueOrThrowArgsSchema = CitationsGroupFindUniqueOrThrowArgsSchema; exports.CitationsGroupFindUniqueOrThrowArgsSchema_default = CitationsGroupFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-IDXG3DEZ.cjs.map