"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE3PXI5JNcjs = require('./chunk-E3PXI5JN.cjs');


var _chunkFVQPYXSFcjs = require('./chunk-FVQPYXSF.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/QAPairAggregateArgsSchema.ts
var _zod = require('zod');
var QAPairAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.QAPairWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkE3PXI5JNcjs.QAPairOrderByWithRelationInputSchema.array(), _chunkE3PXI5JNcjs.QAPairOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkFVQPYXSFcjs.QAPairWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QAPairAggregateArgsSchema_default = QAPairAggregateArgsSchema;




exports.QAPairAggregateArgsSchema = QAPairAggregateArgsSchema; exports.QAPairAggregateArgsSchema_default = QAPairAggregateArgsSchema_default;
//# sourceMappingURL=chunk-OZWAZWOT.cjs.map