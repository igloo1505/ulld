"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6KLE3COQcjs = require('./chunk-6KLE3COQ.cjs');


var _chunkSJ67LASDcjs = require('./chunk-SJ67LASD.cjs');


var _chunkIWWVCX3Vcjs = require('./chunk-IWWVCX3V.cjs');


var _chunkOSYB6JG7cjs = require('./chunk-OSYB6JG7.cjs');

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
  where: _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6KLE3COQcjs.WaitlistRequestOrderByWithRelationInputSchema.array(), _chunk6KLE3COQcjs.WaitlistRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkIWWVCX3Vcjs.WaitlistRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkSJ67LASDcjs.WaitlistRequestScalarFieldEnumSchema, _chunkSJ67LASDcjs.WaitlistRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var WaitlistRequestFindManyArgsSchema_default = WaitlistRequestFindManyArgsSchema;





exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.WaitlistRequestFindManyArgsSchema = WaitlistRequestFindManyArgsSchema; exports.WaitlistRequestFindManyArgsSchema_default = WaitlistRequestFindManyArgsSchema_default;
//# sourceMappingURL=chunk-G4XWLNUU.cjs.map