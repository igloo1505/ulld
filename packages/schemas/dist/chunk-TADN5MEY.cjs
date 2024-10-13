"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');


var _chunkEQ6PXDWTcjs = require('./chunk-EQ6PXDWT.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/BibAggregateArgsSchema.ts
var _zod = require('zod');
var BibAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.BibWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkEQ6PXDWTcjs.BibOrderByWithRelationInputSchema.array(), _chunkEQ6PXDWTcjs.BibOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkOCYQURE7cjs.BibWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibAggregateArgsSchema_default = BibAggregateArgsSchema;




exports.BibAggregateArgsSchema = BibAggregateArgsSchema; exports.BibAggregateArgsSchema_default = BibAggregateArgsSchema_default;
//# sourceMappingURL=chunk-TADN5MEY.cjs.map