"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBY2BJQDVcjs = require('./chunk-BY2BJQDV.cjs');

// src/database/outputTypeSchemas/RandomImageCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var RandomImageCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBY2BJQDVcjs.RandomImageCreateManyInputSchema, _chunkBY2BJQDVcjs.RandomImageCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RandomImageCreateManyAndReturnArgsSchema_default = RandomImageCreateManyAndReturnArgsSchema;




exports.RandomImageCreateManyAndReturnArgsSchema = RandomImageCreateManyAndReturnArgsSchema; exports.RandomImageCreateManyAndReturnArgsSchema_default = RandomImageCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-UCUYTILI.cjs.map