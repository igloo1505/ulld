"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLHPFQN5Ncjs = require('./chunk-LHPFQN5N.cjs');

// src/database/outputTypeSchemas/RandomImageCreateManyArgsSchema.ts
var _zod = require('zod');
var RandomImageCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLHPFQN5Ncjs.RandomImageCreateManyInputSchema, _chunkLHPFQN5Ncjs.RandomImageCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RandomImageCreateManyArgsSchema_default = RandomImageCreateManyArgsSchema;




exports.RandomImageCreateManyArgsSchema = RandomImageCreateManyArgsSchema; exports.RandomImageCreateManyArgsSchema_default = RandomImageCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-7ENOBKKY.cjs.map