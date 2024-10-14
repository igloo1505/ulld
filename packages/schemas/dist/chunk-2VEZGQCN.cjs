"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNN2554HUcjs = require('./chunk-NN2554HU.cjs');


var _chunkAQYQLGYPcjs = require('./chunk-AQYQLGYP.cjs');


var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');


var _chunkZOSYZ5FXcjs = require('./chunk-ZOSYZ5FX.cjs');

// src/database/outputTypeSchemas/RandomImageFindFirstArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageFindFirstArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNN2554HUcjs.RandomImageOrderByWithRelationInputSchema.array(), _chunkNN2554HUcjs.RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkAQYQLGYPcjs.RandomImageScalarFieldEnumSchema, _chunkAQYQLGYPcjs.RandomImageScalarFieldEnumSchema.array()]).optional()
}).strict();
var RandomImageFindFirstArgsSchema_default = RandomImageFindFirstArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageFindFirstArgsSchema = RandomImageFindFirstArgsSchema; exports.RandomImageFindFirstArgsSchema_default = RandomImageFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-2VEZGQCN.cjs.map