"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDFM5BD7Hcjs = require('./chunk-DFM5BD7H.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/BibEntryAggregateArgsSchema.ts
var _zod = require('zod');
var BibEntryAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.BibEntryWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkDFM5BD7Hcjs.BibEntryOrderByWithRelationInputSchema.array(), _chunkDFM5BD7Hcjs.BibEntryOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibEntryAggregateArgsSchema_default = BibEntryAggregateArgsSchema;




exports.BibEntryAggregateArgsSchema = BibEntryAggregateArgsSchema; exports.BibEntryAggregateArgsSchema_default = BibEntryAggregateArgsSchema_default;
//# sourceMappingURL=chunk-2OZ7566W.cjs.map