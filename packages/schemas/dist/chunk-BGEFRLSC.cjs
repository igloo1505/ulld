"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEEM7BASPcjs = require('./chunk-EEM7BASP.cjs');


var _chunkG4QG3AHFcjs = require('./chunk-G4QG3AHF.cjs');


var _chunkOTP4TDC3cjs = require('./chunk-OTP4TDC3.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/IpynbGroupByArgsSchema.ts
var _zod = require('zod');
var IpynbGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.IpynbWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkG4QG3AHFcjs.IpynbOrderByWithAggregationInputSchema.array(), _chunkG4QG3AHFcjs.IpynbOrderByWithAggregationInputSchema]).optional(),
  by: _chunkOTP4TDC3cjs.IpynbScalarFieldEnumSchema.array(),
  having: _chunkEEM7BASPcjs.IpynbScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var IpynbGroupByArgsSchema_default = IpynbGroupByArgsSchema;




exports.IpynbGroupByArgsSchema = IpynbGroupByArgsSchema; exports.IpynbGroupByArgsSchema_default = IpynbGroupByArgsSchema_default;
//# sourceMappingURL=chunk-BGEFRLSC.cjs.map