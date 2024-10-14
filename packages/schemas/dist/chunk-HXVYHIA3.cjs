"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY6Z7BL2Zcjs = require('./chunk-Y6Z7BL2Z.cjs');


var _chunkD6AKKWC4cjs = require('./chunk-D6AKKWC4.cjs');


var _chunkIWWVCX3Vcjs = require('./chunk-IWWVCX3V.cjs');

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
  data: _zod.z.union([_chunkY6Z7BL2Zcjs.WaitlistRequestUpdateInputSchema, _chunkD6AKKWC4cjs.WaitlistRequestUncheckedUpdateInputSchema]),
  where: _chunkIWWVCX3Vcjs.WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestUpdateArgsSchema_default = WaitlistRequestUpdateArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestUpdateArgsSchema = WaitlistRequestUpdateArgsSchema; exports.WaitlistRequestUpdateArgsSchema_default = WaitlistRequestUpdateArgsSchema_default;
//# sourceMappingURL=chunk-HXVYHIA3.cjs.map