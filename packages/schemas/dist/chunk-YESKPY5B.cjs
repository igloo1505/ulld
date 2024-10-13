"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4VZCZVTKcjs = require('./chunk-4VZCZVTK.cjs');

// src/database/outputTypeSchemas/RandomImageFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk4VZCZVTKcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageFindUniqueOrThrowArgsSchema_default = RandomImageFindUniqueOrThrowArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageFindUniqueOrThrowArgsSchema = RandomImageFindUniqueOrThrowArgsSchema; exports.RandomImageFindUniqueOrThrowArgsSchema_default = RandomImageFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-YESKPY5B.cjs.map