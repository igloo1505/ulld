"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7Q4J55WAcjs = require('./chunk-7Q4J55WA.cjs');


var _chunkX754I332cjs = require('./chunk-X754I332.cjs');


var _chunkI5CQLM25cjs = require('./chunk-I5CQLM25.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanListGroupByArgsSchema.ts
var _zod = require('zod');
var KanBanListGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.KanBanListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk7Q4J55WAcjs.KanBanListOrderByWithAggregationInputSchema.array(), _chunk7Q4J55WAcjs.KanBanListOrderByWithAggregationInputSchema]).optional(),
  by: _chunkI5CQLM25cjs.KanBanListScalarFieldEnumSchema.array(),
  having: _chunkX754I332cjs.KanBanListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanListGroupByArgsSchema_default = KanBanListGroupByArgsSchema;




exports.KanBanListGroupByArgsSchema = KanBanListGroupByArgsSchema; exports.KanBanListGroupByArgsSchema_default = KanBanListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-WLQFRNCE.cjs.map