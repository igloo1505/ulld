"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZC57RGWPcjs = require('./chunk-ZC57RGWP.cjs');


var _chunkVWJWA46Tcjs = require('./chunk-VWJWA46T.cjs');


var _chunkAAW2AAKVcjs = require('./chunk-AAW2AAKV.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/SubjectGroupByArgsSchema.ts
var _zod = require('zod');
var SubjectGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.SubjectWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZC57RGWPcjs.SubjectOrderByWithAggregationInputSchema.array(), _chunkZC57RGWPcjs.SubjectOrderByWithAggregationInputSchema]).optional(),
  by: _chunkAAW2AAKVcjs.SubjectScalarFieldEnumSchema.array(),
  having: _chunkVWJWA46Tcjs.SubjectScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SubjectGroupByArgsSchema_default = SubjectGroupByArgsSchema;




exports.SubjectGroupByArgsSchema = SubjectGroupByArgsSchema; exports.SubjectGroupByArgsSchema_default = SubjectGroupByArgsSchema_default;
//# sourceMappingURL=chunk-7ALOBCEC.cjs.map