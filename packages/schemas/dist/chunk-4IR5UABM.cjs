"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZXOPIDIJcjs = require('./chunk-ZXOPIDIJ.cjs');

// src/database/outputTypeSchemas/WaitlistRequestCreateManyArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZXOPIDIJcjs.WaitlistRequestCreateManyInputSchema, _chunkZXOPIDIJcjs.WaitlistRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestCreateManyArgsSchema_default = WaitlistRequestCreateManyArgsSchema;




exports.WaitlistRequestCreateManyArgsSchema = WaitlistRequestCreateManyArgsSchema; exports.WaitlistRequestCreateManyArgsSchema_default = WaitlistRequestCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-4IR5UABM.cjs.map