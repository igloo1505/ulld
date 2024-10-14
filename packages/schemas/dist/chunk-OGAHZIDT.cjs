"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');

// src/database/outputTypeSchemas/RandomImageFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageFindUniqueOrThrowArgsSchema_default = RandomImageFindUniqueOrThrowArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageFindUniqueOrThrowArgsSchema = RandomImageFindUniqueOrThrowArgsSchema; exports.RandomImageFindUniqueOrThrowArgsSchema_default = RandomImageFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-OGAHZIDT.cjs.map