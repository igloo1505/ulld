"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQF524NT2cjs = require('./chunk-QF524NT2.cjs');


var _chunkFUG5NXS5cjs = require('./chunk-FUG5NXS5.cjs');


var _chunkEWYL3WMScjs = require('./chunk-EWYL3WMS.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TagGroupByArgsSchema.ts
var _zod = require('zod');
var TagGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.TagWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkFUG5NXS5cjs.TagOrderByWithAggregationInputSchema.array(), _chunkFUG5NXS5cjs.TagOrderByWithAggregationInputSchema]).optional(),
  by: _chunkEWYL3WMScjs.TagScalarFieldEnumSchema.array(),
  having: _chunkQF524NT2cjs.TagScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TagGroupByArgsSchema_default = TagGroupByArgsSchema;




exports.TagGroupByArgsSchema = TagGroupByArgsSchema; exports.TagGroupByArgsSchema_default = TagGroupByArgsSchema_default;
//# sourceMappingURL=chunk-2GZVANQP.cjs.map