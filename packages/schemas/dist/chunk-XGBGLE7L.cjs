"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCCIMBC4Wcjs = require('./chunk-CCIMBC4W.cjs');

// src/database/outputTypeSchemas/IpynbCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var IpynbCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkCCIMBC4Wcjs.IpynbCreateManyInputSchema, _chunkCCIMBC4Wcjs.IpynbCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var IpynbCreateManyAndReturnArgsSchema_default = IpynbCreateManyAndReturnArgsSchema;




exports.IpynbCreateManyAndReturnArgsSchema = IpynbCreateManyAndReturnArgsSchema; exports.IpynbCreateManyAndReturnArgsSchema_default = IpynbCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-XGBGLE7L.cjs.map