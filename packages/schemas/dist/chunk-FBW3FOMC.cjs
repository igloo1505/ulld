"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6W26PC7Gcjs = require('./chunk-6W26PC7G.cjs');


var _chunkAGJC6A44cjs = require('./chunk-AGJC6A44.cjs');


var _chunkQGBP3DKZcjs = require('./chunk-QGBP3DKZ.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/MdxNoteGroupByArgsSchema.ts
var _zod = require('zod');
var MdxNoteGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6W26PC7Gcjs.MdxNoteOrderByWithAggregationInputSchema.array(), _chunk6W26PC7Gcjs.MdxNoteOrderByWithAggregationInputSchema]).optional(),
  by: _chunkQGBP3DKZcjs.MdxNoteScalarFieldEnumSchema.array(),
  having: _chunkAGJC6A44cjs.MdxNoteScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var MdxNoteGroupByArgsSchema_default = MdxNoteGroupByArgsSchema;




exports.MdxNoteGroupByArgsSchema = MdxNoteGroupByArgsSchema; exports.MdxNoteGroupByArgsSchema_default = MdxNoteGroupByArgsSchema_default;
//# sourceMappingURL=chunk-FBW3FOMC.cjs.map