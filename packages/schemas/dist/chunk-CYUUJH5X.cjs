"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWJ5SHSPBcjs = require('./chunk-WJ5SHSPB.cjs');


var _chunkVBQO3RS4cjs = require('./chunk-VBQO3RS4.cjs');


var _chunkYN7OP673cjs = require('./chunk-YN7OP673.cjs');


var _chunkNQYHFAMGcjs = require('./chunk-NQYHFAMG.cjs');

// src/database/outputTypeSchemas/DJTGroupByArgsSchema.ts
var _zod = require('zod');
var DJTGroupByArgsSchema = _zod.z.object({
  where: _chunkNQYHFAMGcjs.DJTWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkWJ5SHSPBcjs.DJTOrderByWithAggregationInputSchema.array(), _chunkWJ5SHSPBcjs.DJTOrderByWithAggregationInputSchema]).optional(),
  by: _chunkYN7OP673cjs.DJTScalarFieldEnumSchema.array(),
  having: _chunkVBQO3RS4cjs.DJTScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DJTGroupByArgsSchema_default = DJTGroupByArgsSchema;




exports.DJTGroupByArgsSchema = DJTGroupByArgsSchema; exports.DJTGroupByArgsSchema_default = DJTGroupByArgsSchema_default;
//# sourceMappingURL=chunk-CYUUJH5X.cjs.map