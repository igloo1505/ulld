"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTXRBUPFUcjs = require('./chunk-TXRBUPFU.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/EquationAggregateArgsSchema.ts
var _zod = require('zod');
var EquationAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.EquationWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkTXRBUPFUcjs.EquationOrderByWithRelationInputSchema.array(), _chunkTXRBUPFUcjs.EquationOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var EquationAggregateArgsSchema_default = EquationAggregateArgsSchema;




exports.EquationAggregateArgsSchema = EquationAggregateArgsSchema; exports.EquationAggregateArgsSchema_default = EquationAggregateArgsSchema_default;
//# sourceMappingURL=chunk-YDEDIICY.cjs.map