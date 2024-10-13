"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIL2RMTDDcjs = require('./chunk-IL2RMTDD.cjs');


var _chunkRZ3MDDGBcjs = require('./chunk-RZ3MDDGB.cjs');


var _chunkIAPJUCQFcjs = require('./chunk-IAPJUCQF.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanCardGroupByArgsSchema.ts
var _zod = require('zod');
var KanBanCardGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkRZ3MDDGBcjs.KanBanCardOrderByWithAggregationInputSchema.array(), _chunkRZ3MDDGBcjs.KanBanCardOrderByWithAggregationInputSchema]).optional(),
  by: _chunkIAPJUCQFcjs.KanBanCardScalarFieldEnumSchema.array(),
  having: _chunkIL2RMTDDcjs.KanBanCardScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanCardGroupByArgsSchema_default = KanBanCardGroupByArgsSchema;




exports.KanBanCardGroupByArgsSchema = KanBanCardGroupByArgsSchema; exports.KanBanCardGroupByArgsSchema_default = KanBanCardGroupByArgsSchema_default;
//# sourceMappingURL=chunk-JAONTDZB.cjs.map