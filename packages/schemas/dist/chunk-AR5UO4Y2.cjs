"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLTBSAJNFcjs = require('./chunk-LTBSAJNF.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibEntryAggregateArgsSchema.ts
var _zod = require('zod');
var BibEntryAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.BibEntryWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkLTBSAJNFcjs.BibEntryOrderByWithRelationInputSchema.array(), _chunkLTBSAJNFcjs.BibEntryOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibEntryAggregateArgsSchema_default = BibEntryAggregateArgsSchema;




exports.BibEntryAggregateArgsSchema = BibEntryAggregateArgsSchema; exports.BibEntryAggregateArgsSchema_default = BibEntryAggregateArgsSchema_default;
//# sourceMappingURL=chunk-AR5UO4Y2.cjs.map