"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTIYXNCTRcjs = require('./chunk-TIYXNCTR.cjs');

// src/database/outputTypeSchemas/DJTFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  where: _chunkTIYXNCTRcjs.DJTWhereUniqueInputSchema
}).strict();
var DJTFindUniqueOrThrowArgsSchema_default = DJTFindUniqueOrThrowArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTFindUniqueOrThrowArgsSchema = DJTFindUniqueOrThrowArgsSchema; exports.DJTFindUniqueOrThrowArgsSchema_default = DJTFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-L5EDULQF.cjs.map