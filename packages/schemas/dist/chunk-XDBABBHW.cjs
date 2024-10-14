"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIXLNEA6Scjs = require('./chunk-IXLNEA6S.cjs');


var _chunkIRL7XWJUcjs = require('./chunk-IRL7XWJU.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/MdxNoteAggregateArgsSchema.ts
var _zod = require('zod');
var MdxNoteAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkIRL7XWJUcjs.MdxNoteOrderByWithRelationInputSchema.array(), _chunkIRL7XWJUcjs.MdxNoteOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkIXLNEA6Scjs.MdxNoteWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var MdxNoteAggregateArgsSchema_default = MdxNoteAggregateArgsSchema;




exports.MdxNoteAggregateArgsSchema = MdxNoteAggregateArgsSchema; exports.MdxNoteAggregateArgsSchema_default = MdxNoteAggregateArgsSchema_default;
//# sourceMappingURL=chunk-XDBABBHW.cjs.map