"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');

// src/database/outputTypeSchemas/RandomImageFindUniqueArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageFindUniqueArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageFindUniqueArgsSchema_default = RandomImageFindUniqueArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageFindUniqueArgsSchema = RandomImageFindUniqueArgsSchema; exports.RandomImageFindUniqueArgsSchema_default = RandomImageFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-CXW6ALPA.cjs.map