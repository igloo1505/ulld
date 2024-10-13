"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKQGJ2VUScjs = require('./chunk-KQGJ2VUS.cjs');


var _chunkWDSN6HFNcjs = require('./chunk-WDSN6HFN.cjs');


var _chunkPQT5SOF6cjs = require('./chunk-PQT5SOF6.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/TagGroupByArgsSchema.ts
var _zod = require('zod');
var TagGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.TagWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkWDSN6HFNcjs.TagOrderByWithAggregationInputSchema.array(), _chunkWDSN6HFNcjs.TagOrderByWithAggregationInputSchema]).optional(),
  by: _chunkPQT5SOF6cjs.TagScalarFieldEnumSchema.array(),
  having: _chunkKQGJ2VUScjs.TagScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TagGroupByArgsSchema_default = TagGroupByArgsSchema;




exports.TagGroupByArgsSchema = TagGroupByArgsSchema; exports.TagGroupByArgsSchema_default = TagGroupByArgsSchema_default;
//# sourceMappingURL=chunk-OH3SJA3C.cjs.map