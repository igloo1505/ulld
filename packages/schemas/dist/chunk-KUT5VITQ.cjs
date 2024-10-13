"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJINXTUMMcjs = require('./chunk-JINXTUMM.cjs');

// src/database/outputTypeSchemas/WaitlistRequestFindUniqueArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestFindUniqueArgsSchema = _zod.z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: _chunkJINXTUMMcjs.WaitlistRequestWhereUniqueInputSchema
}).strict();
var WaitlistRequestFindUniqueArgsSchema_default = WaitlistRequestFindUniqueArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestFindUniqueArgsSchema = WaitlistRequestFindUniqueArgsSchema; exports.WaitlistRequestFindUniqueArgsSchema_default = WaitlistRequestFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-KUT5VITQ.cjs.map