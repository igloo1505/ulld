"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2R3SEO5Rcjs = require('./chunk-2R3SEO5R.cjs');


var _chunk67WO2I4Tcjs = require('./chunk-67WO2I4T.cjs');


var _chunkWNQ7NULNcjs = require('./chunk-WNQ7NULN.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/PracticeExamGroupByArgsSchema.ts
var _zod = require('zod');
var PracticeExamGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk2R3SEO5Rcjs.PracticeExamOrderByWithAggregationInputSchema.array(), _chunk2R3SEO5Rcjs.PracticeExamOrderByWithAggregationInputSchema]).optional(),
  by: _chunkWNQ7NULNcjs.PracticeExamScalarFieldEnumSchema.array(),
  having: _chunk67WO2I4Tcjs.PracticeExamScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var PracticeExamGroupByArgsSchema_default = PracticeExamGroupByArgsSchema;




exports.PracticeExamGroupByArgsSchema = PracticeExamGroupByArgsSchema; exports.PracticeExamGroupByArgsSchema_default = PracticeExamGroupByArgsSchema_default;
//# sourceMappingURL=chunk-P3F7WMW3.cjs.map