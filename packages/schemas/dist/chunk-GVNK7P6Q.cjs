"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXSYDHKKBcjs = require('./chunk-XSYDHKKB.cjs');


var _chunkSQQ2TZI3cjs = require('./chunk-SQQ2TZI3.cjs');

// src/database/outputTypeSchemas/RandomImageCreateArgsSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageCreateArgsSchema = _zod.z.object({
  select: RandomImageSelectSchema.optional(),
  data: _zod.z.union([_chunkXSYDHKKBcjs.RandomImageCreateInputSchema, _chunkSQQ2TZI3cjs.RandomImageUncheckedCreateInputSchema])
}).strict();
var RandomImageCreateArgsSchema_default = RandomImageCreateArgsSchema;





exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.RandomImageCreateArgsSchema = RandomImageCreateArgsSchema; exports.RandomImageCreateArgsSchema_default = RandomImageCreateArgsSchema_default;
//# sourceMappingURL=chunk-GVNK7P6Q.cjs.map