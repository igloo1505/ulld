"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIZU26MLDcjs = require('./chunk-IZU26MLD.cjs');


var _chunkP2A4W5ZGcjs = require('./chunk-P2A4W5ZG.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkV3R4WN7Wcjs = require('./chunk-V3R4WN7W.cjs');

// src/database/outputTypeSchemas/BibCreateArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkV3R4WN7Wcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibCreateArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.BibIncludeSchema.optional(),
  data: _zod.z.union([_chunkIZU26MLDcjs.BibCreateInputSchema, _chunkP2A4W5ZGcjs.BibUncheckedCreateInputSchema])
}).strict();
var BibCreateArgsSchema_default = BibCreateArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibCreateArgsSchema = BibCreateArgsSchema; exports.BibCreateArgsSchema_default = BibCreateArgsSchema_default;
//# sourceMappingURL=chunk-ZAGATC6Z.cjs.map