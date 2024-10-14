"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLLFXHQFLcjs = require('./chunk-LLFXHQFL.cjs');


var _chunkS7PMFYQ7cjs = require('./chunk-S7PMFYQ7.cjs');


var _chunk55E4S4FLcjs = require('./chunk-55E4S4FL.cjs');

// src/database/outputTypeSchemas/RandomImageUpdateArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageUpdateArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  data: _zod.z.union([_chunkLLFXHQFLcjs.RandomImageUpdateInputSchema, _chunkS7PMFYQ7cjs.RandomImageUncheckedUpdateInputSchema]),
  where: _chunk55E4S4FLcjs.RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageUpdateArgsSchema_default = RandomImageUpdateArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageUpdateArgsSchema = RandomImageUpdateArgsSchema; exports.RandomImageUpdateArgsSchema_default = RandomImageUpdateArgsSchema_default;
//# sourceMappingURL=chunk-P5PYOVXP.cjs.map