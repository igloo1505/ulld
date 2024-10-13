"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU5GG5PIFcjs = require('./chunk-U5GG5PIF.cjs');


var _chunk34Z33UXCcjs = require('./chunk-34Z33UXC.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/TagAggregateArgsSchema.ts
var _zod = require('zod');
var TagAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.TagWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkU5GG5PIFcjs.TagOrderByWithRelationInputSchema.array(), _chunkU5GG5PIFcjs.TagOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk34Z33UXCcjs.TagWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TagAggregateArgsSchema_default = TagAggregateArgsSchema;




exports.TagAggregateArgsSchema = TagAggregateArgsSchema; exports.TagAggregateArgsSchema_default = TagAggregateArgsSchema_default;
//# sourceMappingURL=chunk-JXNF4EQ4.cjs.map