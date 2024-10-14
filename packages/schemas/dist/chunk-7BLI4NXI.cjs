"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ5NG7FWIcjs = require('./chunk-Z5NG7FWI.cjs');


var _chunkMIDX2PX6cjs = require('./chunk-MIDX2PX6.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TopicAggregateArgsSchema.ts
var _zod = require('zod');
var TopicAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.TopicWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZ5NG7FWIcjs.TopicOrderByWithRelationInputSchema.array(), _chunkZ5NG7FWIcjs.TopicOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkMIDX2PX6cjs.TopicWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TopicAggregateArgsSchema_default = TopicAggregateArgsSchema;




exports.TopicAggregateArgsSchema = TopicAggregateArgsSchema; exports.TopicAggregateArgsSchema_default = TopicAggregateArgsSchema_default;
//# sourceMappingURL=chunk-7BLI4NXI.cjs.map