"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNSTMDLLZcjs = require('./chunk-NSTMDLLZ.cjs');


var _chunkDDWRPYDPcjs = require('./chunk-DDWRPYDP.cjs');


var _chunkELMLDSIXcjs = require('./chunk-ELMLDSIX.cjs');


var _chunkQXYA2CYLcjs = require('./chunk-QXYA2CYL.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkSIUQQM7Dcjs = require('./chunk-SIUQQM7D.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');

// src/database/outputTypeSchemas/CitationsGroupUpsertArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSIUQQM7Dcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupUpsertArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.CitationsGroupIncludeSchema.optional(),
  where: _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema,
  create: _zod.z.union([_chunkNSTMDLLZcjs.CitationsGroupCreateInputSchema, _chunkDDWRPYDPcjs.CitationsGroupUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkELMLDSIXcjs.CitationsGroupUpdateInputSchema, _chunkQXYA2CYLcjs.CitationsGroupUncheckedUpdateInputSchema])
}).strict();
var CitationsGroupUpsertArgsSchema_default = CitationsGroupUpsertArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupUpsertArgsSchema = CitationsGroupUpsertArgsSchema; exports.CitationsGroupUpsertArgsSchema_default = CitationsGroupUpsertArgsSchema_default;
//# sourceMappingURL=chunk-QLBBMJOJ.cjs.map