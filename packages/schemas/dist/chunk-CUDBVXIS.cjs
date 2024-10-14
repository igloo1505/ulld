"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6KLE3COQcjs = require('./chunk-6KLE3COQ.cjs');


var _chunkIWWVCX3Vcjs = require('./chunk-IWWVCX3V.cjs');


var _chunkOSYB6JG7cjs = require('./chunk-OSYB6JG7.cjs');

// src/database/outputTypeSchemas/WaitlistRequestAggregateArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestAggregateArgsSchema = _zod.z.object({
  where: _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6KLE3COQcjs.WaitlistRequestOrderByWithRelationInputSchema.array(), _chunk6KLE3COQcjs.WaitlistRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkIWWVCX3Vcjs.WaitlistRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WaitlistRequestAggregateArgsSchema_default = WaitlistRequestAggregateArgsSchema;




exports.WaitlistRequestAggregateArgsSchema = WaitlistRequestAggregateArgsSchema; exports.WaitlistRequestAggregateArgsSchema_default = WaitlistRequestAggregateArgsSchema_default;
//# sourceMappingURL=chunk-CUDBVXIS.cjs.map