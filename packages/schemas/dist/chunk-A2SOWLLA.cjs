"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLHPFQN5Ncjs = require('./chunk-LHPFQN5N.cjs');

// src/database/outputTypeSchemas/RandomImageCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var RandomImageCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLHPFQN5Ncjs.RandomImageCreateManyInputSchema, _chunkLHPFQN5Ncjs.RandomImageCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RandomImageCreateManyAndReturnArgsSchema_default = RandomImageCreateManyAndReturnArgsSchema;




exports.RandomImageCreateManyAndReturnArgsSchema = RandomImageCreateManyAndReturnArgsSchema; exports.RandomImageCreateManyAndReturnArgsSchema_default = RandomImageCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-A2SOWLLA.cjs.map