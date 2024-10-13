"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBHV3PY3Ccjs = require('./chunk-BHV3PY3C.cjs');


var _chunkZ633WBBEcjs = require('./chunk-Z633WBBE.cjs');

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
  data: _zod.z.union([_chunkBHV3PY3Ccjs.WaitlistRequestCreateInputSchema, _chunkZ633WBBEcjs.WaitlistRequestUncheckedCreateInputSchema])
}).strict();
var WaitlistRequestCreateArgsSchema_default = WaitlistRequestCreateArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestCreateArgsSchema = WaitlistRequestCreateArgsSchema; exports.WaitlistRequestCreateArgsSchema_default = WaitlistRequestCreateArgsSchema_default;
//# sourceMappingURL=chunk-YZRMJDAD.cjs.map