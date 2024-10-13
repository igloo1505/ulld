"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ2TQBTGYcjs = require('./chunk-Q2TQBTGY.cjs');


var _chunk6ZQVBL7Ncjs = require('./chunk-6ZQVBL7N.cjs');

// src/database/outputTypeSchemas/RandomImageCreateArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageCreateArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  data: _zod.z.union([_chunkQ2TQBTGYcjs.RandomImageCreateInputSchema, _chunk6ZQVBL7Ncjs.RandomImageUncheckedCreateInputSchema])
}).strict();
var RandomImageCreateArgsSchema_default = RandomImageCreateArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageCreateArgsSchema = RandomImageCreateArgsSchema; exports.RandomImageCreateArgsSchema_default = RandomImageCreateArgsSchema_default;
//# sourceMappingURL=chunk-KULJOGPU.cjs.map