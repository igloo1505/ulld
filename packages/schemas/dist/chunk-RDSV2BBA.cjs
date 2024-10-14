"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkETRZB726cjs = require('./chunk-ETRZB726.cjs');

// src/database/outputTypeSchemas/WhiteboardFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkETRZB726cjs.WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardFindUniqueOrThrowArgsSchema_default = WhiteboardFindUniqueOrThrowArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardFindUniqueOrThrowArgsSchema = WhiteboardFindUniqueOrThrowArgsSchema; exports.WhiteboardFindUniqueOrThrowArgsSchema_default = WhiteboardFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-RDSV2BBA.cjs.map