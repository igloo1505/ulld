"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4VZCZVTKcjs = require('./chunk-4VZCZVTK.cjs');

// src/database/outputTypeSchemas/RandomImageFindUniqueArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageFindUniqueArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk4VZCZVTKcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageFindUniqueArgsSchema_default = RandomImageFindUniqueArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageFindUniqueArgsSchema = RandomImageFindUniqueArgsSchema; exports.RandomImageFindUniqueArgsSchema_default = RandomImageFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-OFHGUCYN.cjs.map