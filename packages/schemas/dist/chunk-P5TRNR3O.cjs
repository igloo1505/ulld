"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');


var _chunkM7BJNGETcjs = require('./chunk-M7BJNGET.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanListAggregateArgsSchema.ts
var _zod = require('zod');
var KanBanListAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.KanBanListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkM7BJNGETcjs.KanBanListOrderByWithRelationInputSchema.array(), _chunkM7BJNGETcjs.KanBanListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanListAggregateArgsSchema_default = KanBanListAggregateArgsSchema;




exports.KanBanListAggregateArgsSchema = KanBanListAggregateArgsSchema; exports.KanBanListAggregateArgsSchema_default = KanBanListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-P5TRNR3O.cjs.map