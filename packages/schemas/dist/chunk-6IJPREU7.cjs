"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSIF2Q2FMcjs = require('./chunk-SIF2Q2FM.cjs');

// src/database/outputTypeSchemas/WhiteboardDeleteArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardDeleteArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkSIF2Q2FMcjs.WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardDeleteArgsSchema_default = WhiteboardDeleteArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardDeleteArgsSchema = WhiteboardDeleteArgsSchema; exports.WhiteboardDeleteArgsSchema_default = WhiteboardDeleteArgsSchema_default;
//# sourceMappingURL=chunk-6IJPREU7.cjs.map