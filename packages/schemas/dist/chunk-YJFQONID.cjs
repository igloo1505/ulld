"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBHV3PY3Ccjs = require('./chunk-BHV3PY3C.cjs');


var _chunkZ633WBBEcjs = require('./chunk-Z633WBBE.cjs');


var _chunkAY3TJRMCcjs = require('./chunk-AY3TJRMC.cjs');


var _chunkL2RI3K32cjs = require('./chunk-L2RI3K32.cjs');


var _chunkJINXTUMMcjs = require('./chunk-JINXTUMM.cjs');

// src/database/outputTypeSchemas/WaitlistRequestUpsertArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestUpsertArgsSchema = _zod.z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: _chunkJINXTUMMcjs.WaitlistRequestWhereUniqueInputSchema,
  create: _zod.z.union([_chunkBHV3PY3Ccjs.WaitlistRequestCreateInputSchema, _chunkZ633WBBEcjs.WaitlistRequestUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkAY3TJRMCcjs.WaitlistRequestUpdateInputSchema, _chunkL2RI3K32cjs.WaitlistRequestUncheckedUpdateInputSchema])
}).strict();
var WaitlistRequestUpsertArgsSchema_default = WaitlistRequestUpsertArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestUpsertArgsSchema = WaitlistRequestUpsertArgsSchema; exports.WaitlistRequestUpsertArgsSchema_default = WaitlistRequestUpsertArgsSchema_default;
//# sourceMappingURL=chunk-YJFQONID.cjs.map