"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZXOPIDIJcjs = require('./chunk-ZXOPIDIJ.cjs');

// src/database/outputTypeSchemas/WaitlistRequestCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZXOPIDIJcjs.WaitlistRequestCreateManyInputSchema, _chunkZXOPIDIJcjs.WaitlistRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestCreateManyAndReturnArgsSchema_default = WaitlistRequestCreateManyAndReturnArgsSchema;




exports.WaitlistRequestCreateManyAndReturnArgsSchema = WaitlistRequestCreateManyAndReturnArgsSchema; exports.WaitlistRequestCreateManyAndReturnArgsSchema_default = WaitlistRequestCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-THQLBSRQ.cjs.map