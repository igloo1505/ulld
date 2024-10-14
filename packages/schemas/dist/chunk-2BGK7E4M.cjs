"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUM2C5HXNcjs = require('./chunk-UM2C5HXN.cjs');


var _chunkIGVH2WA7cjs = require('./chunk-IGVH2WA7.cjs');

// src/database/outputTypeSchemas/WaitlistRequestCreateArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestCreateArgsSchema = _zod.z.object({
  select: WaitlistRequestSelectSchema.optional(),
  data: _zod.z.union([_chunkUM2C5HXNcjs.WaitlistRequestCreateInputSchema, _chunkIGVH2WA7cjs.WaitlistRequestUncheckedCreateInputSchema])
}).strict();
var WaitlistRequestCreateArgsSchema_default = WaitlistRequestCreateArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestCreateArgsSchema = WaitlistRequestCreateArgsSchema; exports.WaitlistRequestCreateArgsSchema_default = WaitlistRequestCreateArgsSchema_default;
//# sourceMappingURL=chunk-2BGK7E4M.cjs.map