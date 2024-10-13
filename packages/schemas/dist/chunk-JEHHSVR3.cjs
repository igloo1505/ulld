"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHOROLBEQcjs = require('./chunk-HOROLBEQ.cjs');


var _chunkBTVLPI43cjs = require('./chunk-BTVLPI43.cjs');


var _chunkNNBXXHQYcjs = require('./chunk-NNBXXHQY.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/QAPairGroupByArgsSchema.ts
var _zod = require('zod');
var QAPairGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.QAPairWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkBTVLPI43cjs.QAPairOrderByWithAggregationInputSchema.array(), _chunkBTVLPI43cjs.QAPairOrderByWithAggregationInputSchema]).optional(),
  by: _chunkNNBXXHQYcjs.QAPairScalarFieldEnumSchema.array(),
  having: _chunkHOROLBEQcjs.QAPairScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QAPairGroupByArgsSchema_default = QAPairGroupByArgsSchema;




exports.QAPairGroupByArgsSchema = QAPairGroupByArgsSchema; exports.QAPairGroupByArgsSchema_default = QAPairGroupByArgsSchema_default;
//# sourceMappingURL=chunk-JEHHSVR3.cjs.map