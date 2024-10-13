"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPAZRY2SFcjs = require('./chunk-PAZRY2SF.cjs');


var _chunkQ6QULSEIcjs = require('./chunk-Q6QULSEI.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/QAPairAggregateArgsSchema.ts
var _zod = require('zod');
var QAPairAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.QAPairWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkPAZRY2SFcjs.QAPairOrderByWithRelationInputSchema.array(), _chunkPAZRY2SFcjs.QAPairOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkQ6QULSEIcjs.QAPairWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QAPairAggregateArgsSchema_default = QAPairAggregateArgsSchema;




exports.QAPairAggregateArgsSchema = QAPairAggregateArgsSchema; exports.QAPairAggregateArgsSchema_default = QAPairAggregateArgsSchema_default;
//# sourceMappingURL=chunk-WLSELAPA.cjs.map