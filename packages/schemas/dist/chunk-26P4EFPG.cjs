"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOYF7XVTGcjs = require('./chunk-OYF7XVTG.cjs');


var _chunkEALVXC2Jcjs = require('./chunk-EALVXC2J.cjs');


var _chunkDNAYEUWRcjs = require('./chunk-DNAYEUWR.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/BibEntryGroupByArgsSchema.ts
var _zod = require('zod');
var BibEntryGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.BibEntryWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOYF7XVTGcjs.BibEntryOrderByWithAggregationInputSchema.array(), _chunkOYF7XVTGcjs.BibEntryOrderByWithAggregationInputSchema]).optional(),
  by: _chunkDNAYEUWRcjs.BibEntryScalarFieldEnumSchema.array(),
  having: _chunkEALVXC2Jcjs.BibEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibEntryGroupByArgsSchema_default = BibEntryGroupByArgsSchema;




exports.BibEntryGroupByArgsSchema = BibEntryGroupByArgsSchema; exports.BibEntryGroupByArgsSchema_default = BibEntryGroupByArgsSchema_default;
//# sourceMappingURL=chunk-26P4EFPG.cjs.map