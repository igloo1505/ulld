"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEGACULCYcjs = require('./chunk-EGACULCY.cjs');

// src/database/outputTypeSchemas/DJTDeleteArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTDeleteArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  where: _chunkEGACULCYcjs.DJTWhereUniqueInputSchema
}).strict();
var DJTDeleteArgsSchema_default = DJTDeleteArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTDeleteArgsSchema = DJTDeleteArgsSchema; exports.DJTDeleteArgsSchema_default = DJTDeleteArgsSchema_default;
//# sourceMappingURL=chunk-NXAGT5MM.cjs.map