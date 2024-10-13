"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNWTJVV2Mcjs = require('./chunk-NWTJVV2M.cjs');


var _chunkDN3XII3Jcjs = require('./chunk-DN3XII3J.cjs');


var _chunk4VZCZVTKcjs = require('./chunk-4VZCZVTK.cjs');


var _chunkH7ATQFXCcjs = require('./chunk-H7ATQFXC.cjs');

// src/database/outputTypeSchemas/RandomImageFindFirstArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageFindFirstArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunkH7ATQFXCcjs.RandomImageWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNWTJVV2Mcjs.RandomImageOrderByWithRelationInputSchema.array(), _chunkNWTJVV2Mcjs.RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk4VZCZVTKcjs.RandomImageWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkDN3XII3Jcjs.RandomImageScalarFieldEnumSchema, _chunkDN3XII3Jcjs.RandomImageScalarFieldEnumSchema.array()]).optional()
}).strict();
var RandomImageFindFirstArgsSchema_default = RandomImageFindFirstArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageFindFirstArgsSchema = RandomImageFindFirstArgsSchema; exports.RandomImageFindFirstArgsSchema_default = RandomImageFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-4VRBHJYM.cjs.map