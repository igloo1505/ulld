"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDR5V55ZLcjs = require('./chunk-DR5V55ZL.cjs');


var _chunkVKPLKPNEcjs = require('./chunk-VKPLKPNE.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkKA2ZV3ZGcjs = require('./chunk-KA2ZV3ZG.cjs');

// src/database/outputTypeSchemas/BibCreateArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkKA2ZV3ZGcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibCreateArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.BibIncludeSchema.optional(),
  data: _zod.z.union([_chunkDR5V55ZLcjs.BibCreateInputSchema, _chunkVKPLKPNEcjs.BibUncheckedCreateInputSchema])
}).strict();
var BibCreateArgsSchema_default = BibCreateArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibCreateArgsSchema = BibCreateArgsSchema; exports.BibCreateArgsSchema_default = BibCreateArgsSchema_default;
//# sourceMappingURL=chunk-MJIMJARL.cjs.map