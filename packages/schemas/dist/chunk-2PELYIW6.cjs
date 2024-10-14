"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSF47WOE2cjs = require('./chunk-SF47WOE2.cjs');

// src/database/outputTypeSchemas/WaitlistRequestCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSF47WOE2cjs.WaitlistRequestCreateManyInputSchema, _chunkSF47WOE2cjs.WaitlistRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestCreateManyAndReturnArgsSchema_default = WaitlistRequestCreateManyAndReturnArgsSchema;




exports.WaitlistRequestCreateManyAndReturnArgsSchema = WaitlistRequestCreateManyAndReturnArgsSchema; exports.WaitlistRequestCreateManyAndReturnArgsSchema_default = WaitlistRequestCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-2PELYIW6.cjs.map