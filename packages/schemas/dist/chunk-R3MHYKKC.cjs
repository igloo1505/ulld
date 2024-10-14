"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOD4D4RVXcjs = require('./chunk-OD4D4RVX.cjs');


var _chunk7EU4PW5Mcjs = require('./chunk-7EU4PW5M.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/PracticeExamAggregateArgsSchema.ts
var _zod = require('zod');
var PracticeExamAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOD4D4RVXcjs.PracticeExamOrderByWithRelationInputSchema.array(), _chunkOD4D4RVXcjs.PracticeExamOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk7EU4PW5Mcjs.PracticeExamWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var PracticeExamAggregateArgsSchema_default = PracticeExamAggregateArgsSchema;




exports.PracticeExamAggregateArgsSchema = PracticeExamAggregateArgsSchema; exports.PracticeExamAggregateArgsSchema_default = PracticeExamAggregateArgsSchema_default;
//# sourceMappingURL=chunk-R3MHYKKC.cjs.map