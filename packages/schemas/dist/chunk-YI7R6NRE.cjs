"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAY3TJRMCcjs = require('./chunk-AY3TJRMC.cjs');


var _chunkL2RI3K32cjs = require('./chunk-L2RI3K32.cjs');


var _chunkJINXTUMMcjs = require('./chunk-JINXTUMM.cjs');

// src/database/outputTypeSchemas/WaitlistRequestUpdateArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestUpdateArgsSchema = _zod.z.object({
  select: WaitlistRequestSelectSchema.optional(),
  data: _zod.z.union([_chunkAY3TJRMCcjs.WaitlistRequestUpdateInputSchema, _chunkL2RI3K32cjs.WaitlistRequestUncheckedUpdateInputSchema]),
  where: _chunkJINXTUMMcjs.WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestUpdateArgsSchema_default = WaitlistRequestUpdateArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestUpdateArgsSchema = WaitlistRequestUpdateArgsSchema; exports.WaitlistRequestUpdateArgsSchema_default = WaitlistRequestUpdateArgsSchema_default;
//# sourceMappingURL=chunk-YI7R6NRE.cjs.map