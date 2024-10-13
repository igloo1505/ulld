"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkG3E3G4X2cjs = require('./chunk-G3E3G4X2.cjs');


var _chunkMRHABKWJcjs = require('./chunk-MRHABKWJ.cjs');


var _chunkH6FROFPXcjs = require('./chunk-H6FROFPX.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/TopicGroupByArgsSchema.ts
var _zod = require('zod');
var TopicGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.TopicWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkMRHABKWJcjs.TopicOrderByWithAggregationInputSchema.array(), _chunkMRHABKWJcjs.TopicOrderByWithAggregationInputSchema]).optional(),
  by: _chunkH6FROFPXcjs.TopicScalarFieldEnumSchema.array(),
  having: _chunkG3E3G4X2cjs.TopicScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TopicGroupByArgsSchema_default = TopicGroupByArgsSchema;




exports.TopicGroupByArgsSchema = TopicGroupByArgsSchema; exports.TopicGroupByArgsSchema_default = TopicGroupByArgsSchema_default;
//# sourceMappingURL=chunk-PN7JGZZ3.cjs.map