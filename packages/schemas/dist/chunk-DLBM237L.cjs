"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI4ZHE2SUcjs = require('./chunk-I4ZHE2SU.cjs');


var _chunkVHR43W7Kcjs = require('./chunk-VHR43W7K.cjs');


var _chunkJINXTUMMcjs = require('./chunk-JINXTUMM.cjs');


var _chunkJLR3K3DTcjs = require('./chunk-JLR3K3DT.cjs');

// src/database/outputTypeSchemas/WaitlistRequestFindManyArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestFindManyArgsSchema = _zod.z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkI4ZHE2SUcjs.WaitlistRequestOrderByWithRelationInputSchema.array(), _chunkI4ZHE2SUcjs.WaitlistRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkJINXTUMMcjs.WaitlistRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkVHR43W7Kcjs.WaitlistRequestScalarFieldEnumSchema, _chunkVHR43W7Kcjs.WaitlistRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var WaitlistRequestFindManyArgsSchema_default = WaitlistRequestFindManyArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestFindManyArgsSchema = WaitlistRequestFindManyArgsSchema; exports.WaitlistRequestFindManyArgsSchema_default = WaitlistRequestFindManyArgsSchema_default;
//# sourceMappingURL=chunk-DLBM237L.cjs.map