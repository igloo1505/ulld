"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBQOZTY6Fcjs = require('./chunk-BQOZTY6F.cjs');


var _chunk6UIQJFTUcjs = require('./chunk-6UIQJFTU.cjs');


var _chunkEO4PQBWRcjs = require('./chunk-EO4PQBWR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/PracticeExamGroupByArgsSchema.ts
var _zod = require('zod');
var PracticeExamGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkBQOZTY6Fcjs.PracticeExamOrderByWithAggregationInputSchema.array(), _chunkBQOZTY6Fcjs.PracticeExamOrderByWithAggregationInputSchema]).optional(),
  by: _chunkEO4PQBWRcjs.PracticeExamScalarFieldEnumSchema.array(),
  having: _chunk6UIQJFTUcjs.PracticeExamScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var PracticeExamGroupByArgsSchema_default = PracticeExamGroupByArgsSchema;




exports.PracticeExamGroupByArgsSchema = PracticeExamGroupByArgsSchema; exports.PracticeExamGroupByArgsSchema_default = PracticeExamGroupByArgsSchema_default;
//# sourceMappingURL=chunk-QR3O3NMD.cjs.map