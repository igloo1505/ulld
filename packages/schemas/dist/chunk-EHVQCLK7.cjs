"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWGMCHZKMcjs = require('./chunk-WGMCHZKM.cjs');


var _chunkUG5GYIUKcjs = require('./chunk-UG5GYIUK.cjs');


var _chunkOLKPIJWRcjs = require('./chunk-OLKPIJWR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanListGroupByArgsSchema.ts
var _zod = require('zod');
var KanBanListGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.KanBanListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkWGMCHZKMcjs.KanBanListOrderByWithAggregationInputSchema.array(), _chunkWGMCHZKMcjs.KanBanListOrderByWithAggregationInputSchema]).optional(),
  by: _chunkOLKPIJWRcjs.KanBanListScalarFieldEnumSchema.array(),
  having: _chunkUG5GYIUKcjs.KanBanListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanListGroupByArgsSchema_default = KanBanListGroupByArgsSchema;




exports.KanBanListGroupByArgsSchema = KanBanListGroupByArgsSchema; exports.KanBanListGroupByArgsSchema_default = KanBanListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-EHVQCLK7.cjs.map