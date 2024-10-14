"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUM2C5HXNcjs = require('./chunk-UM2C5HXN.cjs');


var _chunkIGVH2WA7cjs = require('./chunk-IGVH2WA7.cjs');


var _chunkY6Z7BL2Zcjs = require('./chunk-Y6Z7BL2Z.cjs');


var _chunkD6AKKWC4cjs = require('./chunk-D6AKKWC4.cjs');


var _chunkIWWVCX3Vcjs = require('./chunk-IWWVCX3V.cjs');

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
  where: _chunkIWWVCX3Vcjs.WaitlistRequestWhereUniqueInputSchema,
  create: _zod.z.union([_chunkUM2C5HXNcjs.WaitlistRequestCreateInputSchema, _chunkIGVH2WA7cjs.WaitlistRequestUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkY6Z7BL2Zcjs.WaitlistRequestUpdateInputSchema, _chunkD6AKKWC4cjs.WaitlistRequestUncheckedUpdateInputSchema])
}).strict();
var WaitlistRequestUpsertArgsSchema_default = WaitlistRequestUpsertArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestUpsertArgsSchema = WaitlistRequestUpsertArgsSchema; exports.WaitlistRequestUpsertArgsSchema_default = WaitlistRequestUpsertArgsSchema_default;
//# sourceMappingURL=chunk-CNGR7XUG.cjs.map