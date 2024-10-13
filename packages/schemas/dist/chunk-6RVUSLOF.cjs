"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ2S6ISBRcjs = require('./chunk-J2S6ISBR.cjs');


var _chunkPCQU36GMcjs = require('./chunk-PCQU36GM.cjs');


var _chunkAYVLBSAJcjs = require('./chunk-AYVLBSAJ.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/IpynbGroupByArgsSchema.ts
var _zod = require('zod');
var IpynbGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.IpynbWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkPCQU36GMcjs.IpynbOrderByWithAggregationInputSchema.array(), _chunkPCQU36GMcjs.IpynbOrderByWithAggregationInputSchema]).optional(),
  by: _chunkAYVLBSAJcjs.IpynbScalarFieldEnumSchema.array(),
  having: _chunkJ2S6ISBRcjs.IpynbScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var IpynbGroupByArgsSchema_default = IpynbGroupByArgsSchema;




exports.IpynbGroupByArgsSchema = IpynbGroupByArgsSchema; exports.IpynbGroupByArgsSchema_default = IpynbGroupByArgsSchema_default;
//# sourceMappingURL=chunk-6RVUSLOF.cjs.map