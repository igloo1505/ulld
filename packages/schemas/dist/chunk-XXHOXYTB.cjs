"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6D7E6LNEcjs = require('./chunk-6D7E6LNE.cjs');


var _chunkLA4G4CRWcjs = require('./chunk-LA4G4CRW.cjs');


var _chunkCGFNKABMcjs = require('./chunk-CGFNKABM.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ReadingListGroupByArgsSchema.ts
var _zod = require('zod');
var ReadingListGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.ReadingListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkLA4G4CRWcjs.ReadingListOrderByWithAggregationInputSchema.array(), _chunkLA4G4CRWcjs.ReadingListOrderByWithAggregationInputSchema]).optional(),
  by: _chunkCGFNKABMcjs.ReadingListScalarFieldEnumSchema.array(),
  having: _chunk6D7E6LNEcjs.ReadingListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ReadingListGroupByArgsSchema_default = ReadingListGroupByArgsSchema;




exports.ReadingListGroupByArgsSchema = ReadingListGroupByArgsSchema; exports.ReadingListGroupByArgsSchema_default = ReadingListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-XXHOXYTB.cjs.map