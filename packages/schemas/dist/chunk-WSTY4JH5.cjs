"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNSTMDLLZcjs = require('./chunk-NSTMDLLZ.cjs');


var _chunkDDWRPYDPcjs = require('./chunk-DDWRPYDP.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkSIUQQM7Dcjs = require('./chunk-SIUQQM7D.cjs');

// src/database/outputTypeSchemas/CitationsGroupCreateArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSIUQQM7Dcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupCreateArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.CitationsGroupIncludeSchema.optional(),
  data: _zod.z.union([_chunkNSTMDLLZcjs.CitationsGroupCreateInputSchema, _chunkDDWRPYDPcjs.CitationsGroupUncheckedCreateInputSchema])
}).strict();
var CitationsGroupCreateArgsSchema_default = CitationsGroupCreateArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupCreateArgsSchema = CitationsGroupCreateArgsSchema; exports.CitationsGroupCreateArgsSchema_default = CitationsGroupCreateArgsSchema_default;
//# sourceMappingURL=chunk-WSTY4JH5.cjs.map