"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSUTZUCHPcjs = require('./chunk-SUTZUCHP.cjs');


var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkKA2ZV3ZGcjs = require('./chunk-KA2ZV3ZG.cjs');


var _chunkEQ6PXDWTcjs = require('./chunk-EQ6PXDWT.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/BibFindFirstArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkKA2ZV3ZGcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibFindFirstArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.BibIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.BibWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkEQ6PXDWTcjs.BibOrderByWithRelationInputSchema.array(), _chunkEQ6PXDWTcjs.BibOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkOCYQURE7cjs.BibWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkSUTZUCHPcjs.BibScalarFieldEnumSchema, _chunkSUTZUCHPcjs.BibScalarFieldEnumSchema.array()]).optional()
}).strict();
var BibFindFirstArgsSchema_default = BibFindFirstArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibFindFirstArgsSchema = BibFindFirstArgsSchema; exports.BibFindFirstArgsSchema_default = BibFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-6VC55YPA.cjs.map