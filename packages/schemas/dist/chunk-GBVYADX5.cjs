"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBY2BJQDVcjs = require('./chunk-BY2BJQDV.cjs');

// src/database/outputTypeSchemas/RandomImageCreateManyArgsSchema.ts
var _zod = require('zod');
var RandomImageCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBY2BJQDVcjs.RandomImageCreateManyInputSchema, _chunkBY2BJQDVcjs.RandomImageCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RandomImageCreateManyArgsSchema_default = RandomImageCreateManyArgsSchema;




exports.RandomImageCreateManyArgsSchema = RandomImageCreateManyArgsSchema; exports.RandomImageCreateManyArgsSchema_default = RandomImageCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-GBVYADX5.cjs.map