"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkROL2FT3Ecjs = require('./chunk-ROL2FT3E.cjs');


var _chunkL6CTJFPTcjs = require('./chunk-L6CTJFPT.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/TopicAggregateArgsSchema.ts
var _zod = require('zod');
var TopicAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.TopicWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkROL2FT3Ecjs.TopicOrderByWithRelationInputSchema.array(), _chunkROL2FT3Ecjs.TopicOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkL6CTJFPTcjs.TopicWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TopicAggregateArgsSchema_default = TopicAggregateArgsSchema;




exports.TopicAggregateArgsSchema = TopicAggregateArgsSchema; exports.TopicAggregateArgsSchema_default = TopicAggregateArgsSchema_default;
//# sourceMappingURL=chunk-CHZLRSXK.cjs.map