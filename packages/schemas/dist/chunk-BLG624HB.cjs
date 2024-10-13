"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXGSAA7XHcjs = require('./chunk-XGSAA7XH.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/ServingAggregateArgsSchema.ts
var _zod = require('zod');
var ServingAggregateArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.ServingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXGSAA7XHcjs.ServingOrderByWithRelationInputSchema.array(), _chunkXGSAA7XHcjs.ServingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ServingAggregateArgsSchema_default = ServingAggregateArgsSchema;




exports.ServingAggregateArgsSchema = ServingAggregateArgsSchema; exports.ServingAggregateArgsSchema_default = ServingAggregateArgsSchema_default;
//# sourceMappingURL=chunk-BLG624HB.cjs.map