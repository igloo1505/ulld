"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDMVXS7CZcjs = require('./chunk-DMVXS7CZ.cjs');


var _chunkEXWECTUPcjs = require('./chunk-EXWECTUP.cjs');


var _chunk4VZCZVTKcjs = require('./chunk-4VZCZVTK.cjs');

// src/database/outputTypeSchemas/RandomImageUpdateArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageUpdateArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  data: _zod.z.union([_chunkDMVXS7CZcjs.RandomImageUpdateInputSchema, _chunkEXWECTUPcjs.RandomImageUncheckedUpdateInputSchema]),
  where: _chunk4VZCZVTKcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageUpdateArgsSchema_default = RandomImageUpdateArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageUpdateArgsSchema = RandomImageUpdateArgsSchema; exports.RandomImageUpdateArgsSchema_default = RandomImageUpdateArgsSchema_default;
//# sourceMappingURL=chunk-RGG6WUIX.cjs.map