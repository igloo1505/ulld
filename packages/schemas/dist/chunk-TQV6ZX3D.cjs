"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4VZCZVTKcjs = require('./chunk-4VZCZVTK.cjs');

// src/database/outputTypeSchemas/RandomImageDeleteArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageDeleteArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk4VZCZVTKcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageDeleteArgsSchema_default = RandomImageDeleteArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageDeleteArgsSchema = RandomImageDeleteArgsSchema; exports.RandomImageDeleteArgsSchema_default = RandomImageDeleteArgsSchema_default;
//# sourceMappingURL=chunk-TQV6ZX3D.cjs.map