"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkKA2ZV3ZGcjs = require('./chunk-KA2ZV3ZG.cjs');

// src/database/outputTypeSchemas/BibFindUniqueArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkKA2ZV3ZGcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibFindUniqueArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.BibIncludeSchema.optional(),
  where: _chunkOCYQURE7cjs.BibWhereUniqueInputSchema
}).strict();
var BibFindUniqueArgsSchema_default = BibFindUniqueArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibFindUniqueArgsSchema = BibFindUniqueArgsSchema; exports.BibFindUniqueArgsSchema_default = BibFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-ZTVKIMWZ.cjs.map