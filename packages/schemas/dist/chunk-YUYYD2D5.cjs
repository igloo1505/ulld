"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUBZQMVTYcjs = require('./chunk-UBZQMVTY.cjs');


var _chunkETRZB726cjs = require('./chunk-ETRZB726.cjs');


var _chunkRT3WXQAZcjs = require('./chunk-RT3WXQAZ.cjs');

// src/database/outputTypeSchemas/WhiteboardAggregateArgsSchema.ts
var _zod = require('zod');
var WhiteboardAggregateArgsSchema = _zod.z.object({
  where: _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUBZQMVTYcjs.WhiteboardOrderByWithRelationInputSchema.array(), _chunkUBZQMVTYcjs.WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkETRZB726cjs.WhiteboardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WhiteboardAggregateArgsSchema_default = WhiteboardAggregateArgsSchema;




exports.WhiteboardAggregateArgsSchema = WhiteboardAggregateArgsSchema; exports.WhiteboardAggregateArgsSchema_default = WhiteboardAggregateArgsSchema_default;
//# sourceMappingURL=chunk-YUYYD2D5.cjs.map