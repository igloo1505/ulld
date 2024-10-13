"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJINXTUMMcjs = require('./chunk-JINXTUMM.cjs');

// src/database/outputTypeSchemas/WaitlistRequestFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: _chunkJINXTUMMcjs.WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestFindUniqueOrThrowArgsSchema_default = WaitlistRequestFindUniqueOrThrowArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestFindUniqueOrThrowArgsSchema = WaitlistRequestFindUniqueOrThrowArgsSchema; exports.WaitlistRequestFindUniqueOrThrowArgsSchema_default = WaitlistRequestFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-DY7EDEQ5.cjs.map