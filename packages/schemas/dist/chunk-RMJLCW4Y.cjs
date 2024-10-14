"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBLR3KU4Ucjs = require('./chunk-BLR3KU4U.cjs');


var _chunkHL74LYOScjs = require('./chunk-HL74LYOS.cjs');


var _chunkSJ67LASDcjs = require('./chunk-SJ67LASD.cjs');


var _chunkOSYB6JG7cjs = require('./chunk-OSYB6JG7.cjs');

// src/database/outputTypeSchemas/WaitlistRequestGroupByArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestGroupByArgsSchema = _zod.z.object({
  where: _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkHL74LYOScjs.WaitlistRequestOrderByWithAggregationInputSchema.array(), _chunkHL74LYOScjs.WaitlistRequestOrderByWithAggregationInputSchema]).optional(),
  by: _chunkSJ67LASDcjs.WaitlistRequestScalarFieldEnumSchema.array(),
  having: _chunkBLR3KU4Ucjs.WaitlistRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WaitlistRequestGroupByArgsSchema_default = WaitlistRequestGroupByArgsSchema;




exports.WaitlistRequestGroupByArgsSchema = WaitlistRequestGroupByArgsSchema; exports.WaitlistRequestGroupByArgsSchema_default = WaitlistRequestGroupByArgsSchema_default;
//# sourceMappingURL=chunk-RMJLCW4Y.cjs.map