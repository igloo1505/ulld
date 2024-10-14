"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXSYDHKKBcjs = require('./chunk-XSYDHKKB.cjs');


var _chunkSQQ2TZI3cjs = require('./chunk-SQQ2TZI3.cjs');


var _chunkLLFXHQFLcjs = require('./chunk-LLFXHQFL.cjs');


var _chunkS7PMFYQ7cjs = require('./chunk-S7PMFYQ7.cjs');


var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');

// src/database/outputTypeSchemas/RandomImageUpsertArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageUpsertArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  where: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema,
  create: _zod.z.union([_chunkXSYDHKKBcjs.RandomImageCreateInputSchema, _chunkSQQ2TZI3cjs.RandomImageUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkLLFXHQFLcjs.RandomImageUpdateInputSchema, _chunkS7PMFYQ7cjs.RandomImageUncheckedUpdateInputSchema])
}).strict();
var RandomImageUpsertArgsSchema_default = RandomImageUpsertArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageUpsertArgsSchema = RandomImageUpsertArgsSchema; exports.RandomImageUpsertArgsSchema_default = RandomImageUpsertArgsSchema_default;
//# sourceMappingURL=chunk-REJ5LJMG.cjs.map