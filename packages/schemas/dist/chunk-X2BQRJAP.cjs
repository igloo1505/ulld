"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEGACULCYcjs = require('./chunk-EGACULCY.cjs');

// src/database/outputTypeSchemas/DJTFindUniqueArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTFindUniqueArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  where: _chunkEGACULCYcjs.DJTWhereUniqueInputSchema
}).strict();
var DJTFindUniqueArgsSchema_default = DJTFindUniqueArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTFindUniqueArgsSchema = DJTFindUniqueArgsSchema; exports.DJTFindUniqueArgsSchema_default = DJTFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-X2BQRJAP.cjs.map