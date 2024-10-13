"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ2TQBTGYcjs = require('./chunk-Q2TQBTGY.cjs');


var _chunk6ZQVBL7Ncjs = require('./chunk-6ZQVBL7N.cjs');


var _chunkDMVXS7CZcjs = require('./chunk-DMVXS7CZ.cjs');


var _chunkEXWECTUPcjs = require('./chunk-EXWECTUP.cjs');


var _chunk4VZCZVTKcjs = require('./chunk-4VZCZVTK.cjs');

// src/database/outputTypeSchemas/RandomImageUpsertArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageUpsertArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk4VZCZVTKcjs.RandomImageWhereUniqueInputSchema,
  create: _zod.z.union([_chunkQ2TQBTGYcjs.RandomImageCreateInputSchema, _chunk6ZQVBL7Ncjs.RandomImageUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkDMVXS7CZcjs.RandomImageUpdateInputSchema, _chunkEXWECTUPcjs.RandomImageUncheckedUpdateInputSchema])
}).strict();
var RandomImageUpsertArgsSchema_default = RandomImageUpsertArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageUpsertArgsSchema = RandomImageUpsertArgsSchema; exports.RandomImageUpsertArgsSchema_default = RandomImageUpsertArgsSchema_default;
//# sourceMappingURL=chunk-2KPAQO64.cjs.map