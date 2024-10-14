"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkETRZB726cjs = require('./chunk-ETRZB726.cjs');

// src/database/outputTypeSchemas/WhiteboardFindUniqueArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardFindUniqueArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkETRZB726cjs.WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardFindUniqueArgsSchema_default = WhiteboardFindUniqueArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardFindUniqueArgsSchema = WhiteboardFindUniqueArgsSchema; exports.WhiteboardFindUniqueArgsSchema_default = WhiteboardFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-QXT47S6Q.cjs.map