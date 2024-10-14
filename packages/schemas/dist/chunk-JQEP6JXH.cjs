"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSF47WOE2cjs = require('./chunk-SF47WOE2.cjs');

// src/database/outputTypeSchemas/WaitlistRequestCreateManyArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSF47WOE2cjs.WaitlistRequestCreateManyInputSchema, _chunkSF47WOE2cjs.WaitlistRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestCreateManyArgsSchema_default = WaitlistRequestCreateManyArgsSchema;




exports.WaitlistRequestCreateManyArgsSchema = WaitlistRequestCreateManyArgsSchema; exports.WaitlistRequestCreateManyArgsSchema_default = WaitlistRequestCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-JQEP6JXH.cjs.map