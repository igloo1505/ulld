"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDR5V55ZLcjs = require('./chunk-DR5V55ZL.cjs');


var _chunkVKPLKPNEcjs = require('./chunk-VKPLKPNE.cjs');


var _chunkNRY55WR5cjs = require('./chunk-NRY55WR5.cjs');


var _chunkGYOZOGLLcjs = require('./chunk-GYOZOGLL.cjs');


var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkKA2ZV3ZGcjs = require('./chunk-KA2ZV3ZG.cjs');

// src/database/outputTypeSchemas/BibUpsertArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkKA2ZV3ZGcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibUpsertArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.BibIncludeSchema.optional(),
  where: _chunkOCYQURE7cjs.BibWhereUniqueInputSchema,
  create: _zod.z.union([_chunkDR5V55ZLcjs.BibCreateInputSchema, _chunkVKPLKPNEcjs.BibUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkNRY55WR5cjs.BibUpdateInputSchema, _chunkGYOZOGLLcjs.BibUncheckedUpdateInputSchema])
}).strict();
var BibUpsertArgsSchema_default = BibUpsertArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibUpsertArgsSchema = BibUpsertArgsSchema; exports.BibUpsertArgsSchema_default = BibUpsertArgsSchema_default;
//# sourceMappingURL=chunk-YFZYGAIG.cjs.map