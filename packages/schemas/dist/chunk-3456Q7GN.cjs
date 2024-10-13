"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2FWDETVScjs = require('./chunk-2FWDETVS.cjs');


var _chunkQ5CG54UIcjs = require('./chunk-Q5CG54UI.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/PracticeExamAggregateArgsSchema.ts
var _zod = require('zod');
var PracticeExamAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk2FWDETVScjs.PracticeExamOrderByWithRelationInputSchema.array(), _chunk2FWDETVScjs.PracticeExamOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkQ5CG54UIcjs.PracticeExamWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var PracticeExamAggregateArgsSchema_default = PracticeExamAggregateArgsSchema;




exports.PracticeExamAggregateArgsSchema = PracticeExamAggregateArgsSchema; exports.PracticeExamAggregateArgsSchema_default = PracticeExamAggregateArgsSchema_default;
//# sourceMappingURL=chunk-3456Q7GN.cjs.map