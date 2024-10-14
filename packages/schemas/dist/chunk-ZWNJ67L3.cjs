"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNN2554HUcjs = require('./chunk-NN2554HU.cjs');


var _chunkAQYQLGYPcjs = require('./chunk-AQYQLGYP.cjs');


var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');


var _chunkZOSYZ5FXcjs = require('./chunk-ZOSYZ5FX.cjs');

// src/database/outputTypeSchemas/RandomImageFindManyArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageFindManyArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNN2554HUcjs.RandomImageOrderByWithRelationInputSchema.array(), _chunkNN2554HUcjs.RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkAQYQLGYPcjs.RandomImageScalarFieldEnumSchema, _chunkAQYQLGYPcjs.RandomImageScalarFieldEnumSchema.array()]).optional()
}).strict();
var RandomImageFindManyArgsSchema_default = RandomImageFindManyArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageFindManyArgsSchema = RandomImageFindManyArgsSchema; exports.RandomImageFindManyArgsSchema_default = RandomImageFindManyArgsSchema_default;
//# sourceMappingURL=chunk-ZWNJ67L3.cjs.map