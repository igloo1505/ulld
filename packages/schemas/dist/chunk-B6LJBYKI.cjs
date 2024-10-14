"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3YN3FDZPcjs = require('./chunk-3YN3FDZP.cjs');


var _chunkFOS5RQXOcjs = require('./chunk-FOS5RQXO.cjs');


var _chunkLBZ5FISGcjs = require('./chunk-LBZ5FISG.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanCardGroupByArgsSchema.ts
var _zod = require('zod');
var KanBanCardGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkFOS5RQXOcjs.KanBanCardOrderByWithAggregationInputSchema.array(), _chunkFOS5RQXOcjs.KanBanCardOrderByWithAggregationInputSchema]).optional(),
  by: _chunkLBZ5FISGcjs.KanBanCardScalarFieldEnumSchema.array(),
  having: _chunk3YN3FDZPcjs.KanBanCardScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanCardGroupByArgsSchema_default = KanBanCardGroupByArgsSchema;




exports.KanBanCardGroupByArgsSchema = KanBanCardGroupByArgsSchema; exports.KanBanCardGroupByArgsSchema_default = KanBanCardGroupByArgsSchema_default;
//# sourceMappingURL=chunk-B6LJBYKI.cjs.map