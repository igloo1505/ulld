"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');


var _chunkTRWQMEUBcjs = require('./chunk-TRWQMEUB.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanListAggregateArgsSchema.ts
var _zod = require('zod');
var KanBanListAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.KanBanListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkTRWQMEUBcjs.KanBanListOrderByWithRelationInputSchema.array(), _chunkTRWQMEUBcjs.KanBanListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanListAggregateArgsSchema_default = KanBanListAggregateArgsSchema;




exports.KanBanListAggregateArgsSchema = KanBanListAggregateArgsSchema; exports.KanBanListAggregateArgsSchema_default = KanBanListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-ZFGEJ5WP.cjs.map