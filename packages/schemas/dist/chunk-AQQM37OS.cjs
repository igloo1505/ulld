"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNRY55WR5cjs = require('./chunk-NRY55WR5.cjs');


var _chunkGYOZOGLLcjs = require('./chunk-GYOZOGLL.cjs');


var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkKA2ZV3ZGcjs = require('./chunk-KA2ZV3ZG.cjs');

// src/database/outputTypeSchemas/BibUpdateArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkKA2ZV3ZGcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibUpdateArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.BibIncludeSchema.optional(),
  data: _zod.z.union([_chunkNRY55WR5cjs.BibUpdateInputSchema, _chunkGYOZOGLLcjs.BibUncheckedUpdateInputSchema]),
  where: _chunkOCYQURE7cjs.BibWhereUniqueInputSchema
}).strict();
var BibUpdateArgsSchema_default = BibUpdateArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibUpdateArgsSchema = BibUpdateArgsSchema; exports.BibUpdateArgsSchema_default = BibUpdateArgsSchema_default;
//# sourceMappingURL=chunk-AQQM37OS.cjs.map