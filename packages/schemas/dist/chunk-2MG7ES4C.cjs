"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4DMFWQGRcjs = require('./chunk-4DMFWQGR.cjs');


var _chunk4LGFP2M4cjs = require('./chunk-4LGFP2M4.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/SubjectAggregateArgsSchema.ts
var _zod = require('zod');
var SubjectAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.SubjectWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4DMFWQGRcjs.SubjectOrderByWithRelationInputSchema.array(), _chunk4DMFWQGRcjs.SubjectOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk4LGFP2M4cjs.SubjectWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SubjectAggregateArgsSchema_default = SubjectAggregateArgsSchema;




exports.SubjectAggregateArgsSchema = SubjectAggregateArgsSchema; exports.SubjectAggregateArgsSchema_default = SubjectAggregateArgsSchema_default;
//# sourceMappingURL=chunk-2MG7ES4C.cjs.map