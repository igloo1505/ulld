"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');

// src/database/outputTypeSchemas/RandomImageDeleteArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageDeleteArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageDeleteArgsSchema_default = RandomImageDeleteArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageDeleteArgsSchema = RandomImageDeleteArgsSchema; exports.RandomImageDeleteArgsSchema_default = RandomImageDeleteArgsSchema_default;
//# sourceMappingURL=chunk-26ZT4DH3.cjs.map