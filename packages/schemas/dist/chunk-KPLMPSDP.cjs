"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJINXTUMMcjs = require('./chunk-JINXTUMM.cjs');

// src/database/outputTypeSchemas/WaitlistRequestDeleteArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestDeleteArgsSchema = _zod.z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: _chunkJINXTUMMcjs.WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestDeleteArgsSchema_default = WaitlistRequestDeleteArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestDeleteArgsSchema = WaitlistRequestDeleteArgsSchema; exports.WaitlistRequestDeleteArgsSchema_default = WaitlistRequestDeleteArgsSchema_default;
//# sourceMappingURL=chunk-KPLMPSDP.cjs.map