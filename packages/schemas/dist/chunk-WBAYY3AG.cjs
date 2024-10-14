"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ3QVNVQ5cjs = require('./chunk-Z3QVNVQ5.cjs');


var _chunkF23XNCI4cjs = require('./chunk-F23XNCI4.cjs');


var _chunkM5TYQKMKcjs = require('./chunk-M5TYQKMK.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TopicGroupByArgsSchema.ts
var _zod = require('zod');
var TopicGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.TopicWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkF23XNCI4cjs.TopicOrderByWithAggregationInputSchema.array(), _chunkF23XNCI4cjs.TopicOrderByWithAggregationInputSchema]).optional(),
  by: _chunkM5TYQKMKcjs.TopicScalarFieldEnumSchema.array(),
  having: _chunkZ3QVNVQ5cjs.TopicScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TopicGroupByArgsSchema_default = TopicGroupByArgsSchema;




exports.TopicGroupByArgsSchema = TopicGroupByArgsSchema; exports.TopicGroupByArgsSchema_default = TopicGroupByArgsSchema_default;
//# sourceMappingURL=chunk-WBAYY3AG.cjs.map