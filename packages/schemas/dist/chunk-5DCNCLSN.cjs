"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4ODIUHCJcjs = require('./chunk-4ODIUHCJ.cjs');


var _chunkNYFWKPAEcjs = require('./chunk-NYFWKPAE.cjs');


var _chunkVHR43W7Kcjs = require('./chunk-VHR43W7K.cjs');


var _chunkJLR3K3DTcjs = require('./chunk-JLR3K3DT.cjs');

// src/database/outputTypeSchemas/WaitlistRequestGroupByArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestGroupByArgsSchema = _zod.z.object({
  where: _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNYFWKPAEcjs.WaitlistRequestOrderByWithAggregationInputSchema.array(), _chunkNYFWKPAEcjs.WaitlistRequestOrderByWithAggregationInputSchema]).optional(),
  by: _chunkVHR43W7Kcjs.WaitlistRequestScalarFieldEnumSchema.array(),
  having: _chunk4ODIUHCJcjs.WaitlistRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WaitlistRequestGroupByArgsSchema_default = WaitlistRequestGroupByArgsSchema;




exports.WaitlistRequestGroupByArgsSchema = WaitlistRequestGroupByArgsSchema; exports.WaitlistRequestGroupByArgsSchema_default = WaitlistRequestGroupByArgsSchema_default;
//# sourceMappingURL=chunk-5DCNCLSN.cjs.map