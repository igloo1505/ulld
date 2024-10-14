"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2MA5RGIRcjs = require('./chunk-2MA5RGIR.cjs');


var _chunkSXYO5FXQcjs = require('./chunk-SXYO5FXQ.cjs');


var _chunkURZKV2ZFcjs = require('./chunk-URZKV2ZF.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/MdxNoteGroupByArgsSchema.ts
var _zod = require('zod');
var MdxNoteGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk2MA5RGIRcjs.MdxNoteOrderByWithAggregationInputSchema.array(), _chunk2MA5RGIRcjs.MdxNoteOrderByWithAggregationInputSchema]).optional(),
  by: _chunkURZKV2ZFcjs.MdxNoteScalarFieldEnumSchema.array(),
  having: _chunkSXYO5FXQcjs.MdxNoteScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var MdxNoteGroupByArgsSchema_default = MdxNoteGroupByArgsSchema;




exports.MdxNoteGroupByArgsSchema = MdxNoteGroupByArgsSchema; exports.MdxNoteGroupByArgsSchema_default = MdxNoteGroupByArgsSchema_default;
//# sourceMappingURL=chunk-CYHRFL26.cjs.map